const knownSkills = [
"Python","Machine Learning","SQL","HTML","CSS",
"JavaScript","React","Node.js","Deep Learning",
"TensorFlow","NLP","Networking","Linux"
];

function extractSkills(){

let file = document.getElementById("resumeUpload").files[0];

if(!file){
alert("Please upload a resume file");
return;
}

let reader = new FileReader();

reader.onload = function(e){

let text = e.target.result.toLowerCase();

let detected = knownSkills.filter(skill =>
text.includes(skill.toLowerCase())
);

document.getElementById("skills").value = detected.join(", ");

};

reader.readAsText(file);

}
function recommendCareer(){

let userSkills = document.getElementById("skills").value
.split(",")
.map(s => s.trim().toLowerCase());

let bestCareer = "";
let bestScore = 0;

for(let career in careerSkills){

let skills = careerSkills[career];

let score = skills.filter(skill =>
userSkills.includes(skill.toLowerCase())
).length;

if(score > bestScore){
bestScore = score;
bestCareer = career;
}

}

document.getElementById("output").innerHTML =
"<h2>Recommended Career: "+bestCareer+"</h2>";

}
