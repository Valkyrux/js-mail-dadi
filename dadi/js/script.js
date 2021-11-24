// prelevo il comando dall'utente
const button = document.getElementById("start");
let myValue;
let pcValue;
// genero i numeri casuali per la sfida
button.addEventListener("click", 
    function () {
        myValue = Math.floor(Math.random() * 6 + 1);
        pcValue = Math.floor(Math.random() * 6 + 1);
        console.log(myValue);
        console.log(pcValue);
        // confronto
        let victoryIndex = 0;
        let winner = "nessuno (pareggio)";
        if (myValue > pcValue) {
            winner = "TU!!!!!!";
            victoryIndex = 1;
        } else if (myValue < pcValue) {
            winner = "Il computer =(";
            victoryIndex = 2;
        }
        // stampare il messaggio
        const winnerTab = document.querySelector("#round-winner");
        winnerTab.innerHTML = "il vincitore é: " + winner;
        // mantenere il conto del punteggio
        let previousYourScore = document.getElementById("your-score");
        let previousPCScore = document.getElementById("pc-score");
        if (victoryIndex == 1) {
            const newYourScore = parseInt(previousYourScore.innerHTML) + 1;
            previousYourScore.innerHTML = newYourScore;
        } else if (victoryIndex == 2) {
            const newPCScore = parseInt(previousPCScore.innerHTML) + 1;
            previousPCScore.innerHTML = newPCScore;
        }
    }    
);


