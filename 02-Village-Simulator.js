// [beta, still a bit buggy with bigger numbers, I'm planning to add more features] //


//  _____             __ _       
// / ____|           / _(_)      
// | |     ___  _ __ | |_ _  __ _ 
// | |    / _ \| '_ \|  _| |/ _` |
// | |___| (_) | | | | | | | (_| |
//  \_____\___/|_| |_|_| |_|\__, |
//                           __/ |
//                          |___/ 



// --------------- VILLAGE PROPERTIES: --------------- //

let village = {

    people: 5,
    food: 10,
    water: 15,

};
// --------------------------------------------------- //


// ---------------- WORLD PROPERTIES: ---------------- //

const days = 365;

const diePerDay = 1;

const foodPerPerson = 2;
const waterPerPerson = 3;

const foodMade = 20;
const waterMade = 30;

// --------------------------------------------------- //
// -------------------------------------------------- //


//  ______       _
//  |  __ \     | |          
//  | |__) |   _| | ___  ___ 
//  |  _  / | | | |/ _ \/ __|
//  | | \ \ |_| | |  __/\__ \
//  |_|  \_\__,_|_|\___||___/



// Each day:  (in this order)
// 1. {diePerDay} person dies
// 2. One person is born for every two people in the village
// 3. Each person consumes {foodPerPerson} food and {waterPerPerson} water (people that don't get enough resources die)
// 4. Each person creates {foodMade} food and {waterMade} water

// Simple, right?


// -------------------------------------------------- //
// -------------------------------------------------- //




//   _____          _      
//  / ____|        | |     
//  | |    ___   __| | ___ 
//  | |   / _ \ / _` |/ _ \
//  | |__| (_) | (_| |  __/
//  \_____\___/ \__,_|\___|




function logData() {

    // Console.log() the data:
    console.log("\x1b[32m", `People: ${village.people}`);
    console.log("\x1b[33m", `Food: ${village.food}`);
    console.log("\x1b[34m", `Water: ${village.water}`);

    // Clear console colors:
    console.log("\x1b[0m", "");

}


// First log:
logData()


// Lovely code by Mulan on StackOverflow: (https://stackoverflow.com/users/633183/mulan) <3
const times = x => f => {
    if (x > 0) {
        f()
        times(x - 1)(f)
    }
}


// Main "Per Day" Function
function day() {

    // Rule 1:
    if (village.people >= diePerDay) {

        village.people -= diePerDay;

    }

    // Rule 2:
    village.people += Math.floor(village.people / 2);

    // Rule 3:
    village.food -= foodPerPerson * village.people;
    village.water -= waterPerPerson * village.people;

    if (village.food < 0) {

        let hungerDeaths = Math.floor((0 - village.food) / foodPerPerson);

        village.people -= hungerDeaths;
        village.food += hungerDeaths * foodPerPerson;

    };

    if (village.water < 0) {

        let thirstDeaths = Math.floor((0 - village.water) / waterPerPerson);

        village.people -= thirstDeaths;
        village.water += thirstDeaths * waterPerPerson;

    };

    // Rule 4:
    village.food += foodMade * village.people;
    village.water += waterMade * village.people;



    logData()

}


times(days)(() => day());





//===============================//
//                               //
//     __          ________      //
//    / /   ______/  _/ __ \     //
//   / /   / __  // // / / /     //
//  / /___/ /_/ // // /_/ /      //
// /_____/\_____\___/\___\_\     //
//                               //
//                               //
// (https://github.com/Kubicko)  //
//===============================//