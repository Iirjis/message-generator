const animals = ["Dragon", "Rooster", "Snake", "Tiger", "Goat", "Horse", "Pig", "Rabbit", "Dog"];
const features = ["hairy feet", "big ears", "smelly feet", "bad sense of humor", "ridiculous nose", "pretty waist", "cute hair", "large muscles", "fluffy tail"];
const motto = ["I licked it, so it's mine.", "It's ok to talk to strangers.", "A day without sunshine is like, you know, night.", "May your cookie jar overflow with goodies.", "Dont' worry be happy.", "Keep calm and carry a wand.", "Age is something that does not matter, unless you are a cheese.", "When in doubt, look intelligent."];

const generateButton = document.getElementById("generateButton");

const generateRandomWord = () => {
    let animalIndex = Math.floor(Math.random() * animals.length);
    document.getElementById("first").innerHTML = `You are a ${animals[animalIndex]}.`;
    let featuresIndex = Math.floor(Math.random() * features.length);
    document.getElementById("second").innerHTML = `You have ${features[featuresIndex]}.`;
    let mottoIndex = Math.floor(Math.random() * motto.length);
    document.getElementById("third").innerHTML = `Motto of the day is ${motto[mottoIndex]}`;
}
generateButton.addEventListener("click", generateRandomWord);
