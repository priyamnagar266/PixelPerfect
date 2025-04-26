import { db } from "../server/db";
import { services, portfolioItems, teamMembers, blogPosts, testimonials, users } from "@shared/schema";
import { services as servicesData } from "../server/data/services";
import { portfolioItems as portfolioItemsData } from "../server/data/portfolio";
import { teamMembers as teamMembersData } from "../server/data/team";
import { blogPosts as blogPostsData } from "../server/data/blog";
import { testimonials as testimonialsData } from "../server/data/testimonials";
import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

async function seedDatabase() {
  console.log("Seeding database...");

  // Seed services
  try {
    console.log("Seeding services...");
    for (const service of servicesData) {
      await db.insert(services).values(service).onConflictDoNothing();
    }
    console.log("Services seeded successfully");
  } catch (error) {
    console.error("Error seeding services:", error);
  }

  // Seed portfolio items
  try {
    console.log("Seeding portfolio items...");
    for (const item of portfolioItemsData) {
      await db.insert(portfolioItems).values(item).onConflictDoNothing();
    }
    console.log("Portfolio items seeded successfully");
  } catch (error) {
    console.error("Error seeding portfolio items:", error);
  }

  // Seed team members
  try {
    console.log("Seeding team members...");
    for (const member of teamMembersData) {
      await db.insert(teamMembers).values(member).onConflictDoNothing();
    }
    console.log("Team members seeded successfully");
  } catch (error) {
    console.error("Error seeding team members:", error);
  }

  // Seed blog posts
  try {
    console.log("Seeding blog posts...");
    for (const post of blogPostsData) {
      await db.insert(blogPosts).values(post).onConflictDoNothing();
    }
    console.log("Blog posts seeded successfully");
  } catch (error) {
    console.error("Error seeding blog posts:", error);
  }

  // Seed testimonials
  try {
    console.log("Seeding testimonials...");
    for (const testimonial of testimonialsData) {
      await db.insert(testimonials).values(testimonial).onConflictDoNothing();
    }
    console.log("Testimonials seeded successfully");
  } catch (error) {
    console.error("Error seeding testimonials:", error);
  }

  // Create admin user
  try {
    console.log("Creating admin user...");
    const hashedPassword = await hashPassword("admin123");
    await db.insert(users).values({
      username: "admin",
      password: hashedPassword,
      name: "Admin User",
      email: "admin@pixelperfect.com",
      role: "admin"
    }).onConflictDoNothing();
    console.log("Admin user created successfully");
  } catch (error) {
    console.error("Error creating admin user:", error);
  }

  console.log("Database seeding completed");
  process.exit(0);
}

seedDatabase().catch(console.error);