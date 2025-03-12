function gameObject() {
    return {
      home: {
        teamName: 'Brooklyn Nets',
        colors: ['Black', 'White'],
        players: {
          "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
          "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
          "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
          "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
          "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 },
        },
      },
      away: {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise', 'Purple'],
        players: {
          "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
          "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
          "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
          "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
          "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 },
        },
      },
    };
  }

  function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}

function numPointsScored(playerName) {
    const object = gameObject();
    let playerPoints = null;

    if(object["home"]["players"][playerName] !== undefined){
        playerPoints = object["home"]["players"][playerName]["points"]
    }else if(object["away"]["players"][playerName] !== undefined){
        playerPoints = object["away"]["players"][playerName]["points"]
    }
    console.log(playerPoints)
    return playerPoints
}
function shoeSize(playerName) {
    const object = gameObject();
    let playerShoeSize = null;
    
    if(object["home"]["players"][playerName] !== undefined){
        playerShoeSize = object["home"]["players"][playerName]["shoe"]
    }else if(object["away"]["players"][playerName] !== undefined){
        playerShoeSize = object["away"]["players"][playerName]["shoe"]
    }
    console.log(playerShoeSize)
    return playerShoeSize;
}
function teamColors(teamName) {
    const object = gameObject();
    let teamJerseyColors = [];
    
    if(object["home"]["teamName"] === teamName){
        teamJerseyColors = object["home"]["colors"]
    }else if(object["away"]["teamName"] === teamName){
        teamJerseyColors = object["away"]["colors"]
    }
    console.log(teamJerseyColors)
    return teamJerseyColors;
}
function teamNames() {
    const object = gameObject();
    let teamNamesArr = [];
    for (team in object){
        teamNamesArr.push(object[team]["teamName"])
    }
    console.log(teamNamesArr.join(", "))
}
function playerNumbers(teamName) {
    const object = gameObject();
    let playerJerseyNumbers = [];
    if(object["home"]["teamName"] === teamName){
        for (player in object["home"]["players"]){
            playerJerseyNumbers.push(object["home"]["players"][player]["number"])
        }
    }else if(object["away"]["teamName"] === teamName){
        for (player in object["away"]["players"]){
            playerJerseyNumbers.push(object["away"]["players"][player]["number"])
        }
    }
    console.log(playerJerseyNumbers)
    return playerJerseyNumbers;
}
function playerStats(playerName) {
    const object = gameObject();
    let playerStatusObj = null;
    if(object["home"]["players"][playerName] !== undefined){
        playerStatusObj = object["home"]["players"][playerName]
    }else if(object["away"]["players"][playerName] !== undefined){
        playerStatusObj = object["away"]["players"][playerName]
    };
    console.log(playerStatusObj)
    return playerStatusObj;
}
function bigShoeRebounds() {
    let object = gameObject();
    // get the player with the largest shoe size per team and get their rebounds stats
    let playerWithbiggestShoe = null;
    for(team in object){
        for(player in object[team]["players"]){
            if(!playerWithbiggestShoe){
                playerWithbiggestShoe = object[team]["players"][player]
            }
            if(playerWithbiggestShoe["shoe"] < object[team]["players"][player]["shoe"]){
                playerWithbiggestShoe = object[team]["players"][player]
            }
        }
    }
    console.log("playerWithbiggestShoe",playerWithbiggestShoe["shoe"])
    console.log("bigShoeRebounds",playerWithbiggestShoe["rebounds"])
    return playerWithbiggestShoe["rebounds"]
}
function mostPointsScored() {
    const object = gameObject();
    let mostPointsScored = 0;
    let playerWithMostPoints = null;
    for(team in object){
        for(player in object[team]["players"]){
            if(mostPointsScored < object[team]["players"][player]["points"]){
                mostPointsScored = object[team]["players"][player]["points"]
                playerWithMostPoints = player
            }
        }
    }
    console.log("mostPointsScored,",mostPointsScored)
    console.log("playerWithMostPoints,",playerWithMostPoints)
    return playerWithMostPoints
}
function winningTeam() {
    const object = gameObject();
    let pointsScoredByTeamA = 0;
    let pointsScoredByTeamB = 0;
    let teamWithMostPoints = null;
    for(team in object){
        for(player in object[team]["players"]){
            if(!teamWithMostPoints){
                teamWithMostPoints = object[team]["teamName"];
            }
            if(team === "Brooklyn Nets"){
                pointsScoredByTeamA += object[team]["players"][player]["points"]
            }
            if(team === "Charlotte Hornets"){
                pointsScoredByTeamB += object[team]["players"][player]["points"]
            }
            if(pointsScoredByTeamA > pointsScoredByTeamB){
                teamWithMostPoints = object[team]["teamName"];
            }
        }
    }
    console.log("teamWithMostPoints,",teamWithMostPoints)
    return teamWithMostPoints
}
function playerWithLongestName() {
    const object = gameObject();
    let nameWithLongestLength = 0;
    let playerNameWithMostLength = null;

    for(team in object){
        for(player in object[team]["players"]){
            if(!playerNameWithMostLength){
                playerNameWithMostLength = player
            }
            if(nameWithLongestLength < player.split('').length){
                nameWithLongestLength = player.split('').length;
                playerNameWithMostLength = player
            }
        }
    }
    
    console.log("nameWithLongestLength,",nameWithLongestLength)
    console.log("playerNameWithMostLength,",playerNameWithMostLength)
    return playerNameWithMostLength
}
function doesLongNameStealATon() {
    const object = gameObject();
    const playerWithLongestNameVariable = playerWithLongestName()
    let playerWithLongestNameSteals = 0;
    let mostStealsByplayer = 0;
    
    for(team in object){
        for(player in object[team]["players"]){
            if(object[team]["players"][playerWithLongestNameVariable] !== undefined){
                playerWithLongestNameSteals = object[team]["players"][playerWithLongestNameVariable]["steals"]
            }
            if(mostStealsByplayer < object[team]["players"][player]["steals"]){
                mostStealsByplayer = object[team]["players"][player]["steals"];
            }
        }
    }
    console.log("doesLongNameStealATon", playerWithLongestNameSteals > mostStealsByplayer ? true : false)
    return playerWithLongestNameSteals > mostStealsByplayer ? true : false;
}
  
  
