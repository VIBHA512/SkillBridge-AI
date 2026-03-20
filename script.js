// 🎯 ANALYZE SKILL GAP
function analyze(){ 

  let career = document.getElementById("career").value;
  let userInput = document.getElementById("skills").value;

  if(userInput.trim() === ""){
    document.getElementById("output").innerHTML = "⚠️ Please enter your skills first.";
    return;
  }

  let requiredSkills = careerSkills[career];

  if(!requiredSkills){
    document.getElementById("output").innerHTML = "Career data not found.";
    return;
  }

  // 🔥 Convert user input → object {skill: level}
  const userSkills = {};
  let userSoftInput = document.getElementById("softSkills").value
  .split(",")
  .map(s => s.trim().toLowerCase())
  .filter(s => s !== "");

  userInput.split(',').forEach(s => {
    let [skill, level] = s.split(':');

    skill = normalizeSkill(skill);
    level = (level || "beginner").toLowerCase().trim();

    userSkills[skill] = level;
  });

  // ✅ Find missing skills
  let missing = [];

  for(let skill in requiredSkills){
    if(!userSkills[skill]){
      missing.push(skill);
    }
  }
let softScore = 0;
let totalSoftWeight = 0;

let requiredSoft = softSkills[career] || {};

for(let skill in requiredSoft){

  totalSoftWeight += requiredSoft[skill];

  if(userSoftInput.includes(skill)){
    softScore += requiredSoft[skill];
  }
}

let softPercent = totalSoftWeight 
  ? Math.round((softScore / totalSoftWeight) * 100)
  : 0;
  // ✅ Match Score
  let score = calculateMatch(userInput, requiredSkills);
let finalScore = Math.round((score * 0.7) + (softPercent * 0.3));
  // ✅ Course Recommendations
  let coursesHTML = "";

  missing.forEach(skill => {
    if(courseData[skill]){
      coursesHTML += `<h4>${skill}</h4><ul>`;
      courseData[skill].forEach(course=>{
        coursesHTML += `<li>${course}</li>`;
      });
      coursesHTML += "</ul>";
    }
  });

  // 🛣️ Roadmap
  let roadmap = "";

  missing.forEach((skill, index) => {
    roadmap += `<li>Week ${index*2+1}-${index*2+2}: Learn ${skill}</li>`;
  });

  let roadmapHTML = `
    <h3>🛣️ Personalized Roadmap</h3>
    <ol>
      ${roadmap || "<li>You are job-ready! 🎉</li>"}
    </ol>
  `;

  // 🎯 Output
  let result = `
  <h2>🎯 ${career} Skill Analysis</h2>

  <h3>📊 Technical Score: ${score}%</h3>
  <h3>🧠 Soft Skills Score: ${softPercent}%</h3>
  <h3>🎯 Overall Score: <span style="color:#4ade80">${finalScore}%</span></h3>
`;

    <h3>✅ Your Skills</h3>
    <p>${Object.keys(userSkills).join(", ")}</p>

    <h3>📌 Missing Skills</h3>
    <p style="color:#f87171">${missing.join(", ") || "None 🎉"}</p>

    <h3>📚 Recommended Courses</h3>
    ${coursesHTML || "No course recommendations available"}

    ${roadmapHTML}
  `;

  document.getElementById("output").innerHTML = result;

  // 💾 Save skills
  localStorage.setItem("userSkills", JSON.stringify(userSkills));

  document.getElementById("output").scrollIntoView({ behavior: "smooth" });
}



// 🚀 SUGGEST CAREERS
function suggestCareers(){

  let userInput = document.getElementById("skills").value;

  if(userInput.trim() === ""){
    document.getElementById("output").innerHTML = "⚠️ Please enter your skills first.";
    return;
  }

  let results = [];

  for(let career in careerSkills){

    let requiredSkills = careerSkills[career];
    let score = calculateMatch(userInput, requiredSkills);

    if(score > 0){
      results.push({ career, score });
    }
  }

  // sort highest first
  results.sort((a, b) => b.score - a.score);

  let html = "<h2>💡 Suggested Career Paths</h2>";

  results.slice(0, 5).forEach(item => {
    html += `<p><b>${item.career}</b> - ${item.score}% match</p>`;
  });

  document.getElementById("output").innerHTML = html;
}



// 🎯 BEST CAREER RECOMMENDATION
function recommendCareer(){

  let userInput = document.getElementById("skills").value;

  if(userInput.trim() === ""){
    document.getElementById("output").innerHTML = "⚠️ Please enter your skills first.";
    return;
  }

  let bestCareer = "";
  let maxScore = 0;

  for(let career in careerSkills){

    let requiredSkills = careerSkills[career];
    let score = calculateMatch(userInput, requiredSkills);

    if(score > maxScore){
      maxScore = score;
      bestCareer = career;
    }
  }

  if(bestCareer === ""){
    document.getElementById("output").innerHTML = "No suitable career found.";
  }
  else{
    document.getElementById("output").innerHTML = `
      <h2>🚀 Recommended Career</h2>
      <p><b>${bestCareer}</b></p>
      <p>Match Score: ${maxScore}%</p>
    `;
  }
}



// 🔥 TRENDING SKILLS LOAD
window.onload = function() {

  // 🔹 Trending Skills
  let list = document.getElementById("trending");

  if (list) {
    list.innerHTML = "";

    trendingSkills.forEach(skill => {
      let li = document.createElement("li");
      li.innerText = "🔥 " + skill;
      list.appendChild(li);
    });
  }

  // 🔹 Dynamic Career Dropdown (AUTO UPDATE)
  let dropdown = document.getElementById("career");

  if (dropdown) {
    dropdown.innerHTML = "";

    Object.keys(careerSkills).forEach(career => {
      let option = document.createElement("option");
      option.value = career;
      option.text = career;
      dropdown.appendChild(option);
    });
  }

};
