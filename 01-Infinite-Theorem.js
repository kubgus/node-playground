//  _____                      _       _   _             
// |  __ \                    (_)     | | (_)            
// | |  | | ___  ___  ___ _ __ _ _ __ | |_ _  ___  _ __  
// | |  | |/ _ \/ __|/ __| '__| | '_ \| __| |/ _ \| '_ \ 
// | |__| |  __/\__ \ (__| |  | | |_) | |_| | (_) | | | |
// |_____/ \___||___/\___|_|  |_| .__/ \__|_|\___/|_| |_|
//                              | |                      
//                              |_|                      
//
// This code is about a Wikipedia article I stumbled across one day.
// It was called The Infinite Monkey Theorem. (https://en.wikipedia.org/wiki/Infinite_monkey_theorem)
//
// The infinite monkey theorem states that a monkey hitting keys at random on a typewriter keyboard for an
// infinite amount of time will almost surely type any given text, such as the complete works of William Shakespeare.
// In fact, the monkey would almost surely type every possible finite text an infinite number of times.
//
// This code is a representation of how long it would actually take. Enjoy!




//   _____          _      
//  / ____|        | |     
//  | |    ___   __| | ___ 
//  | |   / _ \ / _` |/ _ \
//  | |__| (_) | (_| |  __/
//  \_____\___/ \__,_|\___|




// Random letter function:
function randomLetter(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

// Make the exit() function possible:
const { exit } = require('process');

// A Node.js function for input:
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


// Set variables:
let char = ""
let wordArray = []


// Input function:
readline.question(`Stop on Word: `, searchString => {

    // Repeats indefinitely:
    let interval = setInterval(function () {

        char = randomLetter(1);

        wordArray.push(char);

        console.log("\x1b[0m", char);

        // Check for searched word:
        if (wordArray.join("").includes(searchString)) {
            // Blank line:
            console.log("\x1b[0m", "");
            // Return found word:
            console.log("\x1b[32m", `"${searchString}" was found!`);
            // Reset console color:
            console.log("\x1b[0m", "");
            // Exit:
            exit();
        }

    }, 10);

});






//===============================//
//                               //
//     __          ________      //
//    / /   ______/  _/ __ \     //
//   / /   / __  // // / / /     //
//  / /___/ /_/ // // /_/ /      //
// /_____/\_____\___/\___\_\     //
//                               //
//                               //
// (https://github.com/kubgus)   //
//===============================//