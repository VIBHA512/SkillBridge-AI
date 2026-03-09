function showDashboard(){

let career = document.getElementById("career").value;

let userSkills = document.getElementById("skills").value
.split(",")
map(s => s.trim().toLowerCase());

let requiredSkills = careerSkills[career];

let learned = requiredSkills.filter(skill =>
userSkills.includes(skill.toLowerCase())
);

let progress = Math.round((learned.length / requiredSkills.length) * 100);

let html = `
<h2>Learning Progress</h2>

<p>Progress: ${progress}%</p>
<progress value="${progress}" max="100"></progress>

<h3>Skills Completed</h3>
<p>${learned.join(", ")}</p>

<h3>Skills Remaining</h3>
<p>${requiredSkills.filter(skill => !learned.includes(skill)).join(", ")}</p>
`;

document.getElementById("output").innerHTML = html;

}
