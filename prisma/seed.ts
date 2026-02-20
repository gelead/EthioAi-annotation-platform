import { PrismaClient, TaskType, TaskStatus } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

function getRandomReward(): number {
  return parseFloat((Math.random() * 4.5 + 0.5).toFixed(2));
}

function getRandomStatus(): TaskStatus {
  return Math.random() > 0.5 ? TaskStatus.COMPLETED : TaskStatus.PENDING;
}

async function main() {
  console.log('🌱 Starting database seed...\n');

  // Create main test user
  const testUser = await prisma.user.upsert({
    where: { email: 'test@ethioai.com' },
    update: {},
    create: {
      email: 'test@ethioai.com',
      name: 'Abebe Kebede',
      password: await bcrypt.hash('password123', 10),
      bio: 'Senior data annotator specializing in Ethiopian languages and agricultural AI. Passionate about building Ethiopia\'s digital future.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Abebe',
      language: 'Amharic',
    },
  });

  console.log('✅ Created test user:', testUser.name);

  // Clear existing tasks
  await prisma.task.deleteMany();
  console.log('🧹 Cleared existing tasks\n');

  // Create 15 diverse mock tasks
  const tasks = [
    // Required specific tasks
    {
      title: 'Amharic Sentiment Analysis',
      type: TaskType.Text,
      description: 'Analyze sentiment of Amharic social media posts and customer reviews for local businesses.',
      status: getRandomStatus(),
      rewardAmount: getRandomReward(),
      userId: testUser.id,
    },
    {
      title: 'Coffee Leaf Disease Detection',
      type: TaskType.Image,
      description: 'Label disease symptoms on coffee leaf images from Ethiopian highland farms.',
      status: getRandomStatus(),
      rewardAmount: getRandomReward(),
      userId: testUser.id,
    },
    {
      title: 'Oromo Speech Transcription',
      type: TaskType.Audio,
      description: 'Transcribe Oromo language audio recordings for speech recognition training.',
      status: getRandomStatus(),
      rewardAmount: getRandomReward(),
      userId: testUser.id,
    },
    // Additional Image tasks
    {
      title: 'Teff Grain Quality Assessment',
      type: TaskType.Image,
      description: 'Classify teff grain quality from high-resolution images for export grading.',
      status: getRandomStatus(),
      rewardAmount: getRandomReward(),
      userId: testUser.id,
    },
    {
      title: 'Ethiopian Road Sign Recognition',
      type: TaskType.Image,
      description: 'Identify and label traffic signs from Addis Ababa and regional cities.',
      status: getRandomStatus(),
      rewardAmount: getRandomReward(),
      userId: testUser.id,
    },
    {
      title: 'Satellite Imagery Land Use',
      type: TaskType.Image,
      description: 'Classify agricultural and urban land use from satellite imagery.',
      status: getRandomStatus(),
      rewardAmount: getRandomReward(),
      userId: testUser.id,
    },
    {
      title: 'Traditional Fabric Pattern Recognition',
      type: TaskType.Image,
      description: 'Identify and categorize traditional Ethiopian textile patterns.',
      status: getRandomStatus(),
      rewardAmount: getRandomReward(),
      userId: testUser.id,
    },
    // Additional Text tasks
    {
      title: 'Tigrinya Document Translation',
      type: TaskType.Text,
      description: 'Translate Tigrinya legal and administrative documents to English.',
      status: getRandomStatus(),
      rewardAmount: getRandomReward(),
      userId: testUser.id,
    },
    {
      title: 'Amharic Named Entity Recognition',
      type: TaskType.Text,
      description: 'Identify names of people, places, and organizations in Amharic news articles.',
      status: getRandomStatus(),
      rewardAmount: getRandomReward(),
      userId: testUser.id,
    },
    {
      title: 'Ethiopian Product Review Classification',
      type: TaskType.Text,
      description: 'Categorize e-commerce product reviews by product type and sentiment.',
      status: getRandomStatus(),
      rewardAmount: getRandomReward(),
      userId: testUser.id,
    },
    {
      title: 'Gurage Language Text Collection',
      type: TaskType.Text,
      description: 'Collect and validate Gurage language text samples for NLP research.',
      status: getRandomStatus(),
      rewardAmount: getRandomReward(),
      userId: testUser.id,
    },
    // Additional Audio tasks
    {
      title: 'Amharic Call Center Audio',
      type: TaskType.Audio,
      description: 'Transcribe customer service calls from Ethiopian telecom providers.',
      status: getRandomStatus(),
      rewardAmount: getRandomReward(),
      userId: testUser.id,
    },
    {
      title: 'Tigrinya Radio Broadcast Transcription',
      type: TaskType.Audio,
      description: 'Transcribe news segments from Tigrinya radio stations.',
      status: getRandomStatus(),
      rewardAmount: getRandomReward(),
      userId: testUser.id,
    },
    {
      title: 'Wolaytta Folk Song Annotation',
      type: TaskType.Audio,
      description: 'Transcribe and annotate traditional Wolaytta folk songs.',
      status: getRandomStatus(),
      rewardAmount: getRandomReward(),
      userId: testUser.id,
    },
    {
      title: 'Sidama Language Voice Commands',
      type: TaskType.Audio,
      description: 'Record and verify Sidama language voice commands for mobile app integration.',
      status: getRandomStatus(),
      rewardAmount: getRandomReward(),
      userId: testUser.id,
    },
  ];

  for (const task of tasks) {
    const created = await prisma.task.create({
      data: task,
    });
    console.log(`✅ Created task: ${created.title} (${created.type}) - $${created.rewardAmount} - ${created.status}`);
  }

  console.log('\n🎉 Seed completed successfully!');
  console.log(`📊 Summary:`);
  console.log(`   • 1 test user created`);
  console.log(`   • ${tasks.filter(t => t.type === TaskType.Image).length} Image tasks`);
  console.log(`   • ${tasks.filter(t => t.type === TaskType.Text).length} Text tasks`);
  console.log(`   • ${tasks.filter(t => t.type === TaskType.Audio).length} Audio tasks`);
  console.log(`   • Total rewards: $${tasks.reduce((sum, t) => sum + (t as any).rewardAmount, 0).toFixed(2)}`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
