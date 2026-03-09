function showDashboard(){

let career = document.getElementById("career").value;

let userSkills = document.getElementById("skills").value
.split(",")
.map(s => s.trim().toLowerCase());

let requiredSkills = careerSkills[career];

let learned = requiredSkills.filter(skill =>
userSkills.includes(skill.toLowerCase())
);

let progress = Math.round((learned.length / requiredSkills.length) * 100);

let remaining = requiredSkills.filter(skill =>
!learned.includes(skill)
);

let html = `
<h2>Learning Progress</h2>

<p>Overall Progress: ${progress}%</p>
<progress value="${progress}" max="100"></progress>

<h3>Skills Completed</h3>
<p>${learned.join(", ") || "None yet"}</p>

<h3>Skills Remaining</h3>
<p>${remaining.join(", ")}</p>
`;

document.getElementById("output").innerHTML = html;

}
