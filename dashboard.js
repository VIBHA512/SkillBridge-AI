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
let userSkills = JSON.parse(localStorage.getItem("userSkills")) || [];
let selectedCareer = "Data Scientist"; // or get dynamically
let requiredSkills = careerData[selectedCareer];
  let gap = requiredSkills.filter(skill => !userSkills.includes(skill));
document.getElementById("gap").innerText = gap.join(", ");
  let score = calculateMatch(userSkills, requiredSkills);
document.getElementById("matchScore").innerText = score + "%";
  const ctx = document.getElementById('skillChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: requiredSkills,
        datasets: [{
            label: 'Skill Match',
            data: requiredSkills.map(skill => userSkills.includes(skill) ? 80 : 20)
        }]
    }
});
  let list = document.getElementById("trendingSkills");

trendingSkills.forEach(skill => {
    let li = document.createElement("li");
    li.innerText = skill;
    list.appendChild(li);
});
  setTimeout(() => {
    document.getElementById("aiStatus").innerText = "AI Analysis Complete ✅";
}, 2000);
  
}
