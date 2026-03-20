function analyze(){

let career = document.getElementById("career").value;

let userSkills = document.getElementById("skills").value
.split(",")
.map(skill => skill.trim().toLowerCase());

let requiredSkills = careerSkills[career];

if(!requiredSkills){
document.getElementById("output").innerHTML = "Career data not found.";
return;
}

let missing = requiredSkills.filter(skill =>
!userSkills.includes(skill.toLowerCase())
);

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

let result = `
<h2>${career} Skill Analysis</h2>

<h3>Required Skills</h3>
<p>${requiredSkills.join(", ")}</p>

<h3>Missing Skills</h3>
<p style="color:red">${missing.join(", ") || "None"}</p>
<h3>Recommended Courses</h3>
${coursesHTML || "No course recommendations available"}

<h3>Learning Roadmap</h3>
<ol>
<li>Learn fundamentals</li>
<li>Complete recommended courses</li>
<li>Build portfolio projects</li>
<li>Practice interview questions</li>
<li>Apply for internships</li>
</ol>
`;

document.getElementById("output").innerHTML = result;

}
function recommendCareer(){

let userSkills = document.getElementById("skills").value
.split(",")
.map(skill => skill.trim().toLowerCase());

let bestCareer = "";
let maxMatch = 0;

for(let career in careerSkills){

let requiredSkills = careerSkills[career].map(skill => skill.toLowerCase());

let matchCount = requiredSkills.filter(skill =>
userSkills.includes(skill)
).length;

if(matchCount > maxMatch){
maxMatch = matchCount;
bestCareer = career;
}

}

if(bestCareer === ""){
document.getElementById("output").innerHTML = "No suitable career found.";
}
else{
document.getElementById("output").innerHTML = `
<h2>Recommended Career</h2>
<p>${bestCareer}</p>
<p>Based on your skills.</p>
`;
}

}
function calculateMatch(userSkills, requiredSkills) {
    let match = userSkills.filter(skill => requiredSkills.includes(skill));
    return Math.round((match.length / requiredSkills.length) * 100);
}
function submitSkills() {
    let userSkills = [];

    document.querySelectorAll('input[name="skills"]:checked').forEach(el => {
        userSkills.push(el.value);
    });

    localStorage.setItem("userSkills", JSON.stringify(userSkills));

    window.location.href = "dashboard.html";
}
