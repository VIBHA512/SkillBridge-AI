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
  function chatbotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("skill")) {
        return "Focus on Machine Learning and SQL.";
    } 
    else if (input.includes("career")) {
        return "You are suitable for Data Science roles.";
    } 
    else {
        return "Keep improving your skills step by step.";
    }
}

document.getElementById("skills").value = detected.join(", ");

});

}

