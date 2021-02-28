let userName=prompt("Please provide your name !");
console.log(userName)
let userAge=prompt("Please provide your age!");
console.log(userAge)
let userCase=prompt("Do you have any high temperature, fatigue, sore throat or dry cough?");
console.log(userCase)
let highUserCase=prompt("Difficulty breathing or shortness of breath, Chest pain or pressure or Loss of ability to speak or move?!");
console.log(highUserCase)

while (userName==null || userAge==null || userCase==null || highUserCase==null || userName=="" || userAge=="" || userCase=="" || highUserCase=="" ){
    alert("Please sure if you answer all the questions");
    let userName=prompt("Please provide your name !");
    console.log(userName)
    let userAge=prompt("Please provide your age!");
    console.log(userAge)
    let userCase=prompt("Do you have any high temperature, fatigue, sore throat or dry cough?");
    console.log(userCase)
    let highUserCase=prompt("Difficulty breathing or shortness of breath, Chest pain or pressure or Loss of ability to speak or move?!");
    console.log(highUserCase)
}

if(userAge <18){
    alert("Welcome"+"  "+userName+" "+"Your age is: "+" "+userAge+" "+", So you are a child"+" "+"And if you have a high temperature, fatigue, sore throat or dry cough! So you have the most common symptom that may indicate you are infected with a COVID 19."+"  "+"And if you have difficulty breathing or shortness of breath, Chest pain or pressure or Loss of ability to speak or move! so you have the less common symptoms that may indicate you are infected with a virus." );
    alert("Regards : Anwar Hemaimat");
}

if( 18 < userAge < 60 ){
    alert("Welcome"+"  "+userName+" "+"Your age is: "+" "+userAge+" "+", So you are an adult"+" "+"And if you have a high temperature, fatigue, sore throat or dry cough! So you have the most common symptom that may indicate you are infected with a COVID 19."+"  "+"And if you have difficulty breathing or shortness of breath, Chest pain or pressure or Loss of ability to speak or move! so you have the less common symptoms that may indicate you are infected with a virus." );
    alert("Regards : Anwar Hemaimat");
}
if(userAge > 60 ){
    alert("Welcome"+"  "+userName+" "+"Your age is: "+" "+userAge+" "+", So you are an old person"+" "+"And if you have a high temperature, fatigue, sore throat or dry cough! So you have the most common symptom that may indicate you are infected with a COVID 19."+"  "+"And if you have difficulty breathing or shortness of breath, Chest pain or pressure or Loss of ability to speak or move! so you have the less common symptoms that may indicate you are infected with a virus." );
    alert("Regards : Anwar Hemaimat");
}