document.addEventListener("typewriterComplete", function () {
    // This script runs after the typewriter effect is completed
    console.log("Typewriter animation completed!");

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomNumber = getRandomNumber(1, 10);
    console.log(randomNumber);

    if (randomNumber === 2) {
        document.getElementById("rint").style.visibility = "visible";
    }
});