// Dichiarazione Array per i Codici Sconto
let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]

// Valore orario del lavoro
const backEnd = 20.50;
const frontEnd = 15.30;
const dataAnalyst = 33.60;

// Dati dal form 
function formSubmitted(event) {
    event.preventDefault();

    // NOME
     let inputName= document.getElementById("FormFirstName").value;
     console.log(inputName);
 
     // COGNOME
     let inputLastName = document.getElementById("FormLastName").value;
     console.log(inputLastName);
 
     // EMAIL
     let email = document.getElementById("inputEmailAddress").value;
     console.log(email);
 
     // ORA LAVORATIVE
     let hoursOfWork = document.getElementById("FormHours").value;
     console.log(parseInt(hoursOfWork));
 
     // LAVORO RICHIESTO
     let typeOfWork = document.getElementById("ChoosenWork").value;
     console.log(typeOfWork);
}