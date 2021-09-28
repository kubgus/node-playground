//  _____             __ _       
// / ____|           / _(_)      
// | |     ___  _ __ | |_ _  __ _ 
// | |    / _ \| '_ \|  _| |/ _` |
// | |___| (_) | | | | | | | (_| |
//  \_____\___/|_| |_|_| |_|\__, |
//                           __/ |
//                          |___/ 



// --------------- SEARCH: --------------- //

const resultCount = 3;

// --------------------------------------- //



//  _____                      _       _   _             
// |  __ \                    (_)     | | (_)            
// | |  | | ___  ___  ___ _ __ _ _ __ | |_ _  ___  _ __  
// | |  | |/ _ \/ __|/ __| '__| | '_ \| __| |/ _ \| '_ \ 
// | |__| |  __/\__ \ (__| |  | | |_) | |_| | (_) | | | |
// |_____/ \___||___/\___|_|  |_| .__/ \__|_|\___/|_| |_|
//                              | |                      
//                              |_|                      
//
// This Node.js file allows you to search Google for specific keywords without
// being disturbed by ads, stories, images - basically everything.
// It shows first {resultCount} results, specifically their Title and Link.
//
// Click on links while holding [CTRL] to open them.
//
// You can exit by pressing [CTRL + C].
//
//
// HOW TO GET AN API TOKEN:
// - Visit https://serpapi.com/users/sign_up and create an account
// - Confirm your e-mail
// - Copy the API KEY from an e-mail you get
// - Replace {config.serp_api_key} with your API KEY (in "quotation marks" of course)
// 
//    WARNING:
//    You only get 100 searches per month with a free plan (https://serpapi.com/change-plan)




//   _____          _      
//  / ____|        | |     
//  | |    ___   __| | ___ 
//  | |   / _ \ / _` |/ _ \
//  | |__| (_) | (_| |  __/
//  \_____\___/ \__,_|\___|




// Link to my own config file:
const config = require("./config.json");
// ^ Remove this from your code


// Connect to API:
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch(config.serp_api_key); // <-- REPLACE WITH YOUR OWN API KEY (Tutorial in Description)


// A Node.js function for input:
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


// Search function:
function googleSearch() {

    // Input function:
    readline.question(`Search: `, searchString => {

        // Search via API function:
        search.json({

            // Search from input
            q: searchString

        }, (result) => {

            // Check for errors:
            try {

                // Repeat {resultCount} times:
                for (var i = 0; i <= resultCount - 1; i++) {

                    // Blank line:
                    console.log("\x1b[0m", "");

                    // Title:
                    console.log("\x1b[0m", result.organic_results[i].title);

                    // Link:
                    console.log("\x1b[34m", result.organic_results[i].link);

                    // Yet another blank line / reset colors:
                    console.log("\x1b[0m", "");

                };

            } catch (e) {

                // Log the error:
                console.log("\x1b[31m", `You have ran into an error!`);
                console.log("\x1b[0m", "");
                console.log("\x1b[35m", `- The {resultCount} variable may be set too high.`);
                console.log("\x1b[35m", `- Make sure your API KEY is correct. (Tutorial in Description of source)`);
                console.log("\x1b[35m", `  If it is, your free plan may have expired.`);
                console.log("\x1b[35m", `  You can renew it at https://serpapi.com/change-plan.`);
                console.log("\x1b[0m", "");
                console.log("\x1b[0m", `Error code:`);
                console.log("\x1b[31m", e);
                console.log("\x1b[0m", "");
                console.log("\x1b[0m", "");
                console.log("\x1b[32m", `Looking for help? Submit your issue to https://github.com/kubgus/Node-Projects/issues.`);
                console.log("\x1b[0m", "");

            }

            // How to exit:
            console.log("\x1b[31m", `Press [CTRL + C] to exit`);

            // Blank line / reset colors
            console.log("\x1b[0m", "");

            // Trigger the Search function again:
            googleSearch();
        });
    });
};

// Trigger the Search function for the first time:
googleSearch();





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