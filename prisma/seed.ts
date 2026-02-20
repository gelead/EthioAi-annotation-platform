import { PrismaClient, TaskType, Status } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...\n');

  // Create test user
  const testUser = await prisma.user.upsert({
    where: { email: 'test@ethioai.com' },
    update: {},
    create: {
      email: 'test@ethioai.com',
      name: 'Abebe Kebede',
      password: 'hashedpassword123',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Abebe',
      bio: 'Senior data annotator specializing in Amharic text and medical imaging. Passionate about building Ethiopia\'s AI future.',
      role: 'annotator',
      totalPoints: 12450,
      qualityScore: 98.5,
    },
  });

  console.log('✅ Created test user:', testUser.name);

  // Clear existing tasks
  await prisma.task.deleteMany();
  console.log('🧹 Cleared existing tasks\n');

  // Create 10 mock tasks
  const tasks = [
    // 4 Image Labeling tasks
    {
      title: 'Medical X-Ray Classification',
      type: TaskType.IMAGE_LABELING,
      description: 'Label chest X-ray images as normal or abnormal for pneumonia detection dataset.',
      status: Status.COMPLETED,
      reward: 2.0,
      userId: testUser.id,
    },
    {
      title: 'Agricultural Crop Disease Detection',
      type: TaskType.IMAGE_LABELING,
      description: 'Identify and label disease symptoms on teff and wheat crop images.',
      status: Status.PENDING,
      reward: 1.5,
    },
    {
      title: 'Ethiopian Road Sign Recognition',
      type: TaskType.IMAGE_LABELING,
      description: 'Label traffic signs and road markers from Addis Ababa street view images.',
      status: Status.IN_PROGRESS,
      reward: 1.25,
      userId: testUser.id,
    },
    {
      title: 'Satellite Imagery Land Use',
      type: TaskType.IMAGE_LABELING,
      description: 'Classify land use types from satellite imagery of Ethiopian regions.',
      status: Status.PENDING,
      reward: 1.75,
    },
    // 3 Audio Transcription tasks
    {
      title: 'Amharic Call Center Transcription',
      type: TaskType.AUDIO_TRANSCRIPTION,
      description: 'Transcribe customer service calls in Amharic for chatbot training data.',
      status: Status.COMPLETED,
      reward: 1.8,
      userId: testUser.id,
    },
    {
      title: 'Oromiffa Radio Broadcast Transcription',
      type: TaskType.AUDIO_TRANSCRIPTION,
      description: 'Transcribe news segments from Oromiffa radio broadcasts.',
      status: Status.PENDING,
      reward: 1.5,
    },
    {
      title: 'Tigrinya Interview Recording',
      type: TaskType.AUDIO_TRANSCRIPTION,
      description: 'Transcribe oral history interviews conducted in Tigrinya.',
      status: Status.IN_PROGRESS,
      reward: 1.6,
      userId: testUser.id,
    },
    // 3 Sentiment Analysis tasks
    {
      title: 'Amharic Social Media Sentiment',
      type: TaskType.SENTIMENT_ANALYSIS,
      description: 'Analyze sentiment of Amharic tweets and Facebook posts about current events.',
      status: Status.COMPLETED,
      reward: 0.75,
      userId: testUser.id,
    },
    {
      title: 'Product Review Sentiment Classification',
      type: TaskType.SENTIMENT_ANALYSIS,
      description: 'Classify sentiment of Ethiopian e-commerce product reviews.',
      status: Status.PENDING,
      reward: 0.5,
    },
    {
      title: 'Customer Feedback Sentiment',
      type: TaskType.SENTIMENT_ANALYSIS,
      description: 'Analyze sentiment from customer feedback forms for local businesses.',
      status: Status.PENDING,
      reward: 0.65,
    },
  ];

  for (const task of tasks) {
    const created = await prisma.task.create({
      data: task,
    });
    console.log(`✅ Created task: ${created.title} (${created.type}) - $${created.reward}`);
  }

  console.log('\n🎉 Seed completed successfully!');
  console.log(`📊 Summary:`);
  console.log(`   • 1 test user created`);
  console.log(`   • ${tasks.filter(t => t.type === TaskType.IMAGE_LABELING).length} Image Labeling tasks`);
  console.log(`   • ${tasks.filter(t => t.type === TaskType.AUDIO_TRANSCRIPTION).length} Audio Transcription tasks`);
  console.log(`   • ${tasks.filter(t => t.type === TaskType.SENTIMENT_ANALYSIS).length} Sentiment Analysis tasks`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
