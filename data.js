// 🎯 CAREER SKILLS (LEVEL + WEIGHT BASED)
const careerSkills = { 

  "Data Scientist": {
    "python": { level: "advanced", weight: 0.3 },
    "machine learning": { level: "intermediate", weight: 0.25 },
    "statistics": { level: "intermediate", weight: 0.2 },
    "sql": { level: "intermediate", weight: 0.15 },
    "data visualization": { level: "beginner", weight: 0.1 }
  },

  "Web Developer": {
    "html": { level: "advanced", weight: 0.2 },
    "css": { level: "advanced", weight: 0.2 },
    "javascript": { level: "advanced", weight: 0.3 },
    "react": { level: "intermediate", weight: 0.2 },
    "node.js": { level: "beginner", weight: 0.1 }
  },

  "AI Engineer": {
    "python": { level: "advanced", weight: 0.3 },
    "deep learning": { level: "intermediate", weight: 0.25 },
    "tensorflow": { level: "intermediate", weight: 0.2 },
    "machine learning": { level: "intermediate", weight: 0.15 },
    "nlp": { level: "beginner", weight: 0.1 }
  },

  "Cybersecurity Analyst": {
    "networking": { level: "intermediate", weight: 0.25 },
    "linux": { level: "intermediate", weight: 0.2 },
    "ethical hacking": { level: "intermediate", weight: 0.2 },
    "security analysis": { level: "beginner", weight: 0.2 },
    "cryptography": { level: "beginner", weight: 0.15 }
  },

  "Data Analyst": {
    "python": { level: "intermediate", weight: 0.25 },
    "sql": { level: "intermediate", weight: 0.3 },
    "data visualization": { level: "intermediate", weight: 0.25 },
    "excel": { level: "advanced", weight: 0.2 }
  },

  "Frontend Developer": {
    "html": { level: "advanced", weight: 0.25 },
    "css": { level: "advanced", weight: 0.25 },
    "javascript": { level: "advanced", weight: 0.3 },
    "react": { level: "intermediate", weight: 0.2 }
  },

  "Backend Developer": {
    "node.js": { level: "intermediate", weight: 0.3 },
    "python": { level: "intermediate", weight: 0.25 },
    "database": { level: "intermediate", weight: 0.25 },
    "api": { level: "beginner", weight: 0.2 }
  },

  "Cloud Engineer": {
    "cloud computing": { level: "intermediate", weight: 0.3 },
    "aws": { level: "intermediate", weight: 0.25 },
    "linux": { level: "intermediate", weight: 0.2 },
    "networking": { level: "beginner", weight: 0.25 }
  }

};

const softSkills = {

  "Data Scientist": {
    "problem solving": 0.3,
    "critical thinking": 0.25,
    "communication": 0.2,
    "teamwork": 0.15,
    "curiosity": 0.1
  },

  "Web Developer": {
    "creativity": 0.3,
    "communication": 0.25,
    "teamwork": 0.2,
    "problem solving": 0.15,
    "adaptability": 0.1
  },

  "AI Engineer": {
    "problem solving": 0.3,
    "analytical thinking": 0.25,
    "curiosity": 0.2,
    "teamwork": 0.15,
    "communication": 0.1
  }

};

// 🔁 SKILL SYNONYMS (IMPORTANT FOR MATCHING)
const synonyms = {
  "ml": "machine learning",
  "ai": "machine learning",
  "python programming": "python",
  "data viz": "data visualization",
  "js": "javascript"
};



// 📚 COURSE RECOMMENDATIONS (same as before)
const courseData = {

  "python":[
    "Python for Everybody - Coursera",
    "Complete Python Bootcamp - Udemy"
  ],

  "machine learning":[
    "Machine Learning by Andrew Ng - Coursera",
    "Machine Learning Specialization - DeepLearning.AI"
  ],  

  "excel":[
    "Excel Skills for Data Analysis - Coursera"
  ],

  "database":[
    "Database Management Systems - Coursera"
  ],

  "api":[
    "REST API Development - Udemy"
  ],

  "aws":[
    "AWS Cloud Practitioner Essentials"
  ],

  "cloud computing":[
    "Introduction to Cloud Computing - Coursera"
  ],

  "sql":[
    "SQL for Data Science - Coursera",
    "The Complete SQL Bootcamp - Udemy"
  ],

  "data visualization":[
    "Data Visualization with Tableau - Coursera"
  ],

  "html":[
    "HTML & CSS Crash Course - freeCodeCamp"
  ],

  "css":[
    "Responsive Web Design - freeCodeCamp"
  ],

  "javascript":[
    "JavaScript Algorithms - freeCodeCamp"
  ],

  "react":[
    "React Developer Course - Udemy"
  ],

  "node.js":[
    "Node.js Complete Guide - Udemy"
  ],

  "deep learning":[
    "Deep Learning Specialization - Coursera"
  ],

  "tensorflow":[
    "TensorFlow Developer Certificate - Coursera"
  ],

  "nlp":[
    "Natural Language Processing Specialization - Coursera"
  ]

};



// 🔥 TRENDING SKILLS
const trendingSkills = [
  "AI",
  "Cloud Computing",
  "Cybersecurity",
  "Data Science",
  "Blockchain",
  "DevOps"
];



// 🧠 NORMALIZE SKILL (LOWERCASE + SYNONYMS)
function normalizeSkill(skill) {
  skill = skill.toLowerCase().trim();
  return synonyms[skill] || skill;
}



// 💡 LEVEL COMPARISON
function compareLevel(userLevel, requiredLevel) {
  const levels = { basic: 1, beginner: 1, intermediate: 2, advanced: 3 };

  // 🔥 Allow partial match
  if (userLevel === requiredLevel) return true;

  // allow one level below (IMPORTANT FIX)
  return (levels[userLevel] || 0) + 1 >= (levels[requiredLevel] || 0);
}


// 🚀 IMPROVED MATCH FUNCTION
function calculateMatch(userInput, requiredSkillsObj) {

  // Convert user input → object
  const userSkills = {};

  userInput.split(',').forEach(s => {
    let [skill, level] = s.split(':');

    skill = normalizeSkill(skill);
   level = (level || "intermediate").toLowerCase().trim();
    if(level === "basic") level = "beginner";

    userSkills[skill] = level;
  });

  let score = 0;
  let totalWeight = 0;

  for (const skill in requiredSkillsObj) {

    const { level, weight } = requiredSkillsObj[skill];

    totalWeight += weight;
console.log("User Skills:", userSkills);
console.log("Required:", requiredSkillsObj);
   if (userSkills[skill.trim()] && compareLevel(userSkills[skill.trim()], level)) {
      score += weight;
    }
  }

  return Math.round((score / totalWeight) * 100);
}
