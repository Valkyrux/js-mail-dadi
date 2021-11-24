// creo il database delle mail utilizzando gli array con nome, dominio e TLD
const emailNames = ["gianni", "pinotto", "franco", "francesco", "ciro", "fulvio", "chiara", "elisabetta", "thomas", "caio", "tizio"];
const emailDomains = ["@gmail", "@libero", "@boolean", "@outlook"];
const emailTLDs = [".it", ".com", ".de", ".uk", ".us"];
const emailsDatabase = [];

for (let i = 0; i < emailNames.length; i++) {
    for (let j = 0; j < emailDomains.length; j++) {
        for (let k = 0; k < emailTLDs.length; k++) {
            emailsDatabase.push(emailNames[i] + emailDomains[j] + emailTLDs[k]);
        }
    }
}
// raccolgo l'input dall'html
const button = document.getElementById("search");
// creo una variabile con cui ricordo l'indice in cui ho trovato l'email
let indexFound;

button.addEventListener("click", 
    function() {
        const inputEmail = document.getElementById("input-email").value;
        let checkEmailBool = false;
        // controllo la mail nella lista
        for (let i = 0; i < emailsDatabase.length; i++) {
            if (inputEmail == emailsDatabase[i]) {
                checkEmailBool = true;
                indexFound = i;
            }
        }
    
    // stampo il risultato sull'HTML
    const searchResult = document.getElementById("answer");
    if (checkEmailBool) {
        searchResult.innerHTML = `Benvenuto ${emailsDatabase[indexFound]}`; 
    } else {
        searchResult.innerHTML = `L'email non risulta presente nel mio database`; 
    }
    }
) 