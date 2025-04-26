import { TeamMember } from "../../shared/schema";

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "David Chen",
    position: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    socialLinks: [
      { platform: "linkedin", url: "#" },
      { platform: "twitter", url: "#" }
    ]
  },
  {
    id: 2,
    name: "Sophia Martinez",
    position: "Lead Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    socialLinks: [
      { platform: "linkedin", url: "#" },
      { platform: "github", url: "#" }
    ]
  },
  {
    id: 3,
    name: "James Wilson",
    position: "UX Designer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    socialLinks: [
      { platform: "linkedin", url: "#" },
      { platform: "dribbble", url: "#" }
    ]
  },
  {
    id: 4,
    name: "Emily Johnson",
    position: "Marketing Strategist",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    socialLinks: [
      { platform: "linkedin", url: "#" },
      { platform: "twitter", url: "#" }
    ]
  }
];
