// Dichiarazione Array per i Codici Sconto
let listOfDiscountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]

// Valore orario del lavoro
const backEnd = 20.50;
const frontEnd = 15.30;
const dataAnalyst = 33.60;

// Dati dal form 
function formSubmitted(event) {
    event.preventDefault();

    let totalPrice = 0
    let promo = 0 

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

     // CODICE SCONTO
     let discountCode = document.getElementById("FormDiscountCode").value;
     console.log(discountCode);

     // LA SCELTA TRA I TRE LAVORI
     if (typeOfWork == "backend") {
     totalPrice = backEnd * hoursOfWork
     console.log(totalPrice.toFixed(2))
     }
     else if (typeOfWork == "frontend") {
     totalPrice = frontEnd * hoursOfWork 
     console.log(totalPrice.toFixed(2))
    }
     else {totalPrice = dataAnalyst * hoursOfWork
           console.log(totalPrice.toFixed(2))
    }

    // CONTROLLO SE IL DISCOUNT CODE INSERITO E' PRESENTE NELL'ARRAY
    for (let i = 0; i < listOfDiscountCodes.length; i++) {
        if (listOfDiscountCodes[i] == discountCode) {
            promo = totalPrice * 0.25;
            totalPrice = totalPrice - promo;
            console.log("CODICE SCONTO VALIDO");
            console.log("Il prezzo scontato è:" + " " + totalPrice.toFixed(2))
        }
}
}