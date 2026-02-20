import { PrismaClient, TaskType, TaskStatus } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

function getRandomReward(): number {
  return parseFloat((Math.random() * 4.5 + 0.5).toFixed(2));
}

function getRandomStatus(): TaskStatus {
  const statuses = [TaskStatus.COMPLETED, TaskStatus.PENDING, TaskStatus.IN_PROGRESS];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

async function main() {
  console.log('🌱 Starting MongoDB database seed...\n');

  // Clear existing data (MongoDB needs this or it will just append)
  await prisma.task.deleteMany({});
  await prisma.user.deleteMany({});
  console.log('🧹 Cleared existing data\n');

  // Create main test user
  const hashedPassword = await bcrypt.hash('password123', 10);
  const testUser = await prisma.user.create({
    data: {
      email: 'test@ethioai.com',
      name: 'Abebe Kebede',
      password: hashedPassword,
      bio: 'Senior data annotator specializing in Ethiopian languages and agricultural AI. Passionate about building Ethiopia\'s digital future.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Abebe',
      language: 'Amharic',
      role: 'USER',
      points: 450.50,
    },
  });

  console.log('✅ Created test user:', testUser.name, `(${testUser.id})`);

  // Create 15 diverse mock tasks
  const taskData = [
    { title: 'Amharic Sentiment Analysis', type: TaskType.Text, description: 'Analyze sentiment of Amharic social media posts.' },
    { title: 'Coffee Leaf Disease Detection', type: TaskType.Image, description: 'Label disease symptoms on coffee leaf images.' },
    { title: 'Oromo Speech Transcription', type: TaskType.Audio, description: 'Transcribe Oromo language audio recordings.' },
    { title: 'Teff Grain Quality Assessment', type: TaskType.Image, description: 'Classify teff grain quality.' },
    { title: 'Ethiopian Road Sign Recognition', type: TaskType.Image, description: 'Identify and label traffic signs.' },
    { title: 'Satellite Imagery Land Use', type: TaskType.Image, description: 'Classify agricultural and urban land use.' },
    { title: 'Traditional Fabric Pattern Recognition', type: TaskType.Image, description: 'Identify traditional Ethiopian patterns.' },
    { title: 'Tigrinya Document Translation', type: TaskType.Text, description: 'Translate Tigrinya documents to English.' },
    { title: 'Amharic Named Entity Recognition', type: TaskType.Text, description: 'Identify entities in Amharic news.' },
    { title: 'Ethiopian Product Review Classification', type: TaskType.Text, description: 'Categorize e-commerce product reviews.' },
    { title: 'Gurage Language Text Collection', type: TaskType.Text, description: 'Collect Gurage language text samples.' },
    { title: 'Amharic Call Center Audio', type: TaskType.Audio, description: 'Transcribe customer service calls.' },
    { title: 'Tigrinya Radio Broadcast Transcription', type: TaskType.Audio, description: 'Transcribe news segments.' },
    { title: 'Wolaytta Folk Song Annotation', type: TaskType.Audio, description: 'Transcribe traditional folk songs.' },
    { title: 'Sidama Language Voice Commands', type: TaskType.Audio, description: 'Record Sidama voice commands.' },
  ];

  for (const data of taskData) {
    await prisma.task.create({
      data: {
        ...data,
        status: getRandomStatus(),
        rewardAmount: getRandomReward(),
        userId: testUser.id,
      },
    });
  }

  console.log('\n🎉 MongoDB Seed completed successfully!');
  console.log(`📊 Summary:`);
  console.log(`   • 1 test user created`);
  console.log(`   • ${taskData.length} tasks created`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
