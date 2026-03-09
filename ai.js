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
