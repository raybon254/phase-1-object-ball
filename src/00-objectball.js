function gameObject()  {
    return {
        home:{
            teamName:'Brooklyn Nets',
            colors:['Black', 'White'],
            players:{
                'Alan Anderson':{
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans':{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez':{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee':{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'Jason Terry':{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },

            },
        },

        away:{
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players:{
                'Jeff Adrien':{
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismark Biyombo':{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                'DeSagna Diop':{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'Ben Gordon':{
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds:3 ,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                'Brendan Haywood':{
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            }
        } 
    }
   
}
// Object.entries(gameObject()).forEach(([key, value]) =>
//  console.log(`${key}`)

//  console.log(gameObject());
//  console.log(gameObject().away.players['Bredan Haywood'].number);

// const homeTeamName = () => {
//     let homeTeam = gameObject()
//     return homeTeam.home.teamName;
// }
// console.log(homeTeamName())



//POINTS SCORED
const numPointsScored = (player) => {
    const homepoints = gameObject().home.players[player];
    const awaypoints = gameObject().away.players[player];
    
    if(homepoints){
        let points = gameObject().home.players[player].points;
        console.log(`${player} has ${points} points.`)
    }
    else if(awaypoints){
        let points = gameObject().away.players[player].points;
        console.log(`${player} has ${points} points.`)
    }
    else{
        console.log('Player not found')
    }
}


//SHOE SIZE
const shoeSize = (player) => {
    const homesize = gameObject().home.players[player];
    const awaysize = gameObject().away.players[player];
    
    if(homesize){
        let size = gameObject().home.players[player].shoe;
        console.log(`${player} has a shoe size of ${size}.`)
    }
    else if(awaysize){
        let size = gameObject().away.players[player].shoe;
        console.log(`${player} has a shoe size of ${size}.`)
    }
    else{
        console.log('Player not found')
    }
}


//TEAMCOLORS

const teamColors = (team) => {

    if(team === gameObject().home.teamName){
        const color = gameObject().home.colors;
        console.log(`${team} kit colors are ${color}`);
    }
    else if(team === gameObject().away.teamName){
        const color = gameObject().away.colors;
        console.log(`${team} kit colors are ${color}`);
    }
    else{
        console.log('Team not found.')
    }
}


// TEAM NAMES

const  teamName = () => {
    const hteam = gameObject().home.teamName;
    const ateam = gameObject().away.teamName;
    let teams = [];
    teams.push(hteam,ateam)
    console.log(teams.join(', '))
}
//PLAYER NUMBERS

const playerNumbers = (tname) => {
    let jersey = [];// returns updated array

    //condition to satisfy the parameter tname
    if(tname === gameObject().home.teamName){
        jersey = Object.values(gameObject().home.players).map(player => player.number);
    }

    else if(tname === gameObject().away.teamName){
        jersey =  Object.values(gameObject().away.players).map(player => player.number);

    }
    else {
        console.log('Player not found')
    }
    console.log(jersey);

}





//PLAYERSTATS

const playerStats = (player) => {
    let homeplayer = gameObject().home.players[player];
    let awayplayer = gameObject().away.players[player];
    
    if(homeplayer){
        Object.entries(homeplayer).forEach(([key, value]) =>
        console.log(`${key}: ${value}`)
        )
    }

    else if(awayplayer){
        Object.entries(awayplayer).forEach(([key, value]) => 
        console.log(`${key}: ${value}`)
        )
    }

    else{
        console.log('Player not found')
    }
}


//BIGSHOEREBOUNDS

const bigShoeRebounds = () => {

    const game = gameObject();
    let players = {...game.home.players, ...game.away.players};

    let maxshoe = 0;
    let playerWithMax = "";

    // finding the player with max shoe
    for(let player in players)
    {
        if(players[player].shoe > maxshoe ){
            maxshoe = players[player].shoe;
            playerWithMax = player;
        }
    }
    let rebound = players[playerWithMax].rebounds;

    console.log(`${playerWithMax} has a largest shoe size of ${maxshoe}.`)
    console.log(`${playerWithMax} rebounds is ${rebound}`)
}


//MOSTPOINTSSCORED

const mostPointsScored = () => {
    const score = gameObject();

    let scores = {...score.home.players, ...score.away.players};

    let maxscore = 0;
    let playerMaxScore = "";

    for(let player in scores){
        if(scores[player].points > maxscore ){
            maxscore = scores[player].points;
            playerMaxScore = player;
        }
    }

    let mostpoints = scores[playerMaxScore].points;

    console.log(`Player ${playerMaxScore} has most points of ${mostpoints}.` )
}



//WINNINGTEAM
const winningTeam = () => {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    for (let player in game.home.players) {
        homePoints += game.home.players[player].points;
    }

    for (let player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }

    if (homePoints > awayPoints) {
        return game.home.teamName;
    } else if (awayPoints > homePoints) {
        return game.away.teamName;
    } else {
        return "It's a tie!";
    }
}
console.log(winningTeam())

//PLAYERWITHLONGESTNAME

const playerWithLongestName = () => {
    const long = gameObject();
    const longname = {...long.home.players, ...long.away.players};
     let longplayer = 0;
     let maxlongname = "";

     for(let player in longname){
        if(player.length > longplayer){
            longplayer = player.length;
            maxlongname = player;
        }
     }

     console.log(`player ${maxlongname} the longest name of length ${maxlongname.length}`)

}



//DOES LONG NAME STEAL ATON

const doesLongNameStealATon = () => {
    const game = gameObject();
    const players = { ...game.home.players, ...game.away.players };

    
    let longestPlayer = "";
    for (let player in players) {
        if (player.length > longestPlayer.length) {
            longestPlayer = player;
        }
    }

    
    let mostSteals = 0;
    let topStealer = "";
    for (let player in players) {
        if (players[player].steals > mostSteals) {
            mostSteals = players[player].steals;
            topStealer = player;
        }
    }

    
    return longestPlayer === topStealer;
}

