function gameObject() {
    return {
home: {
    teamName: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: {
        "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
        },
        "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
        },
        "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
        },
        "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
        },
        "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
        }
    } 
},
away: {
    teamName: "Charlotte Hornets",
    colors: ["Turquoise", "Purple"],
    players: {
        "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
        },
        "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
        },
        "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 10
        },
        "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
        },
        "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
        }
    }
}
    }
}

// Build a function, `numPointsScored` that takes in an argument of a player's name and returns the number of points scored for that player. 

function homeTeam() {
    return gameObject().home
}
function awayTeam() {
    return gameObject().away
}

function players() { // created separate function pertaining to 'players' info
   return Object.assign({}, homeTeam().players, awayTeam().players) // assigned both variables with keys into one Object
}

function homeTeamNames() {
    const homeTeamNames = ["Alan Anderson", "Reggie Evans", "Brook Lopez", "Mason Plumlee", "Jason Terry"]
    return homeTeamNames
}

function numPointsScored(playerInput) { // function declaration  
    return players()[playerInput].points // return player's object that holds their info (1 index) and shows their points
    }

console.log('desagna points scored:', numPointsScored("DeSagna Diop"))



// Build a function, `shoeSize`, that takes in an argument of a player's name and returns the shoe size for that player. 
function shoeSize(playerInput) {
    return players()[playerInput].shoe
}
console.log('brendan\'s shoesize:', shoeSize("Brendan Haywood")) // prints Brendan's shoesize

// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(teamName) {
    if (teamName === homeTeam().teamName) {
        return homeTeam().colors;
    } else if (teamName === awayTeam().teamName) {
        return awayTeam().colors;
    }
    }

console.log('home team color:', teamColors("Brooklyn Nets"))

// Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames() {
    const bothTeamNames = (["Brooklyn Nets", "Charlotte Hornets"])
    return bothTeamNames
}
console.log(teamNames())

// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.
function playerNumbers(teamName) {
    if (teamName == homeTeam().teamName) {
        return [homeTeam().players["Alan Anderson"].number, homeTeam().players["Reggie Evans"].number, homeTeam().players["Brook Lopez"].number, homeTeam().players["Mason Plumlee"].number, homeTeam().players["Jason Terry"].number]
        }
        else if (teamName === awayTeam().teamName) {
            return [awayTeam().players["Jeff Adrien"].number, awayTeam().players["Bismak Biyombo"].number, awayTeam().players["DeSagna Diop"].number, awayTeam().players["Ben Gordon"].number, awayTeam().players["Brendan Haywood"].number]
        }
}
console.log(playerNumbers("Brooklyn Nets"))

// Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats. 
function players() {
    const game = gameObject()
    const homePlayers = game.home.players
    const awayPlayers = game.away.players
    return Object.assign({}, homePlayers, awayPlayers)
}
function playerStats(playerName) {
    return players()[playerName]
}
console.log(playerStats("Bismak Biyombo"))

// Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. 
function bigShoeRebounds() {
    let bigShoe;
    let rebounds; 
    let allPlayers = players()
    // console.log("allPlayers", allPlayers)
    for (const player in allPlayers) {
        // console.log("player", allPlayers[player].shoe)
        allPlayers[player].shoe
        if (!bigShoe || allPlayers[player].shoe > bigShoe) {
            bigShoe = allPlayers[player].shoe
            rebounds = allPlayers[player].rebounds
        }
        // console.log("inloop", bigShoe)
    }
    // console.log("outloop", bigShoe)
    return rebounds

}
// Which player has the most points? Call the function mostPointsScored.
function mostPointsScored() {
    let playerName;
    let mostPoints;
    let allPlayers = players()
    for (const player in allPlayers) {
        allPlayers[player].points
        if (!mostPoints || allPlayers[player].points > mostPoints) {
            mostPoints = allPlayers[player].points
            playerName = [player]
        }
    }
    return playerName
}
// Which team has the most points? Call the function winningTeam.
function winningTeam() {
    let total = homeTeam.reduce((accum, item) => accum + item.points,0)
    return total
        } 
        console.log(total)

    
