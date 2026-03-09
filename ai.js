const knownSkills = [
"Python",
"Machine Learning",
"SQL",
"HTML",
"CSS",
"JavaScript",
"React",
"Node.js",
"Deep Learning",
"TensorFlow",
"NLP",
"Networking",
"Linux",
"Data Visualization"
];

function extractSkills(){

let fileInput = document.getElementById("resumeUpload");

if(fileInput.files.length === 0){
alert("Please upload a resume file");
return;
}

let file = fileInput.files[0];

let reader = new FileReader();

reader.onload = function(event){

let text = event.target.result.toLowerCase();

let detectedSkills = [];

knownSkills.forEach(skill=>{
if(text.includes(skill.toLowerCase())){
detectedSkills.push(skill);
}
});

if(detectedSkills.length === 0){
alert("No skills detected. Try entering manually.");
}

document.getElementById("skills").value = detectedSkills.join(", ");

};

reader.readAsText(file);

}
