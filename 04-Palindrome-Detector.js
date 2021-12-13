//  _____                      _       _   _             
// |  __ \                    (_)     | | (_)            
// | |  | | ___  ___  ___ _ __ _ _ __ | |_ _  ___  _ __  
// | |  | |/ _ \/ __|/ __| '__| | '_ \| __| |/ _ \| '_ \ 
// | |__| |  __/\__ \ (__| |  | | |_) | |_| | (_) | | | |
// |_____/ \___||___/\___|_|  |_| .__/ \__|_|\___/|_| |_|
//                              | |                      
//                              |_|                      
//
// This simple program checks for palindromes. Palindromes are words that are spelled the same
// backwards. That't it!




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

function isPalindrome() {

    // Initialize input:
    readline.question(`Check for a Palindrome: `, searchString => {

        // Set variable:
        let letterList = [];

        // Push {searchString} letters backwards:
        for (var i = 1; i <= searchString.length; i++) {
            letterList.push(searchString.charAt(searchString.length - i).toLowerCase());
        };

        // Empty line:
        console.log("\x1b[0m", "");
        // Always log this:
        console.log("\x1b[0m", `Your word`);

        // Check if the backwards and the normal spelling of the word matches:
        if (letterList.join("") == searchString.toLowerCase()) {
            console.log("\x1b[32m", `IS A PALINDROME`);
        } else {
            console.log("\x1b[33m", `IS NOT A PALINDROME`);
        };

        // Blank line:
        console.log("\x1b[0m", "");

        // How to exit:
        console.log("\x1b[31m", `Press [CTRL + C] to exit`);

        // Blank line / reset colors:
        console.log("\x1b[0m", "");

        // Start again:
        isPalindrome();

    });

}

isPalindrome();





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