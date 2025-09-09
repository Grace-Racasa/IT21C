// Declare Variables
let name = "Grace Racasa";
let course = "Bachelor of Science in Information Technology";
let yearLevel = "second year";

 console.log("Name: " + name + "\n" + "Course: " + course + "\n" + "Year Level: " + yearLevel);

 // Operators
let hoursOfSleep = 8;
let hoursOfStudy = 2;

console.log("Total Hours of Sleep: " + hoursOfSleep + "\n"+ "Total Hours of Sleep: " + hoursOfStudy +"\n");

// conditions 

if (hoursOfStudy >= 5){
    console.log("Great! You Studied enough today.");
} else {
    console.log("You need study more.");
}


//loops
let subjects = ["OOP", "Event-Driven Prog.", "Elective 1 (Web System and Technology)", "DataStuctures", "Fundamentals of Networks"];

console.log("My Subjects:");
for (let i = 0; i < subjects.length; i++){
    
    console.log("- " + subjects[i]);
}

// functions
function displayInfo(){
    return "My name is " + name + " a " + yearLevel + " from " + course + "."; 
}
console.log(displayInfo());