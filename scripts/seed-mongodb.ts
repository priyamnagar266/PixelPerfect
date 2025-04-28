import { connectToDatabase } from '../server/mongodb';
import { 
  User, Service, PortfolioItem, TeamMember, 
  BlogPost, Testimonial
} from '../server/models';
import { createHash, randomBytes } from 'crypto';

// Data imports
import { services } from '../server/data/services';
import { portfolioItems } from '../server/data/portfolio';
import { teamMembers } from '../server/data/team';
import { blogPosts } from '../server/data/blog';
import { testimonials } from '../server/data/testimonials';

// Helper function to hash passwords
async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString('hex');
  const hash = createHash('sha256').update(password + salt).digest('hex');
  return `${hash}.${salt}`;
}

async function seedDatabase() {
  console.log('Seeding database...');
  
  try {
    // Connect to MongoDB
    const db = await connectToDatabase();
    
    // Clear existing data
    await Service.deleteMany({});
    await PortfolioItem.deleteMany({});
    await TeamMember.deleteMany({});
    await BlogPost.deleteMany({});
    await Testimonial.deleteMany({});
    await User.deleteMany({});
    
    // Seed services
    console.log('Seeding services...');
    await Service.insertMany(services);
    console.log('Services seeded successfully');
    
    // Seed portfolio items
    console.log('Seeding portfolio items...');
    await PortfolioItem.insertMany(portfolioItems);
    console.log('Portfolio items seeded successfully');
    
    // Seed team members
    console.log('Seeding team members...');
    await TeamMember.insertMany(teamMembers);
    console.log('Team members seeded successfully');
    
    // Seed blog posts
    console.log('Seeding blog posts...');
    await BlogPost.insertMany(blogPosts);
    console.log('Blog posts seeded successfully');
    
    // Seed testimonials
    console.log('Seeding testimonials...');
    await Testimonial.insertMany(testimonials);
    console.log('Testimonials seeded successfully');
    
    // Create admin user
    console.log('Creating admin user...');
    const adminUser = new User({
      username: 'admin',
      password: await hashPassword('admin123'),
      name: 'Admin User',
      email: 'admin@example.com',
      role: 'admin'
    });
    await adminUser.save();
    console.log('Admin user created successfully');
    
    console.log('Database seeding completed');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();