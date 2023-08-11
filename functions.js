const {database} = require("./data.js")

//My function to add queens (objects) to the queens array
const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    database.queens.push(queenObject)
}

//My function to add tributes (objects) to the tributes array
const payTribute = (tributeId, tributeDesc, queenId) => {
    const tributeObject = {
        id: tributeId,
        description: tributeDesc,
        queenId: queenId
    }

    database.tributeChest.push(tributeObject)
}

module.exports = {createQueen, payTribute}