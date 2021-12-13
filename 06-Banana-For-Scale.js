//  _____             __ _       
// / ____|           / _(_)      
// | |     ___  _ __ | |_ _  __ _ 
// | |    / _ \| '_ \|  _| |/ _` |
// | |___| (_) | | | | | | | (_| |
//  \_____\___/|_| |_|_| |_|\__, |
//                           __/ |
//                          |___/ 



// --------------- DEFAULT VALUES: --------------- //

const bananaSize = 13;//cm
// --------------------------------------------------- //



//  _____                      _       _   _
// |  __ \                    (_)     | | (_)            
// | |  | | ___  ___  ___ _ __ _ _ __ | |_ _  ___  _ __  
// | |  | |/ _ \/ __|/ __| '__| | '_ \| __| |/ _ \| '_ \ 
// | |__| |  __/\__ \ (__| |  | | |_) | |_| | (_) | | | |
// |_____/ \___||___/\___|_|  |_| .__/ \__|_|\___/|_| |_|
//                              | |                      
//                              |_|                      
//
// This simple program converts meters to bananas




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


function convert() {

    // Initialize input:
    readline.question(`Convert from meters: `, number => {

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
            convert();

            // Cancel previous input:
            return;

        }

        // Blank line / reset colors:
        console.log("\x1b[0m", "");

        // Program actually shows bananas... That's the joke, LAUGH:
        console.log("\x1b[36m", `${number}m is equal to roughly`);
        console.log("\x1b[33m", `${Math.round(number / (bananaSize / 100))} bananas`)

        // Blank line / reset colors:
        console.log("\x1b[0m", "");

        // Blank line:
        console.log("\x1b[0m", "");

        // How to exit:
        console.log("\x1b[31m", `Press [CTRL + C] to exit`);

        // Blank line / reset colors:
        console.log("\x1b[0m", "");

        // Start again:
        convert();

    })
}

convert();





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