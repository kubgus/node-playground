//  _____             __ _       
// / ____|           / _(_)      
// | |     ___  _ __ | |_ _  __ _ 
// | |    / _ \| '_ \|  _| |/ _` |
// | |___| (_) | | | | | | | (_| |
//  \_____\___/|_| |_|_| |_|\__, |
//                           __/ |
//                          |___/  



//------- SEARCHED WORD: -------//

let searchString = "ab";

//------------------------------//




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


// Set variables:
let char = ""
let wordArray = []

// Main code:
setTimeout(() => {

    // Repeats indefinitely:
    let interval = setInterval(function () {

        char = randomLetter(1);

        wordArray.push(char);

        console.log("\x1b[0m", char);

        // Check for searched word:
        if (wordArray.join("").includes(searchString)) {
            // Return found word:
            console.log("\x1b[32m", `"${searchString}" was found!`);
            // Reset console color:
            console.log("\x1b[0m", "");
            // Stop node:
            clearInterval(interval);
        }

    }, 10);

}, 1000 * 1);





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