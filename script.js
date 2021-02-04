// I am creating an array of objects for my fun facts. I am starting with a few to work on the functionality first but I will add more objects later on.


let funFacts = [
    {
        'fact': "The heads on Easter Island have bodies."
    },
    {
        'fact': "The moon has moonquaquakes"
    },
    {
        'fact': "You lose up to 30% of your taste buds during a flight"
    },
    { 'fact': "Marie CUrie is the only person to earn a Nobel prize in two different sciences"}
        
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



