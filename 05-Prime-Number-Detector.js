//  _____                      _       _   _             
// |  __ \                    (_)     | | (_)            
// | |  | | ___  ___  ___ _ __ _ _ __ | |_ _  ___  _ __  
// | |  | |/ _ \/ __|/ __| '__| | '_ \| __| |/ _ \| '_ \ 
// | |__| |  __/\__ \ (__| |  | | |_) | |_| | (_) | | | |
// |_____/ \___||___/\___|_|  |_| .__/ \__|_|\___/|_| |_|
//                              | |                      
//                              |_|                      
//
// This simple program checks for prime numbers. These are numbers, that can be only divided by 1
// and themselves to get a non-decimal number.




//   _____          _      
//  / ____|        | |     
//  | |    ___   __| | ___ 
//  | |   / _ \ / _` |/ _ \
//  | |__| (_) | (_| |  __/
//  \_____\___/ \__,_|\___|




// Make the exit() function possible:
const { exit } = require('process');


// A Node.js function for input:
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function isPrime() {

    // Initialize input:
    readline.question(`Check for Prime: `, number => {

        if (isNaN(number) || number.length == 0) {

            // Blank line / reset colors:
            console.log("\x1b[0m", "");

            // Log it up:
            console.log("\x1b[36m", `You can only input numbers.`);

            // Blank line / reset colors:
            console.log("\x1b[0m", "");

            // Blank line:
            console.log("\x1b[0m", "");

            // How to exit:
            console.log("\x1b[31m", `Press [CTRL + C] to exit`);

            // Blank line / reset colors:
            console.log("\x1b[0m", "");

            // Start again:
            isPrime();

            // Cancel previous input:
            return;

        }

        // Loop every number from 2 to {number} - 1:
        for (var i = 2; i < number || number < 2; i++) {

            // Check if input divided by loop number is not decimal:
            if (Number.isInteger(number / i) || number < 2) {
                // ^ If it is, the input is not a prime number

                // Blank line / reset colors:
                console.log("\x1b[0m", "");

                // Log it up:
                console.log("\x1b[33m", `Your input is not a prime number.`);

                // Blank line / reset colors:
                console.log("\x1b[0m", "");

                // Blank line:
                console.log("\x1b[0m", "");

                // How to exit:
                console.log("\x1b[31m", `Press [CTRL + C] to exit`);

                // Blank line / reset colors:
                console.log("\x1b[0m", "");

                // Start again:
                isPrime();

                // Cancel previous input:
                return;

            };

        };

        // Blank line / reset colors:
        console.log("\x1b[0m", "");

        // If this gets logged, the program hasn't exited which means victory for the prime gang:
        console.log("\x1b[32m", `Your input is a prime number.`);

        // Blank line / reset colors:
        console.log("\x1b[0m", "");

        // Blank line:
        console.log("\x1b[0m", "");

        // How to exit:
        console.log("\x1b[31m", `Press [CTRL + C] to exit`);

        // Blank line / reset colors:
        console.log("\x1b[0m", "");

        // Start again:
        isPrime();

    });

};

isPrime();





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