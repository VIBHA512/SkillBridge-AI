function analyze(){ 

  let career = document.getElementById("career").value;

  let userSkills = document.getElementById("skills").value
    .split(",")
    .map(skill => skill.trim().toLowerCase())
    .filter(skill => skill !== "");

  let requiredSkills = careerSkills[career];

  if(!requiredSkills){
    document.getElementById("output").innerHTML = "Career data not found.";
    return;
  }

  // ✅ Missing skills
  let missing = requiredSkills.filter(skill =>
    !userSkills.includes(skill.toLowerCase())
  );

  // ✅ Match Score (using function from data.js)
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

  <h3>🛣️ Learning Roadmap</h3>
  <ol>
    <li>Learn fundamentals</li>
    <li>Complete recommended courses</li>
    <li>Build 2-3 projects</li>
    <li>Practice interview questions</li>
    <li>Apply for internships/jobs</li>
  </ol>
  `;

  document.getElementById("output").innerHTML = result;

  // ✅ Save skills for dashboard
  localStorage.setItem("userSkills", JSON.stringify(userSkills));
}



// 🚀 CAREER RECOMMENDATION
function recommendCareer(){

  let userSkills = document.getElementById("skills").value
    .split(",")
    .map(skill => skill.trim().toLowerCase())
    .filter(skill => skill !== "");

  let bestCareer = "";
  let maxScore = 0;

  for(let career in careerSkills){

    let requiredSkills = careerSkills[career];

    let score = calculateMatch(userSkills, requiredSkills);

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
window.onload = function() {

  let list = document.getElementById("trending");

  if (!list) return;

  list.innerHTML = "";

  trendingSkills.forEach(skill => {
    let li = document.createElement("li");
    li.innerText = skill;
    list.appendChild(li);
  });

};
