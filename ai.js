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
alert("Upload resume image");
return;
}

let file = fileInput.files[0];

Tesseract.recognize(file,'eng')
.then(result => {

let text = result.data.text.toLowerCase();

let detected = [];

knownSkills.forEach(skill=>{
if(text.includes(skill.toLowerCase())){
detected.push(skill);
}
});

document.getElementById("skills").value = detected.join(", ");

});

}

