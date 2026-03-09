function showDashboard(){

let progressHTML = `
<h2>Learning Progress Dashboard</h2>

<p>Python: 80%</p>
<progress value="80" max="100"></progress>

<p>Machine Learning: 40%</p>
<progress value="40" max="100"></progress>

<p>SQL: 60%</p>
<progress value="60" max="100"></progress>

<p>Data Visualization: 30%</p>
<progress value="30" max="100"></progress>
`;

document.getElementById("output").innerHTML = progressHTML;

}
