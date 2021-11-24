// prelevo il comando dall'utente
const button = document.getElementById("start");
const myDice = document.querySelector("#your-value div")
const PcDice = document.querySelector("#pc-value div")
let myValue;
let pcValue;
// genero i numeri casuali per la sfida
button.addEventListener("click", 
    function () {
        // aggiungere la classe dll'animazione
        myDice.classList.add("animation");
        PcDice.classList.add("animation");
        // ritardo per togliere la classe dell'animazione
        setTimeout(function(){
            myDice.classList.remove("animation");
            PcDice.classList.remove("animation");
        },1000);
        // genero i numeri random
        myValue = Math.floor(Math.random() * 6 + 1);
        pcValue = Math.floor(Math.random() * 6 + 1);
        // assegno la classe per il display a forma di dado
        myDice.classList.replace(myDice.classList.item(0), "dice-" + myValue);
        PcDice.classList.replace(PcDice.classList.item(0), "dice-" + pcValue);
        // contatore per tenere memoria del punteggio di vittorie ottenute
        let victoryIndex = 0;
        // confronto
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


