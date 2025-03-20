//conto da 1 a 100 con ciclo for
for(let numero = 1 ; numero <= 100 ; numero++){
 //CREO UNA VARIABILE CHE CONTERRA' LA STRINGA DA STAMPARE
 let stringa = "";

    //SE IL NUMERO E' DIVISIBILE PER 3 AGGIUNGO Fizz
    if(numero % 3 == 0){
        // operatore di "addizione e assegnazione" che aggiunge il valore a destra al valore a sinistra e poi assegna il risultato alla variabile a sinistra
        stringa += "Fizz";
    }
    //SE IL NUMERO E' DIVISIBILE PER 5 AGGIUNGO Buzz
    // Un numero è divisibile per 5 se il resto della divisione (numero % 5) è uguale a 0
    else if(numero % 5 == 0){
        stringa += "Buzz";
    }

    //SE LA STRINGA E' VUOTA STAMPO IL NUMERO    // se la stringa è vuota, allora il numero non è divisibile per 3 e 5, quindi lo stampo
    if(stringa == ""){
        console.log(numero);
    }
}