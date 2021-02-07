// I am creating an array of objects for my fun facts. I am starting with a few to work on the functionality first but I will add more objects later on.


let funFacts = [
    { 'fact': "The moon has moonquaquakes", 'story': "Just as earth has earthquakes, the moon has—you guessed it—moonquakes. Less common and less intense than the shakes that happen here, moonquakes are believed by U.S. Geological Survey (USGS) scientists to occur due to tidal stresses connected to the distance between the Earth and the moon." },
    { 'fact': "You lose up to 30% of your taste buds during a flight", 'story': "This might explain why airplane food gets such a bad reputation. The elevation in an airplane can have a detrimental effect on our ability to taste things. According to a 2010 study conducted by Germany's Fraunhofer Institute for Building Physics, the dryness experienced at a high elevation as well as low pressure reduces the sensitivity of a person's taste buds to sweet and salty foods by about 30 percent. Add that dry cabin air affects our ability to smell, and our ability to taste is reduced further." },
    { 'fact': "Marie Curie is the only person to earn a Nobel prize in two different sciences", 'story': "The pioneering researcher won the Nobel Prize in Physics in 1903 (shared with her husband) for her study of spontaneous radiation, and then won the Nobel Prize in Chemistry in 1911 for her work in radioactivity. That makes her one of just six recipients to receive multiple Nobel prizes, and the only person to receive it in two different sciences. (Chemical engineer Linus Paulding earned a Nobel Chemistry Prize and Nobel Peace Prize, but all other multiple winners received theirs in the same category)." },
    { 'fact': "Space smells like seared steak.", 'story': "When you see footage of astronauts floating peacefully in space, do you ever wonder, What do space smells like? Well, according to some former astronauts, space does have a distinct odor that hangs around post-spacewalk. They've described it as 'hot metal' or 'searing steak.'" },
    { 'fact': "The unicorn is the national animal of Scotland.", 'story': "While Scotland proudly boasts the Loch Ness Monster, one of the world's most famous fabled creatures, the country opted to make another mythical beast its national animal: the unicorn. Although this might seem like an odd choice, Visit Scotland explains that unicorns played an integral role in the country's history. Back in the 12th century, William I used the 'proud beast' in the Scottish royal coat of arms." },
    { 'fact': "Kids ask 300 questions a day.", 'story': 'A 2013 U.K. study from online retailer Littlewoods.com observed young children and recorded the questions they asked the adults around them. The children tended to turn to their mothers for answers, and these moms could end up answering an average of nearly 300 questions per day, or one question every two-and-a-half minutes, the study found. The moms reported that the hardest questions they were asked included "Why is water wet?" and "What are shadows made of?"' },
    { 'fact': "Pringles aren 't actually potato chips.", 'story': 'The next time you see a can of Pringles, take a closer look—you wont see the word "chip" anywhere on the packaging.That is because Pringles arent made of thinly - sliced potatoes, but instead dehydrated potato flakes pressed into their signature parabolic shape.Thats what makes them less greasy. But when other potato chip manufacturers complained, the Food and Drug Administration ruled that Pringles couldnt be marketed as chips.The company eventually settled on "potato crisp."' },
    { 'fact': "Showers really do spark creativity.", 'story': "Showers aren't just good for your hygiene—they're good for your creativity, too. For a 2012 study published in the journal Psychological Science, researchers gave volunteers creativity problems to solve followed by a period of rest. During that period, some were assigned demanding tasks, while others did simpler tasks that allowed their minds to wander (just like a shower does). Those doing the simpler tasks during the resting time were more likely to solve the original creativity problems." },
    { 'fact': "Dolphins have been trained to be used in wars.", 'story': "Dolphins are known widely as adorable, intelligent animals. What is not as widely known is that these crafty creatures were used by the U.S. and Soviet Union during the Vietnam War and the Cold War. Both countries studied the creatures for their sonar capabilities, but also trained them to detect mines, bring equipment to divers, find lost equipment, and guard submarines amongst other nifty tricks." },
    { 'fact': "Children's medicine once contained morphine.", 'story': "If you were a baby in the middle of the 1800s and you cried while teething, your parents might have given you Mrs. Winslow's Soothing Syrup. This 'medicine' claimed that 'it soothes the child, it softens the gums, [and] allays all pain.' It may have done plenty of soothing, but it was also extremely dangerous—this concoction, like many patent medicines of the time, contained morphine." },
    { 'fact': "Water makes different pouring sounds depending on its temperature.", 'story': "If you listen very closely, hot water and cold water sound slightly different when being poured. The heat changes the thickness, or viscosity, of the water, which changes the pitch of the sound it makes when it's poured. What we feel as heat comes from the molecules of the water moving faster. Cold water is thicker and therefore makes a slightly higher-pitched sound." }

];

// console.log(funFacts);


// Going to start with creating the button so I can test further on.


// let btn = document.createElement("button");
// let CTA = document.createTextNode("Give me an other fact");
// btn.appendChild(CTA);
// document.body.appendChild(btn);

// adding an onclick function to the button - this is how I checked it works


// document.querySelector("button").onclick = function() {
//     alert('Click!');
// }

let facts = document.getElementById("fact");
let stories = document.getElementById("story");


// going to create a function to display the objects in the array randomly

// random generator

document.getElementById("btn").onclick = function randomQuotes() {
    let random = Math.floor(Math.random() * funFacts.length);
    console.log(random, console.log(funFacts[random].fact));
    facts.innerHTML = funFacts[random].fact;
    stories.innerHTML = funFacts[random].story;

}

// Element.id = "nameoftheid"