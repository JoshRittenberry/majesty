const {database} = require("./data.js")

const {createQueen, payTribute} = require("./functions.js")

//Code to call the createQueen function to add a queen to the queens array with the given parameters
createQueen(1, "Trinity Terry")
createQueen(2, "Charisse Ford")
createQueen(3, "Jenna Solis")
createQueen(4, "Haley Rittenberry")

//Code to call the payTribute function to add a tribute to the tributeChest array with then given parameters
payTribute(1, "Jewlrey", 2)
payTribute(2, "Gold", 1)
payTribute(3, "Silver", 3)
payTribute(4, "My Love", 4)

//A function to create a string with predefined text and the name of a queen
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

//A for loop that calls the hailTheQueen function and adds the queen name to the end of it by defining the 
//"nameString" parameter to be equal to the "queenName" for each object in the "queens" array
for (const queen of database.queens) {
    const hailMessage = hailTheQueen(queen.name)
    console.log(hailMessage)
}

//Iterates the queen objects to show tribute for each one
for (const queen of database.queens) {
    
    for (const tribute of database.tributeChest) {
        if (tribute.queenId === queen.id) {
            console.log(`${queen.name} has tribute ${tribute.description}.`)
        }
    }

}