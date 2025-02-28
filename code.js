/// vars

// enable/disable script
const loopOn = true;
// higher is less frequent, lower is more frequent
const chance = 100;

/// functions
function playGif() {
    var randomInt = Math.floor(Math.random() * chance) + 1;
    // just for funsies, theres no other console output so it shoullddd be okay
    console.log(randomInt);
    if (randomInt == chance) {
        gif.play();
        gifSnd.play();
    }
}

function playButton() {
    gif.play();
    gifSnd.play();
}

/// code
if (loopOn) {
    // run the playGif() function at a 5 second interval
    setInterval(function(){playGif()},5000);
}
/// EOF ///
