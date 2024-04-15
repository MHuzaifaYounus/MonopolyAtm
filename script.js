let player1_balance = 1500
let player2_balance = 1500
let player3_balance = 1500
let player4_balance = 1500
let playerclicked = false
let players = []
let property
let playersBalance = {
    playerId1: 1500,
    playerId2: 1500,
    playerId3: 1500,
    playerId4: 1500,
}
let baughtProperties = {
    playerId1: [],
    playerId2: [],
    playerId3: [],
    playerId4: [],
}
let properties = {
    propertyId1: 60,
    propertyId2: 50,
}
let playercode


function showPlayers() {
    document.querySelector(".players-box").className = "show"
    document.querySelector(".player1").addEventListener('click', (e) => {
        playercode = ".playerId1"


    })
    document.querySelector(".player2").addEventListener('click', (e) => {
        playercode = ".playerId2"

    })
    document.querySelector(".player3").addEventListener('click', (e) => {
        playercode = ".playerId3"

    })
    document.querySelector(".player4").addEventListener('click', (e) => {
        playercode = ".playerId4"

    })

}

function getOptions(codeid) {

    if ((codeid).includes("player")) {
        document.querySelector("#setplayers").style.display = "block"
        document.querySelector("#setplayers").addEventListener("click", (e) => {
            getPlayers(codeid)
            document.querySelector("#setplayers").style.display = "none"
        })
    }
    else if ((codeid).includes("property")) {

        document.querySelector("#buy").style.display = "block"
        document.querySelector("#buy").addEventListener("click", (e) => {


            playerclicked = false
            document.querySelector(".players-box").style.zIndex = "2"
            document.querySelector("#buy-text").style.display = "block"
            if (!baughtProperties["playerId1"].includes(codeid)) {

                if (players.includes("playerId1")) {

                    document.querySelector(".player1").addEventListener('click', (e) => {
                        if (playerclicked == false) {
                            playerclicked = true
                            playercode = ".playerId1"

                            document.querySelector(playercode).innerText = `Balance: ${playersBalance["playerId1"] -= properties[codeid]}`
                            baughtProperties["playerId1"].push(codeid)
                            console.log(baughtProperties["playerId1"]);
                            document.querySelector(".players-box").style.zIndex = "0"
                            document.querySelector("#buy").style.display = "none"
                            document.querySelector("#buy-text").style.display = "none"


                        }
                    }, { once: true })
                }
            }
            if (!baughtProperties["playerId2"].includes(codeid)) {
                if (players.includes("playerId2")) {

                    document.querySelector(".player2").addEventListener('click', (e) => {
                        if (playerclicked == false) {
                            playerclicked = true
                            playercode = ".playerId2"
                            baughtProperties["playerId2"].push(codeid)
                            console.log(baughtProperties["playerId2"]);
                            document.querySelector(playercode).innerText = `Balance: ${playersBalance["playerId2"] -= properties[codeid]}`
                            document.querySelector(".players-box").style.zIndex = "0"
                            document.querySelector("#buy").style.display = "none"
                            document.querySelector("#buy-text").style.display = "none"


                        }
                    }, { once: true })
                }
            }
            if (!baughtProperties["playerId3"].includes(codeid)) {
                if (players.includes("playerId3")) {

                    document.querySelector(".player3").addEventListener('click', (e) => {
                        if (playerclicked == false) {
                            playerclicked = true
                            playercode = ".playerId3"
                            baughtProperties["playerId3"].push(codeid)
                            console.log(baughtProperties["playerId3"]);
                            document.querySelector(playercode).innerText = `Balance: ${playersBalance["playerId3"] -= properties[codeid]}`
                            document.querySelector(".players-box").style.zIndex = "0"
                            document.querySelector("#buy").style.display = "none"
                            document.querySelector("#buy-text").style.display = "none"

                        }
                    }, { once: true })
                }
            }
            if (!baughtProperties["playerId4"].includes(codeid)) {
                if (players.includes("playerId4")) {

                    document.querySelector(".player4").addEventListener('click', (e) => {
                        if (playerclicked == false) {
                            playerclicked = true
                            playercode = ".playerId4"
                            baughtProperties["playerId4"].push(codeid)
                            console.log(baughtProperties["playerId4"]);
                            document.querySelector(playercode).innerText = `Balance: ${playersBalance["playerId4"] -= properties[codeid]}`
                            document.querySelector(".players-box").style.zIndex = "0"
                            document.querySelector("#buy").style.display = "none"
                            document.querySelector("#buy-text").style.display = "none"

                        }
                    }, { once: true })
                }
            }
            
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
            playerTitile.innerText = "Player2"
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
            startCaptureBtn.innerText = 'Start Capturing';
        } else {
            resultContainer.innerText = 'Scanning QR code...';
        }

        if (isCapturing) {
            requestAnimationFrame(captureQRCode);
        }
    }

    startCaptureBtn.addEventListener('click', function () {
        if (!isCapturing) {
            isCapturing = true;
            startCaptureBtn.innerText = 'Stop Capturing';
            captureQRCode();
        } else {
            isCapturing = false;
            startCaptureBtn.innerText = 'Start Capturing';
        }
    });
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


                } else {
                    resultContainer.innerText = 'No QR code found in the uploaded image.';
                }
            };
            img.src = e.target.result;
        };

        reader.readAsDataURL(file);
    });

    window.addEventListener('beforeunload', function () {
        if (stream) {
            stream.getTracks().forEach(track => {
                track.stop();
            });
        }
    });
});


document.querySelector("#scanner").addEventListener("click", (e) => {
    document.querySelector("#container").style.display = "block"
})


document.querySelector("#cancelCapture").addEventListener("click", (e) => {
    document.querySelector("#container").style.display = "none"
})




