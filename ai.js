const knownSkills = [
  "Python",
  "Machine Learning",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Deep Learning",
  "TensorFlow",
  "NLP",
  "Networking",
  "Linux",
  "Data Visualization"
];

// 📄 RESUME SKILL EXTRACTION
function extractSkills() {

  let fileInput = document.getElementById("resumeUpload");

  if (fileInput.files.length === 0) {
    alert("Upload resume image");
    return;
  }

  let file = fileInput.files[0];

  document.getElementById("output").innerHTML = "⏳ Extracting skills...";

  Tesseract.recognize(file, 'eng')
    .then(result => {

      let text = result.data.text.toLowerCase();
      let detected = [];

      knownSkills.forEach(skill => {
        if (text.includes(skill.toLowerCase())) {
          detected.push(skill);
        }
      });

      document.getElementById("skills").value = detected.join(", ");

      document.getElementById("output").innerHTML =
        "✅ Skills Extracted Successfully!";
    })
    .catch(() => {
      document.getElementById("output").innerHTML =
        "❌ Error extracting text.";
    });
}


// 🤖 CHATBOT RESPONSE LOGIC
function chatbotResponse(input) {

  input = input.toLowerCase();

  // Skills-based suggestions
  if (input.includes("python")) {
    return "With Python, you can explore Data Science, AI Engineer, Backend Developer roles.";
  }

  if (input.includes("web")) {
    return "You can become a Frontend Developer, Full Stack Developer, or UI/UX Engineer.";
  }

  if (input.includes("ai") || input.includes("machine learning")) {
    return "Great choice! Focus on Python, ML, Deep Learning, and projects to become an AI Engineer.";
  }

  if (input.includes("cyber")) {
    return "Cybersecurity roles require Networking, Linux, Ethical Hacking, and Security Analysis.";
  }

  // Career suggestions based on entered skills
  if (input.includes("career")) {
    let skillsInput = document.getElementById("skills").value.toLowerCase();

    if (skillsInput.includes("python") && skillsInput.includes("sql")) {
      return "You are a good fit for Data Scientist or Data Analyst roles.";
    }

    if (skillsInput.includes("html") || skillsInput.includes("css")) {
      return "You can explore Web Development roles.";
    }

    return "Try improving your technical skills to explore better career options.";
  }

  // Learning guidance
  if (input.includes("learn") || input.includes("start")) {
    return "Start with fundamentals, then build projects, and finally apply for internships.";
  }

  // Default smart fallback
  return "I can guide you on careers, skills, and learning paths. Try asking like: 'career with python' or 'skills for AI engineer'.";
}


// 💬 SEND MESSAGE FUNCTION (CONNECTS UI)
function sendMessage() {

  let inputField = document.getElementById("chatInput");
  let chatbox = document.getElementById("chatbox");

  let input = inputField.value.trim();

  if (input === "") return;

  // User message
  chatbox.innerHTML += `<p><b>You:</b> ${input}</p>`;

  // Bot reply
  let reply = chatbotResponse(input);
  chatbox.innerHTML += `<p><b>AI:</b> ${reply}</p>`;

  // Clear input
  inputField.value = "";

  // Auto scroll
  chatbox.scrollTop = chatbox.scrollHeight;
}
