const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Sample data - replace with your actual information
    const userData = {
      name: "Nishant Sharma",
      email: "nishshar23@gmail.com",
      education: [
        {
          institution: "NIT GOA",
          degree: "Bachelor of Technology in Electrical and Electronics Engineering",
          year: "2023-2027"
        }
      ],
      skills: ["JavaScript", "Node.js", "React", "MongoDB", "Express.js","Redux","C++"],
      projects: [
        {
          title: "TOMATO - Food Ordering Website",
          description: "A full-stack food ordering platform with dedicated User and Admin panels using the MERN stack.",
          links: ["https://github.com/Nishant-NITG/tomato-food-delivery"],
          skills: ["JavaScript", "React", "Node.js", "MongoDB","Express"]
        },
        {
          title: "AlgoArena - Online Coding Platform",
          description: "A full-stack coding platform for practicing, solving, and tracking programming challenges.",
          links: ["https://github.com/yourusername/data-analysis"],
          skills: ["JavaScript", "React", "Node.js", "MongoDB","Express","Redux"]
        }
      ],
      work: [
        {
          company: "Tech Company Inc.",
          position: "Software Developer Intern",
          duration: "Summer 2023",
          description: "Developed features for the company's main product using React and Node.js"
        }
      ],
      links: {
        github: "https://github.com/Nishant-NITG",
        linkedin: "https://www.linkedin.com/in/nishant-sharma-092105273/",
        portfolio: "https://drive.google.com/file/d/1RdQp85k_nfEzPtAssksR0PdqV43LdKsl/view?usp=sharing"
      }
    };

    // Remove existing data and insert new
    await User.deleteMany({});
    const user = new User(userData);
    await user.save();

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();