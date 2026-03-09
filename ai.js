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
alert("Please upload a resume image");
return;
}

let file = fileInput.files[0];

Tesseract.recognize(
file,
'eng',
{ logger: m => console.log(m) }

).then(({ data: { text } }) => {

let resumeText = text.toLowerCase();

let detectedSkills = [];

knownSkills.forEach(skill => {

if(resumeText.includes(skill.toLowerCase())){
detectedSkills.push(skill);
}

});
  if(detectedSkills.length === 0){
alert("No skills detected. Try entering manually.");
}


document.getElementById("skills").value = detectedSkills.join(", ");

});


