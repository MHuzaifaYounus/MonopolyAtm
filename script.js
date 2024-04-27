let player1_balance = 1500
let player2_balance = 1500
let player3_balance = 1500
let player4_balance = 1500
let playerclicked = false
let propertyOwner
let players = []
let property
let playersBalance = {
    playerId1: 1500,
    playerId2: 1500,
    playerId3: 1500,
    playerId4: 1500,
}
let levels = {
    propertyId1: 1,
    propertyId2: 1,
    propertyId3: 1,
    propertyId4: 1,
    propertyId5: 1,
    propertyId6: 1,
    propertyId7: 1,
    propertyId8: 1,
    propertyId9: 1,
    propertyId10: 1,
    propertyId11: 1,
    propertyId12: 1,
    propertyId13: 1,
    propertyId14: 1,
    propertyId15: 1,
    propertyId16: 1,
    propertyId17: 1,
    propertyId18: 1,
    propertyId19: 1,
    propertyId20: 1,
    propertyId21: 1,
    propertyId22: 1,
}

let baughtProperties = {
    playerId1: [],
    playerId2: [],
    playerId3: [],
    playerId4: [],
}
let properties = {
    propertyId1: [60, 70, 130, 220, 370, 750],
    propertyId2: [60, 70, 130, 220, 370, 750],
    propertyId3: [100, 80, 150, 290, 380, 800],
    propertyId4: [100, 80, 150, 290, 380, 800],
    propertyId5: [120, 100, 190, 300, 410, 850],
    propertyId6: [140, 110, 200, 310, 460, 900],
    propertyId7: [140, 110, 200, 310, 460, 900],
    propertyId8: [160, 190, 210, 330, 500, 920],
    propertyId9: [180, 200, 290, 390, 550, 950],
    propertyId10: [180, 200, 300, 390, 550, 950],
    propertyId11: [200, 210, 350, 410, 600, 970],
    propertyId12: [220, 200, 390, 460, 650, 1050],
    propertyId13: [220, 200, 390, 460, 650, 1050],
    propertyId14: [240, 190, 270, 400, 690, 1150],
    propertyId15: [260, 210, 280, 410, 790, 1250],
    propertyId16: [260, 210, 280, 410, 790, 1250],
    propertyId17: [280, 220, 380, 490, 850, 1290],
    propertyId18: [300, 250, 350, 490, 750, 1300],
    propertyId19: [300, 250, 350, 490, 750, 1300],
    propertyId20: [300, 250, 350, 490, 750, 1300],
    propertyId21: [350, 290, 390, 550, 850, 1350],
    propertyId22: [400, 290, 490, 590, 750, 1410],
}

let baughtprops = []
let playercode
let notInList
let playerclickedforRent = false
let playerclickedforpaymoney = false
let playerclickedforcollectmoney = false
let playerclickedforlevel = false


function checkPropertyOwner(propertycode) {
    baughtProperties.playerId1.forEach((e) => {
        if (e === propertycode) {
            propertyOwner = "playerId1"
        }
    })
    baughtProperties.playerId2.forEach((e) => {
        if (e === propertycode) {
            propertyOwner = "playerId2"
        }
    })
    baughtProperties.playerId3.forEach((e) => {
        if (e === propertycode) {
            propertyOwner = "playerId3"
        }
    })
    baughtProperties.playerId4.forEach((e) => {
        if (e === propertycode) {
            propertyOwner = "playerId4"
        }
    })

}

function getOptions(codeid) {
    document.querySelector(".players-box").scrollTop = 0
    if ((codeid).includes("player")) {
        if (players.includes(codeid)) {
            console.log(`Already exit`);
            document.querySelector(".options").style.display = "flex"
            document.querySelector("#paymoney").style.display = "block"
            document.querySelector("#collectmoney").style.display = "block"
            document.querySelector("#paymoney").addEventListener("click", (e) => {
                console.log(`Pay Clicked`);
                playerclickedforpaymoney = false
                document.querySelector(".moneyOptions").style.display = "flex"
                document.querySelector("#container").style.display = "none"
                if (playerclickedforpaymoney == false) {
                    playerclickedforpaymoney = true
                    document.querySelector("#_100").addEventListener("click", (e) => {
                        if (codeid !== "null") {
                            document.querySelector(`.${codeid}`).innerText = `Balance: ${playersBalance[codeid] -= 100}`

                            if (playersBalance[codeid] < 0) {


                                document.querySelector(`.${codeid}`).innerText = `Balance: 0`


                                playersBalance[codeid] = 0
                                for (let index = 0; index < baughtProperties[codeid].length; index++) {
                                    for (let i = 0; i < baughtprops.length; i++) {
                                        if (baughtProperties[codeid].includes(baughtprops[i])) {
                                            levels[baughtprops[i]] = 1
                                            baughtprops.splice(i, 1)
                                            console.log(baughtprops);
                                            break
                                        }
                                    }

                                }

                                for (let index = 0; index <= 22; index++) {
                                    baughtProperties[codeid].pop()

                                }
                                document.querySelector(`.${codeid.replace("Id", "")}`).className += " dead"
                                removePlayer(codeid)
                                if (players.length === 1) {
                                    winner()
                                }


                            }


                            document.querySelector(".moneyOptions").style.display = "none"
                            document.querySelector("#paymoney").style.display = "none"
                            document.querySelector("#collectmoney").style.display = "none"
                            codeid = "null"
                        }

                    }, { once: true })



                    document.querySelector("#_200").addEventListener("click", (e) => {
                        if (codeid !== "null") {
                            document.querySelector(`.${codeid}`).innerText = `Balance: ${playersBalance[codeid] -= 200}`
                            document.querySelector(".moneyOptions").style.display = "none"
                            document.querySelector("#paymoney").style.display = "none"
                            document.querySelector("#collectmoney").style.display = "none"
                            if (playersBalance[codeid] < 0) {


                                document.querySelector(`.${codeid}`).innerText = `Balance: 0`


                                playersBalance[codeid] = 0
                                for (let index = 0; index < baughtProperties[codeid].length; index++) {
                                    for (let i = 0; i < baughtprops.length; i++) {
                                        if (baughtProperties[codeid].includes(baughtprops[i])) {
                                            levels[baughtprops[i]] = 1
                                            baughtprops.splice(i, 1)
                                            console.log(baughtprops);
                                            break
                                        }
                                    }

                                }

                                for (let index = 0; index <= 22; index++) {
                                    baughtProperties[codeid].pop()

                                }
                                document.querySelector(`.${codeid.replace("Id", "")}`).className += " dead"
                                removePlayer(codeid)

                                if (players.length === 1) {
                                    winner()
                                }
                            }
                            codeid = "null"
                        }
                    }, { once: true })


                }




            })
            document.querySelector("#collectmoney").addEventListener("click", (e) => {
                console.log(`Collect Clicked`);
                document.querySelector("#moneytext").innerText = "How Much You Want To Collect:"
                document.querySelector(".moneyOptions").style.display = "flex"
                document.querySelector("#container").style.display = "none"
                playerclickedforcollectmoney = false
                if (playerclickedforcollectmoney == false) {
                    playerclickedforcollectmoney = true
                    document.querySelector("#_100").addEventListener("click", (e) => {
                        if (codeid !== "null") {
                            document.querySelector(`.${codeid}`).innerText = `Balance: ${playersBalance[codeid] += 100}`
                            document.querySelector(".moneyOptions").style.display = "none"
                            document.querySelector("#paymoney").style.display = "none"
                            document.querySelector("#collectmoney").style.display = "none"
                            codeid = "null"
                        }

                    }, { once: true })



                    document.querySelector("#_200").addEventListener("click", (e) => {
                        if (codeid !== "null") {
                            document.querySelector(`.${codeid}`).innerText = `Balance: ${playersBalance[codeid] += 200}`
                            document.querySelector(".moneyOptions").style.display = "none"
                            document.querySelector("#paymoney").style.display = "none"
                            document.querySelector("#collectmoney").style.display = "none"
                            codeid = "null"
                        }
                    }, { once: true })


                }


            })

        }
        else {
            getPlayers(codeid)
            document.querySelector("#container").style.display = "none"


        }
    }


    else if ((codeid).includes("property")) {

        if (baughtprops.includes(codeid)) {
            document.querySelector(".options").style.display = "flex"
            document.querySelector("#pay").style.display = "block"
            document.querySelector("#changelevel").style.display = "block"
            notInList = false
            document.querySelector("#pay").addEventListener("click", (e) => {
                playerclickedforRent = false
                document.querySelector(".players-box").style.zIndex = "2"
                document.querySelector("#main-text").innerText = "Select the player who is going to pay rent: "
                document.querySelector("#main-text").style.display = "block"
                document.querySelector("#container").style.display = "none"
                document.querySelector("#changelevel").style.display = "none"

                if (players.includes("playerId1")) {
                    document.querySelector(".player1").addEventListener('click', (e) => {
                        if (!baughtProperties["playerId1"].includes(codeid)) {
                            if (codeid !== "null") {
                                if (playerclickedforRent == false) {
                                    playerclickedforRent = true

                                    document.querySelector(".playerId1").innerText = `Balance: ${playersBalance["playerId1"] -= properties[codeid][levels[codeid]]}`
                                    checkPropertyOwner(codeid)
                                    document.querySelector(`.${propertyOwner}`).innerText = `Balance: ${playersBalance[propertyOwner] += properties[codeid][levels[codeid]]}`
                                    if (levels[codeid] < 5) {
                                        levels[codeid] += 1
                                    }

                                    if (playersBalance["playerId1"] < 0) {

                                        if (levels[codeid] < 5) {
                                            levels[codeid] -= 1
                                        }
                                        document.querySelector(".playerId1").innerText = `Balance: 0`

                                        document.querySelector(`.${propertyOwner}`).innerText = `Balance: ${playersBalance[propertyOwner] -= properties[codeid][levels[codeid]]}`
                                        playersBalance["playerId1"] = 0
                                        for (let index = 0; index < baughtProperties["playerId1"].length; index++) {
                                            for (let i = 0; i < baughtprops.length; i++) {
                                                if (baughtProperties["playerId1"].includes(baughtprops[i])) {
                                                    levels[baughtprops[i]] = 1
                                                    baughtprops.splice(i, 1)
                                                    console.log(baughtprops);
                                                    break
                                                }
                                            }

                                        }

                                        for (let index = 0; index <= 22; index++) {
                                            baughtProperties["playerId1"].pop()

                                        }
                                        document.querySelector(".player1").className += " dead"
                                        removePlayer("playerId1")



                                        if (players.length === 1) {
                                            winner()
                                        }
                                    }



                                    console.log(levels[codeid]);
                                    codeid = "null"
                                    document.querySelector(".players-box").style.zIndex = "0"
                                    document.querySelector("#pay").style.display = "none"
                                    document.querySelector("#main-text").style.display = "none"
                                }
                            }
                        }
                        else if (baughtProperties["playerId1"].includes(codeid)) {
                            console.log(codeid);
                            if (codeid !== "null") {
                                if (playerclickedforRent == false) {
                                    playerclickedforRent = true

                                    if (levels[codeid] < 5) {
                                        levels[codeid] += 1
                                    }
                                    console.log(levels[codeid]);
                                    codeid = "null"
                                    document.querySelector(".players-box").style.zIndex = "0"
                                    document.querySelector("#pay").style.display = "none"
                                    document.querySelector("#main-text").style.display = "none"
                                }
                            }
                        }
                    }, { once: true })
                }
                if (players.includes("playerId2")) {
                    document.querySelector(".player2").addEventListener('click', (e) => {

                        if (!baughtProperties["playerId2"].includes(codeid)) {
                            if (codeid !== "null") {
                                if (playerclickedforRent == false) {
                                    playerclickedforRent = true
                                    document.querySelector(".playerId2").innerText = `Balance: ${playersBalance["playerId2"] -= properties[codeid][levels[codeid]]}`
                                    checkPropertyOwner(codeid)
                                    document.querySelector(`.${propertyOwner}`).innerText = `Balance: ${playersBalance[propertyOwner] += properties[codeid][levels[codeid]]}`
                                    if (levels[codeid] < 5) {
                                        levels[codeid] += 1
                                    }
                                    if (playersBalance["playerId2"] < 0) {
                                        if (levels[codeid] < 5) {
                                            levels[codeid] -= 1
                                        }
                                        document.querySelector(".playerId2").innerText = `Balance: 0`

                                        document.querySelector(`.${propertyOwner}`).innerText = `Balance: ${playersBalance[propertyOwner] -= properties[codeid][levels[codeid]]}`
                                        playersBalance["playerId2"] = 0
                                        for (let index = 0; index < baughtProperties["playerId2"].length; index++) {
                                            for (let i = 0; i < baughtprops.length; i++) {
                                                if (baughtProperties["playerId2"].includes(baughtprops[i])) {
                                                    levels[baughtprops[i]] = 1
                                                    baughtprops.splice(i, 1)
                                                    console.log(baughtprops);
                                                    break
                                                }
                                            }

                                        }
                                        for (let index = 0; index <= 22; index++) {
                                            baughtProperties["playerId2"].pop()

                                        }
                                        document.querySelector(".player2").className += " dead"
                                        removePlayer("playerId2")



                                        if (players.length === 1) {
                                            winner()
                                        }
                                    }
                                    console.log(levels[codeid]);
                                    codeid = "null"
                                    document.querySelector(".players-box").style.zIndex = "0"
                                    document.querySelector("#pay").style.display = "none"
                                    document.querySelector("#main-text").style.display = "none"
                                }
                            }
                        }
                        else if (baughtProperties["playerId2"].includes(codeid)) {
                            console.log(codeid);
                            if (codeid !== "null") {
                                if (playerclickedforRent == false) {
                                    playerclickedforRent = true

                                    if (levels[codeid] < 5) {
                                        levels[codeid] += 1
                                    }
                                    console.log(levels[codeid]);
                                    codeid = "null"
                                    document.querySelector(".players-box").style.zIndex = "0"
                                    document.querySelector("#pay").style.display = "none"
                                    document.querySelector("#main-text").style.display = "none"
                                }
                            }
                        }
                    }, { once: true })
                }
                if (players.includes("playerId3")) {
                    document.querySelector(".player3").addEventListener('click', (e) => {

                        if (!baughtProperties["playerId3"].includes(codeid)) {
                            if (codeid !== "null") {
                                if (playerclickedforRent == false) {
                                    playerclickedforRent = true
                                    document.querySelector(".playerId3").innerText = `Balance: ${playersBalance["playerId3"] -= properties[codeid][levels[codeid]]}`
                                    checkPropertyOwner(codeid)
                                    document.querySelector(`.${propertyOwner}`).innerText = `Balance: ${playersBalance[propertyOwner] += properties[codeid][levels[codeid]]}`
                                    if (levels[codeid] < 5) {
                                        levels[codeid] += 1
                                    }
                                    if (playersBalance["playerId3"] < 0) {
                                        if (levels[codeid] < 5) {
                                            levels[codeid] -= 1
                                        }
                                        document.querySelector(".playerId3").innerText = `Balance: 0`

                                        document.querySelector(`.${propertyOwner}`).innerText = `Balance: ${playersBalance[propertyOwner] -= properties[codeid][levels[codeid]]}`
                                        playersBalance["playerId3"] = 0
                                        for (let index = 0; index < baughtProperties["playerId3"].length; index++) {
                                            for (let i = 0; i < baughtprops.length; i++) {
                                                if (baughtProperties["playerId3"].includes(baughtprops[i])) {
                                                    levels[baughtprops[i]] = 1
                                                    baughtprops.splice(i, 1)
                                                    console.log(baughtprops);
                                                    break
                                                }
                                            }

                                        }
                                        for (let index = 0; index <= 22; index++) {
                                            baughtProperties["playerId3"].pop()

                                        }
                                        document.querySelector(".player3").className += " dead"
                                        removePlayer("playerId3")


                                        if (players.length === 1) {
                                            winner()
                                        }
                                    }
                                    console.log(levels[codeid]);
                                    codeid = "null"
                                    document.querySelector(".players-box").style.zIndex = "0"
                                    document.querySelector("#pay").style.display = "none"
                                    document.querySelector("#main-text").style.display = "none"
                                }
                            }
                        }
                        else if (baughtProperties["playerId3"].includes(codeid)) {
                            console.log(codeid);
                            if (codeid !== "null") {
                                if (playerclickedforRent == false) {
                                    playerclickedforRent = true

                                    if (levels[codeid] < 5) {
                                        levels[codeid] += 1
                                    }
                                    console.log(levels[codeid]);
                                    codeid = "null"
                                    document.querySelector(".players-box").style.zIndex = "0"
                                    document.querySelector("#pay").style.display = "none"
                                    document.querySelector("#main-text").style.display = "none"
                                }
                            }
                        }
                    }, { once: true })
                }
                if (players.includes("playerId4")) {
                    document.querySelector(".player4").addEventListener('click', (e) => {

                        if (!baughtProperties["playerId4"].includes(codeid)) {
                            if (codeid !== "null") {
                                if (playerclickedforRent == false) {
                                    playerclickedforRent = true
                                    document.querySelector(".playerId4").innerText = `Balance: ${playersBalance["playerId4"] -= properties[codeid][levels[codeid]]}`
                                    checkPropertyOwner(codeid)
                                    document.querySelector(`.${propertyOwner}`).innerText = `Balance: ${playersBalance[propertyOwner] += properties[codeid][levels[codeid]]}`
                                    if (levels[codeid] < 5) {
                                        levels[codeid] += 1
                                    }
                                    if (playersBalance["playerId4"] < 0) {
                                        if (levels[codeid] < 5) {
                                            levels[codeid] -= 1
                                        }
                                        document.querySelector(".playerId4").innerText = `Balance: 0`

                                        document.querySelector(`.${propertyOwner}`).innerText = `Balance: ${playersBalance[propertyOwner] -= properties[codeid][levels[codeid]]}`
                                        playersBalance["playerId4"] = 0
                                        for (let index = 0; index < baughtProperties["playerId4"].length; index++) {
                                            for (let i = 0; i < baughtprops.length; i++) {
                                                if (baughtProperties["playerId4"].includes(baughtprops[i])) {
                                                    levels[baughtprops[i]] = 1
                                                    baughtprops.splice(i, 1)
                                                    console.log(baughtprops);
                                                    break
                                                }
                                            }

                                        }
                                        for (let index = 0; index <= 22; index++) {
                                            baughtProperties["playerId4"].pop()

                                        }
                                        document.querySelector(".player4").className += " dead"
                                        removePlayer("playerId4")


                                        if (players.length === 1) {
                                            winner()
                                        }
                                    }
                                    console.log(levels[codeid]);
                                    codeid = "null"
                                    document.querySelector(".players-box").style.zIndex = "0"
                                    document.querySelector("#pay").style.display = "none"
                                    document.querySelector("#main-text").style.display = "none"
                                }
                            }
                        }
                        else if (baughtProperties["playerId4"].includes(codeid)) {
                            console.log(codeid);
                            if (codeid !== "null") {
                                if (playerclickedforRent == false) {
                                    playerclickedforRent = true

                                    if (levels[codeid] < 5) {
                                        levels[codeid] += 1
                                    }
                                    console.log(levels[codeid]);
                                    codeid = "null"
                                    document.querySelector(".players-box").style.zIndex = "0"
                                    document.querySelector("#pay").style.display = "none"
                                    document.querySelector("#main-text").style.display = "none"
                                }
                            }
                        }
                    }, { once: true })
                }
            })
            document.querySelector("#changelevel").addEventListener("click", (e) => {
                console.log(`changing level`);
                playerclickedforlevel = false
                document.querySelector(".levelOptions").style.display = "flex"
                document.querySelector("#container").style.display = "none"

                if (playerclickedforlevel == false) {
                    playerclickedforlevel = true
                    document.querySelector("#decreaselevel").addEventListener("click", (e) => {
                        if (codeid !== "null") {
                            levels[codeid] -= 1
                            if (levels[codeid] == 0) {
                                levels[codeid] = 1
                                console.log(`property alerady at 1`);

                            }
                            document.querySelector(".levelOptions").style.display = "none"
                            document.querySelector("#pay").style.display = "none"
                            document.querySelector("#changelevel").style.display = "none"
                            console.log(levels[codeid]);
                            codeid = "null"
                        }

                    }, { once: true })



                    document.querySelector("#increaselevel").addEventListener("click", (e) => {
                        if (codeid !== "null") {
                            levels[codeid] += 1
                            if (levels[codeid] > 5) {
                                levels[codeid] = 5
                                console.log(`property alerady at 5`);

                            }
                            document.querySelector(".levelOptions").style.display = "none"
                            document.querySelector("#pay").style.display = "none"
                            document.querySelector("#changelevel").style.display = "none"
                            console.log(levels[codeid]);
                            codeid = "null"
                        }

                    }, { once: true })


                }

            })

        }
        else {
            notInList = true
        }

        if (notInList) {

            playerclicked = false

            document.querySelector(".players-box").style.zIndex = "2"
            document.querySelector("#main-text").style.display = "block"
            document.querySelector("#container").style.display = "none"
            if (players.includes("playerId1")) {
                document.querySelector(".player1").addEventListener('click', (e) => {
                    if (!baughtprops.includes(codeid)) {

                        if (playerclicked == false) {
                            playerclicked = true
                            playercode = ".playerId1"
                            document.querySelector(playercode).innerText = `Balance: ${playersBalance["playerId1"] -= properties[codeid][0]}`


                            if (playersBalance["playerId1"] < 0) {

                                for (let index = 0; index < baughtProperties["playerId1"].length; index++) {
                                    for (let i = 0; i < baughtprops.length; i++) {
                                        if (baughtProperties["playerId1"].includes(baughtprops[i])) {
                                            levels[baughtprops[i]] = 1
                                            baughtprops.splice(i, 1)
                                            console.log(baughtprops);
                                            break
                                        }
                                    }

                                }

                                for (let index = 0; index <= 22; index++) {
                                    baughtProperties["playerId1"].pop()

                                }


                                document.querySelector(".playerId1").innerText = `Balance: 0`
                                playersBalance["playerId1"] = 0
                                document.querySelector(".player1").className += " dead"
                                removePlayer("playerId1")


                                console.log(baughtprops.length);
                                if (players.length === 1) {
                                    winner()
                                }
                            }
                            else {
                                baughtProperties["playerId1"].push(codeid)
                                baughtprops.push(codeid)
                                console.log(baughtprops);
                            }


                            document.querySelector(".players-box").style.zIndex = "0"
                            document.querySelector("#buy").style.display = "none"
                            document.querySelector("#main-text").style.display = "none"


                        }
                    }
                }, { once: true })
            }

            if (players.includes("playerId2")) {
                document.querySelector(".player2").addEventListener('click', (e) => {

                    if (!baughtprops.includes(codeid)) {

                        if (playerclicked == false) {
                            playerclicked = true
                            playercode = ".playerId2"

                            console.log(baughtProperties["playerId2"]);
                            document.querySelector(playercode).innerText = `Balance: ${playersBalance["playerId2"] -= properties[codeid][0]}`
                            if (playersBalance["playerId2"] < 0) {

                                for (let index = 0; index < baughtProperties["playerId2"].length; index++) {
                                    for (let i = 0; i < baughtprops.length; i++) {
                                        if (baughtProperties["playerId2"].includes(baughtprops[i])) {
                                            levels[baughtprops[i]] = 1
                                            baughtprops.splice(i, 1)
                                            console.log(baughtprops);
                                            break
                                        }
                                    }

                                }
                                for (let index = 0; index <= 22; index++) {
                                    baughtProperties["playerId2"].pop()

                                }

                                document.querySelector(".playerId2").innerText = `Balance: 0`
                                playersBalance["playerId2"] = 0
                                document.querySelector(".player2").className += " dead"
                                removePlayer("playerId2")


                                if (players.length === 1) {
                                    winner()
                                }
                            }
                            else {
                                baughtProperties["playerId2"].push(codeid)
                                baughtprops.push(codeid)
                            }
                            document.querySelector(".players-box").style.zIndex = "0"
                            document.querySelector("#buy").style.display = "none"
                            document.querySelector("#main-text").style.display = "none"


                        }
                    }
                }, { once: true })

            }

            if (players.includes("playerId3")) {

                document.querySelector(".player3").addEventListener('click', (e) => {
                    if (!baughtprops.includes(codeid)) {

                        if (playerclicked == false) {
                            playerclicked = true
                            playercode = ".playerId3"

                            console.log(baughtProperties["playerId3"]);
                            document.querySelector(playercode).innerText = `Balance: ${playersBalance["playerId3"] -= properties[codeid][0]}`
                            if (playersBalance["playerId3"] < 0) {

                                for (let index = 0; index < baughtProperties["playerId3"].length; index++) {
                                    for (let i = 0; i < baughtprops.length; i++) {
                                        if (baughtProperties["playerId3"].includes(baughtprops[i])) {
                                            levels[baughtprops[i]] = 1
                                            baughtprops.splice(i, 1)
                                            console.log(baughtprops);
                                            break
                                        }
                                    }

                                }
                                for (let index = 0; index <= 22; index++) {
                                    baughtProperties["playerId3"].pop()

                                }

                                document.querySelector(".playerId1").innerText = `Balance: 0`
                                playersBalance["playerId3"] = 0
                                document.querySelector(".player3").className += " dead"
                                removePlayer("playerId3")


                                if (players.length === 1) {
                                    winner()
                                }
                            }
                            else {
                                baughtProperties["playerId3"].push(codeid)
                                baughtprops.push(codeid)
                            }
                            document.querySelector(".players-box").style.zIndex = "0"
                            document.querySelector("#buy").style.display = "none"
                            document.querySelector("#main-text").style.display = "none"

                        }
                    }
                }, { once: true })
            }


            if (players.includes("playerId4")) {

                document.querySelector(".player4").addEventListener('click', (e) => {
                    if (!baughtprops.includes(codeid)) {

                        if (playerclicked == false) {
                            playerclicked = true
                            playercode = ".playerId4"

                            console.log(baughtProperties["playerId4"]);
                            document.querySelector(playercode).innerText = `Balance: ${playersBalance["playerId4"] -= properties[codeid][0]}`
                            if (playersBalance["playerId4"] < 0) {

                                for (let index = 0; index < baughtProperties["playerId4"].length; index++) {
                                    for (let i = 0; i < baughtprops.length; i++) {
                                        if (baughtProperties["playerId4"].includes(baughtprops[i])) {
                                            levels[baughtprops[i]] = 1
                                            baughtprops.splice(i, 1)
                                            console.log(baughtprops);
                                            break
                                        }
                                    }

                                }
                                for (let index = 0; index <= 22; index++) {
                                    baughtProperties["playerId4"].pop()

                                }

                                document.querySelector(".playerId4").innerText = `Balance: 0`
                                playersBalance["playerId4"] = 0
                                document.querySelector(".player4").className += " dead"
                                removePlayer("playerId4")

                                if (players.length === 1) {
                                    winner()
                                }
                            }
                            else {
                                baughtProperties["playerId4"].push(codeid)
                                baughtprops.push(codeid)
                            }
                            document.querySelector(".players-box").style.zIndex = "0"
                            document.querySelector("#buy").style.display = "none"
                            document.querySelector("#main-text").style.display = "none"

                        }
                    }
                }, { once: true })
            }

        }
    }
    for (let index = 0; index < document.querySelector(".options").children.length; index++) {
        document.querySelector(".options").children[index].addEventListener("click", () => {
            document.querySelector(".options").style.display = "none"
           
        })
    }

}

function getPlayers(playerCode) {
    if (!players.includes(playerCode)) {
        if (playerCode === "playerId1") {
            let player = document.createElement("div")
            player.className = "player player1"
            document.querySelector(".players-box").append(player)
            let playerTitile = document.createElement("h1")
            playerTitile.innerText = "Huzaifa"
            player.append(playerTitile)
            let cardChip = document.createElement("div")
            cardChip.className = "card-chip"
            player.append(cardChip)
            let chip = document.createElement("img")
            chip.src = "images/cardchip.png"
            cardChip.append(chip)
            let goldenLine = document.createElement("div")
            goldenLine.className = "line"
            player.append(goldenLine)
            let balance = document.createElement("h2")
            balance.className = playerCode
            balance.innerText = `Balance: ${playersBalance[playerCode]}`
            player.append(balance)
            players.push(playerCode)
        }
        else if (playerCode === "playerId2") {
            players.push(playerCode)
            let player = document.createElement("div")
            player.className = "player player2"
            document.querySelector(".players-box").append(player)
            let playerTitile = document.createElement("h1")
            playerTitile.innerText = "Ahmed"
            player.append(playerTitile)
            let cardChip = document.createElement("div")
            cardChip.className = "card-chip"
            player.append(cardChip)
            let chip = document.createElement("img")
            chip.src = "images/cardchip.png"
            cardChip.append(chip)
            let goldenLine = document.createElement("div")
            goldenLine.className = "line"
            player.append(goldenLine)
            let balance = document.createElement("h2")
            balance.className = playerCode
            balance.innerText = `Balance: ${playersBalance[playerCode]}`
            player.append(balance)
            localStorage.setItem("player2", playerCode)

        }
        else if (playerCode === "playerId3") {
            players.push(playerCode)
            let player = document.createElement("div")
            player.className = "player player3"
            document.querySelector(".players-box").append(player)
            let playerTitile = document.createElement("h1")
            playerTitile.innerText = "Player3"
            player.append(playerTitile)
            let cardChip = document.createElement("div")
            cardChip.className = "card-chip"
            player.append(cardChip)
            let chip = document.createElement("img")
            chip.src = "images/cardchip.png"
            cardChip.append(chip)
            let goldenLine = document.createElement("div")
            goldenLine.className = "line"
            player.append(goldenLine)
            let balance = document.createElement("h2")
            balance.className = playerCode
            balance.innerText = `Balance: ${playersBalance[playerCode]}`
            player.append(balance)
            localStorage.setItem("player3", playerCode)

        }
        else if (playerCode === "playerId4") {
            players.push(playerCode)
            let player = document.createElement("div")
            player.className = "player player4"
            document.querySelector(".players-box").append(player)
            let playerTitile = document.createElement("h1")
            playerTitile.innerText = "Player4"
            player.append(playerTitile)
            let cardChip = document.createElement("div")
            cardChip.className = "card-chip"
            player.append(cardChip)
            let chip = document.createElement("img")
            chip.src = "images/cardchip.png"
            cardChip.append(chip)
            let goldenLine = document.createElement("div")
            goldenLine.className = "line"
            player.append(goldenLine)
            let balance = document.createElement("h2")
            balance.className = playerCode
            balance.innerText = `Balance: ${playersBalance[playerCode]}`
            player.append(balance)
            localStorage.setItem("player4", playerCode)

        }

    }
}
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById('video');
    const resultContainer = document.getElementById('result');
    const fileInput = document.getElementById('fileInput');
    const startCaptureBtn = document.getElementById('startCapture');

    let isCapturing = false;
    let stream = null;
    let facingMode = 'environment';
    function initializeCamera() {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: facingMode } })
            .then(function (mediaStream) {
                stream = mediaStream;
                video.srcObject = stream;
                video.play();
            })
            .catch(function (err) {
                console.error('Error accessing camera:', err);
            });
    }
    initializeCamera()


    function captureQRCode() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
            resultContainer.innerText = 'QR Code Detected:';
            getOptions(code.data)
            isCapturing = false;
            document.querySelector("#container").style.display = "none"


        } else {
            resultContainer.innerText = 'Scanning QR code...';
        }

        if (isCapturing) {
            requestAnimationFrame(captureQRCode);
        }
    }

    document.querySelector("#scanner").addEventListener('click', () => {
        if (!isCapturing) {
            isCapturing = true;
            document.querySelector("#container").style.display = "block"
            captureQRCode();
        } else {
            isCapturing = false;
            document.querySelector("#container").style.display = "none"
        }
    })
    document.querySelector("#cancelCapture").addEventListener("click", (e) => {
        document.querySelector("#container").style.display = "none"
        isCapturing = false;
    })

    toggleCameraBtn.addEventListener('click', function () {
        if (facingMode === 'environment') {
            facingMode = 'user';
        } else {
            facingMode = 'environment';
        }

        if (stream) {
            stream.getTracks().forEach(track => {
                track.stop();
            });
        }

        initializeCamera();
    });
    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();
            img.onload = function () {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                canvas.width = img.width;
                canvas.height = img.height;
                context.drawImage(img, 0, 0);

                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const code = jsQR(imageData.data, imageData.width, imageData.height);

                if (code) {
                    resultContainer.innerText = 'QR Code Detected';
                    getOptions(code.data)
                    isCapturing = false;
                    document.querySelector("#container").style.display = "none"



                } else {
                    resultContainer.innerText = 'No QR code found in the uploaded image.';
                }
            };
            img.src = e.target.result;
        };

        reader.readAsDataURL(file);
    });

    // window.addEventListener('beforeunload', function () {
    //     if (stream) {
    //         stream.getTracks().forEach(track => {
    //             track.stop();
    //         });
    //     }
    // });
    window.onbeforeunload = function () {
        return 'Are you sure you want to leave?'; // Show confirmation message
      };
});


function winner() {
    console.log(players[0]);
    document.querySelector(".winner").style.display = "flex"
    document.querySelector(".winner").className += " " + players[0] + "win"
    document.querySelector("#winnerplayer").innerText = players[0].replace("Id", "")


}

function removePlayer(codeid) {
    var h = players.indexOf(codeid);
    if (h !== -1) {
        players.splice(h, 1);
    }
}


