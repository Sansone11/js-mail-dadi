console.log('JS ok')
// crea una lista di email
// crea un prompt di imput email
// assegna una variabile al valore di input
// definisci il valore di input come valore cercato
// crea un ciclo che ispezioni il contenuto della lista
// se il valore di input è presente nella lista
// stampa login effettuato
// altrimenti stampa impossibile accedere
const email =["landscape@gmail.com", "aurelio@hotmail.it", "luiss@gmail.com", "atr96@gmail.com","dogma@gmail.com","figura@gmail.com","sansonemirco@gmail.com","tribe@gmail.com","sniper@hotmail.it","truelies@gmailcom","alias@gmail.com"]
let user = prompt("iserisci la tua email");
console.log(user);
let valoreCercato = (user)
let ePresente

for(let i = 0;i < email.length; i++){
    console.log(i);
    if (user === email[i]){
        ePresente = true;
        console.log('login effettuato');    
}
}

if(ePresente){
    console.log('login effettuato');
} else{
    console.log('il dato da lei inserito non corrisponde,proceda con la registrazione'); 
}