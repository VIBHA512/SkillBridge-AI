function showDashboard() {

  let career = document.getElementById("career").value;

  let userSkills = document.getElementById("skills").value
    .split(",")
    .map(s => s.trim().toLowerCase())
    .filter(s => s !== "");

  let requiredSkills = careerSkills[career];

  // ✅ Learned skills
  let learned = requiredSkills.filter(skill =>
    userSkills.includes(skill.toLowerCase())
  );

  // ✅ Progress %
  let progress = Math.round((learned.length / requiredSkills.length) * 100);

  // ✅ Remaining skills
  let remaining = requiredSkills.filter(skill =>
    !learned.includes(skill)
  );

  // ✅ UI + Chart container
  let html = `
    <h2>📊 Learning Progress</h2>

    <p><b>Overall Progress:</b> ${progress}%</p>
    <progress value="${progress}" max="100"></progress>

    <h3>✅ Skills Completed</h3>
    <p>${learned.join(", ") || "None yet"}</p>

    <h3>📌 Skills Remaining</h3>
    <p>${remaining.join(", ")}</p>

    <canvas id="skillChart" style="margin-top:20px;"></canvas>
  `;

  document.getElementById("output").innerHTML = html;

  // ✅ CHART
  let ctx = document.getElementById("skillChart");

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: requiredSkills,
      datasets: [{
        label: 'Skill Level',
        data: requiredSkills.map(skill =>
          userSkills.includes(skill.toLowerCase()) ? 100 : 20
        )
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });

  // ✅ Save user skills (for future use)
  localStorage.setItem("userSkills", JSON.stringify(userSkills));
}
