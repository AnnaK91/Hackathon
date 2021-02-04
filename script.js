// I am creating an array of objects for my fun facts. I am starting with a few to work on the functionality first but I will add more objects later on.


let funFacts = [
    { 'fact': "The moon has moonquaquakes", 'story': "Blabla" },
    { 'fact': "You lose up to 30% of your taste buds during a flight", 'story': "Blalfkgmdglkdgkldgmkld"  },
    { 'fact': "Marie Curie is the only person to earn a Nobel prize in two different sciences", 'story': "asdfghqw12"  },
    { 'fact': "Space smells like seared steak.", 'story': "1234567" },
    { 'fact': "The unicorn is the national animal of Scotland." },
    { 'fact': "Kids ask 300 questions a day." },
    { 'fact': "Pringles aren't actually potato chips." }

];

// console.log(funFacts);


// Going to start with creating the button so I can test further on.


let btn = document.createElement("button");
let CTA = document.createTextNode("Give me an other fact");
btn.appendChild(CTA);
document.body.appendChild(btn);

// adding an onclick function to the button - this is how I checked it works


// document.querySelector("button").onclick = function() {
//     alert('Click!');
// }

let facts = document.getElementById("fact");
let stories = document.getElementById("story");


// going to create a function to display the objects in the array randomly

// random generator

document.querySelector("button").onclick = function randomQuotes() {
    let random = Math.floor(Math.random() * funFacts.length);
    console.log(random, console.log(funFacts[random].fact));
    facts.innerHTML = funFacts[random].fact;
    stories.innerHTML = funFacts[random].story;

}

// Element.id = "nameoftheid"


