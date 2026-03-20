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

  if (input.includes("data scientist")) {
    return "You should learn Python, Machine Learning, SQL, and Data Visualization.";
  }
  else if (input.includes("web")) {
    return "Focus on HTML, CSS, JavaScript, and React.";
  }
  else if (input.includes("ai")) {
    return "Learn Machine Learning, Deep Learning, and TensorFlow.";
  }
  else if (input.includes("skill")) {
    return "Try improving both technical and communication skills.";
  }
  else if (input.includes("career")) {
    return "Based on your skills, you can explore multiple tech roles!";
  }
  else {
    return "I'm here to help with careers, skills, and learning paths 😊";
  }
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
