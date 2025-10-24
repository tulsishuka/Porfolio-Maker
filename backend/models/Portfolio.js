import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  template: { type: String, default: "template1" },

  hero: {
    name: String,
    title: String,
    tagline: String,
    image: String
  },

  about: {
    bio: String,
    email: String,
    phone: String,
    location: String,
    socials: { type: [{ platform: String, url: String }], default: [] }
  },

  skills: { type: [String], default: [] },
  services: { type: [{ title: String, description: String }], default: [] },
  projects: { type: [{ title: String, image: String, description: String }], default: [] },
  testimonials: { type: [{ client: String, quote: String }], default: [] },
  blog: { type: [{ title: String, summary: String }], default: [] },

  contact: {
    message: String,
    email: String,
    phone: String
  }
}, { timestamps: true });

export default mongoose.model("Portfolio", portfolioSchema);
