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
<p>${missing.join(", ") || "None"}</p>

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
