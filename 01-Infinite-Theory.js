


//------- SEARCHED WORD: -------//

let searchString = ""

//------------------------------//










//------- UNIMPORTANT CODE: -------//


//Random word function
function makeid(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}


//Set variables
let miliseconds = 0

let char = ""

let wordArray = []

console.log(`Chance: 1/${Math.pow(26, searchString.length)}`)


//Main code
setTimeout(() => {

    let interval = setInterval(function () {

        char = makeid(1)

        miliseconds += 10

        wordArray.push(char)

        console.log(char)

        if (wordArray.join("").includes(searchString)) {
            console.log(`"${searchString}" was found!(${miliseconds / 1000}s)`)
            clearInterval(interval)
        }

    }, 10)

}, 1000 * 5);

//---------------------------------//