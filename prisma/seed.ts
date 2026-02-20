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

  // Create regular test user
  const hashedUserPassword = await bcrypt.hash('password123', 10);
  const testUser = await prisma.user.create({
    data: {
      email: 'test@ethioai.com',
      name: 'Abebe Kebede',
      password: hashedUserPassword,
      bio: 'Senior data annotator specializing in Ethiopian languages and agricultural AI. Passionate about building Ethiopia\'s digital future.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Abebe',
      language: 'Amharic',
      role: 'USER',
      points: 450.50,
    },
  });

  // Create admin user
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@ethioai.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  const hashedAdminPassword = await bcrypt.hash(adminPassword, 10);

  const adminUser = await prisma.user.create({
    data: {
      email: adminEmail,
      name: 'EthioAI Administrator',
      password: hashedAdminPassword,
      role: 'ADMIN',
      bio: 'System Administrator for EthioAI Platform.',
      language: 'English',
      points: 0,
    },
  });

  console.log('✅ Created test user:', testUser.name, `(${testUser.id})`);
  console.log('✅ Created admin user:', adminUser.name, `(${adminUser.id})`);

  // Create Mock Projects
  const projectData = [
    {
      name: 'Project Gomen',
      type: TaskType.Image,
      description: 'Harnessing computer vision to safeguard Ethiopia\'s food security by identifying early-stage pests in highland vegetable clusters.',
      progress: 65,
      rewardPerTask: 0.75,
      contributors: 124,
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1000&auto=format&fit=crop'
    },
    {
      name: 'Zelesn-AI',
      type: TaskType.Audio,
      description: 'Preserving Ethiopia\'s oral heritage through advanced neural transcription of Ge\'ez liturgical chants and rare regional dialects.',
      progress: 42,
      rewardPerTask: 1.20,
      contributors: 56,
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd0562c3e?q=80&w=1000&auto=format&fit=crop'
    },
    {
      name: 'Sheger Flow',
      type: TaskType.Text,
      description: 'Optimizing urban mobility in Addis Ababa via sentiment-aware analysis of integrated transport infrastructure feedback.',
      progress: 88,
      rewardPerTask: 0.45,
      contributors: 312,
      image: 'https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?q=80&w=1000&auto=format&fit=crop'
    },
    {
      name: 'Health-Link',
      type: TaskType.Image,
      description: 'Pioneering remote diagnostic excellence through high-precision AI labeling of medical datasets for rural healthcare networks.',
      progress: 29,
      rewardPerTask: 2.50,
      contributors: 18,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop'
    },
    {
      name: 'Agro-Pulse',
      type: TaskType.Image,
      description: 'Satellite-base crop yield prediction using advanced spectral analysis and machine learning for Ethiopian Rift Valley farms.',
      progress: 15,
      rewardPerTask: 1.85,
      contributors: 34,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop'
    },
    {
      name: 'Lingo-Bridge',
      type: TaskType.Text,
      description: 'Developing high-fidelity translation models for low-resource Ethiopian languages to enable inclusive digital government services.',
      progress: 55,
      rewardPerTask: 0.95,
      contributors: 89,
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop'
    },
    {
      name: 'Eco-Echo',
      type: TaskType.Audio,
      description: 'Acoustic monitoring of biodiversity in the Bale Mountains to track endangered species through AI-powered sound recognition.',
      progress: 10,
      rewardPerTask: 3.20,
      contributors: 12,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop'
    },
  ];

  const createdProjects = [];
  for (const p of projectData) {
    const project = await prisma.project.create({ data: p });
    createdProjects.push(project);
    console.log(`✅ Created project: ${project.name}`);
  }

  // Create 15 diverse mock tasks
  const taskData = [
    { title: 'Amharic Sentiment Analysis', type: TaskType.Text, description: 'Analyze sentiment of Amharic social media posts.', projectName: 'Sheger Flow' },
    { title: 'Coffee Leaf Disease Detection', type: TaskType.Image, description: 'Label disease symptoms on coffee leaf images.', projectName: 'Project Gomen' },
    { title: 'Oromo Speech Transcription', type: TaskType.Audio, description: 'Transcribe Oromo language audio recordings.', projectName: 'Zelesn-AI' },
    { title: 'Teff Grain Quality Assessment', type: TaskType.Image, description: 'Classify teff grain quality.', projectName: 'Project Gomen' },
    { title: 'Ethiopian Road Sign Recognition', type: TaskType.Image, description: 'Identify and label traffic signs.', projectName: 'Project Gomen' },
    { title: 'Satellite Imagery Land Use', type: TaskType.Image, description: 'Classify agricultural and urban land use.', projectName: 'Project Gomen' },
    { title: 'Traditional Fabric Pattern Recognition', type: TaskType.Image, description: 'Identify traditional Ethiopian patterns.', projectName: 'Project Gomen' },
    { title: 'Tigrinya Document Translation', type: TaskType.Text, description: 'Translate Tigrinya documents to English.', projectName: 'Sheger Flow' },
    { title: 'Amharic Named Entity Recognition', type: TaskType.Text, description: 'Identify entities in Amharic news.', projectName: 'Sheger Flow' },
    { title: 'Ethiopian Product Review Classification', type: TaskType.Text, description: 'Categorize e-commerce product reviews.', projectName: 'Sheger Flow' },
    { title: 'Gurage Language Text Collection', type: TaskType.Text, description: 'Collect Gurage language text samples.', projectName: 'Sheger Flow' },
    { title: 'Amharic Call Center Audio', type: TaskType.Audio, description: 'Transcribe customer service calls.', projectName: 'Zelesn-AI' },
    { title: 'Tigrinya Radio Broadcast Transcription', type: TaskType.Audio, description: 'Transcribe news segments.', projectName: 'Zelesn-AI' },
    { title: 'Wolaytta Folk Song Annotation', type: TaskType.Audio, description: 'Transcribe traditional folk songs.', projectName: 'Zelesn-AI' },
    { title: 'Sidama Language Voice Commands', type: TaskType.Audio, description: 'Record Sidama voice commands.', projectName: 'Zelesn-AI' },
  ];

  for (const data of taskData) {
    const { projectName, ...tData } = data;
    const project = createdProjects.find(p => p.name === projectName);

    await prisma.task.create({
      data: {
        ...tData,
        status: getRandomStatus(),
        rewardAmount: project?.rewardPerTask || getRandomReward(),
        userId: testUser.id,
        projectId: project?.id,
      },
    });
  }

  console.log('\n🎉 MongoDB Seed completed successfully!');
  console.log(`📊 Summary:`);
  console.log(`   • 1 test user created`);
  console.log(`   • 1 admin user created`);
  console.log(`   • ${createdProjects.length} projects created`);
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
