function analyze(){ 

  let career = document.getElementById("career").value;

 let userSkills = document.getElementById("skills").value
  .split(",")
  .map(skill => skill.trim().toLowerCase())
  .filter(skill => skill !== "");

userSkills = normalizeSkills(userSkills);

  if(userSkills.length === 0){
    document.getElementById("output").innerHTML = "⚠️ Please enter your skills first.";
    return;
  }

  let requiredSkills = careerSkills[career];

  if(!requiredSkills){
    document.getElementById("output").innerHTML = "Career data not found.";
    return;
  }

  // ✅ Missing skills
  let missing = requiredSkills.filter(skill =>
    !userSkills.includes(skill.toLowerCase())
  );

  // ✅ Match Score
  let score = typeof calculateMatch === "function"
    ? calculateMatch(userSkills, requiredSkills)
    : Math.round((userSkills.length / requiredSkills.length) * 100);

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

  // 🔥 PERSONALIZED ROADMAP (KILLER FEATURE)
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

  // ✅ Final Output
  let result = `
  <h2>🎯 ${career} Skill Analysis</h2>

  <h3>📊 Match Score: ${score}%</h3>

  <h3>✅ Your Skills</h3>
  <p>${userSkills.join(", ") || "None"}</p>

  <h3>📌 Missing Skills</h3>
  <p style="color:#f87171">${missing.join(", ") || "None 🎉"}</p>

  <h3>📚 Recommended Courses</h3>
  ${coursesHTML || "No course recommendations available"}

  ${roadmapHTML}
  `;

  document.getElementById("output").innerHTML = result;

  // ✅ Save skills
  localStorage.setItem("userSkills", JSON.stringify(userSkills));

  // ✅ Auto scroll
  document.getElementById("output").scrollIntoView({ behavior: "smooth" });
}

function normalizeSkills(userSkills) {

  const allSkills = Object.values(careerSkills).flat();

  return userSkills.map(userSkill => {

    let bestMatch = userSkill;
    let minDistance = Infinity;

    allSkills.forEach(skill => {
      let dist = levenshtein(userSkill, skill);

      if (dist < minDistance) {
        minDistance = dist;
        bestMatch = skill;
      }
    });

    return bestMatch;
  });
}


// 🔥 Levenshtein Distance (string matching)
function levenshtein(a, b) {
  const matrix = [];

  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}


// 🚀 CAREER RECOMMENDATION
function recommendCareer(){

  let userSkills = document.getElementById("skills").value
    .split(",")
    .map(skill => skill.trim().toLowerCase())
    .filter(skill => skill !== "");

  if(userSkills.length === 0){
    document.getElementById("output").innerHTML = "⚠️ Please enter your skills first.";
    return;
  }

  let bestCareer = "";
  let maxScore = 0;

  for(let career in careerSkills){

    let requiredSkills = careerSkills[career];

    let score = typeof calculateMatch === "function"
      ? calculateMatch(userSkills, requiredSkills)
      : 0;

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

  let list = document.getElementById("trending");

  if (!list) return;

  list.innerHTML = "";

  trendingSkills.forEach(skill => {
    let li = document.createElement("li");
    li.innerText = "🔥 " + skill;
    list.appendChild(li);
  });

};
