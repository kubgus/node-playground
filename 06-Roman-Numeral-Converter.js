//  _____                      _       _   _             
// |  __ \                    (_)     | | (_)            
// | |  | | ___  ___  ___ _ __ _ _ __ | |_ _  ___  _ __  
// | |  | |/ _ \/ __|/ __| '__| | '_ \| __| |/ _ \| '_ \ 
// | |__| |  __/\__ \ (__| |  | | |_) | |_| | (_) | | | |
// |_____/ \___||___/\___|_|  |_| .__/ \__|_|\___/|_| |_|
//                              | |                      
//                              |_|                      
//
// This program converts Roman numerals to conventional
// base-10 numbers




//   _____          _      
//  / ____|        | |     
//  | |    ___   __| | ___ 
//  | |   / _ \ / _` |/ _ \
//  | |__| (_) | (_| |  __/
//  \_____\___/ \__,_|\___|




// A Node.js function for input:
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Object that maps numerals to values:
const translationSheet = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

function convert() {

    let result = 0;

    // Initialize input:
    readline.question(`Roman Numeral: `, input => {

        // Make it UPPERCASE:
        input = input.toUpperCase();

        // Make an array with all the numbers:
        const romanArray = input.split("");

        // Loop the array:
        romanArray.forEach((numeral, index) => {

            // Convert numeral and make it positive or negative based on number in front:
            const value = translationSheet[romanArray[index + 1]] > translationSheet[numeral] ? 0 - translationSheet[numeral] : translationSheet[numeral] || 0;

            // Add value to final result:
            result += value;

        });

        // Empty line:
        console.log("\x1b[0m", "");

        // Log the result:
        console.log("\x1b[33m", result);

        // Blank line:
        console.log("\x1b[0m", "");

        // How to exit:
        console.log("\x1b[31m", `Press [CTRL + C] to exit`);

        // Blank line / reset colors:
        console.log("\x1b[0m", "");
        convert();

    });
}

// Initial start:
convert();