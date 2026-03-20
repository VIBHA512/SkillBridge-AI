const careerSkills = { 

  "Data Scientist":[
    "python",
    "machine learning",
    "statistics",
    "sql",
    "data visualization"
  ],

  "Web Developer":[
    "html",
    "css",
    "javascript",
    "react",
    "node.js"
  ],

  "AI Engineer":[
    "python",
    "deep learning",
    "tensorflow",
    "machine learning",
    "nlp"
  ],

  "Cybersecurity Analyst":[
    "networking",
    "linux",
    "ethical hacking",
    "security analysis",
    "cryptography"
  ],

  "Data Analyst":[
  "python",
  "sql",
  "data visualization",
  "excel"
],

"Frontend Developer":[
  "html",
  "css",
  "javascript",
  "react"
],

"Backend Developer":[
  "node.js",
  "python",
  "database",
  "api"
],

"Cloud Engineer":[
  "cloud computing",
  "aws",
  "linux",
  "networking"
]

};


// 📚 COURSE RECOMMENDATIONS
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


// 💡 HELPER: MATCH SCORE FUNCTION (VERY IMPORTANT)
function calculateMatch(userSkills, requiredSkills) {

  let match = 0;

  requiredSkills.forEach(skill => {
    if (userSkills.includes(skill.toLowerCase())) {
      match++;
    }
  });

  return Math.round((match / requiredSkills.length) * 100);
}
