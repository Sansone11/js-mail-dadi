console.log('JS ok');
// crea un generatore di numeri casuali bot
// crea un genetore di nume casuali user
// attribuisci a entrambi valore minimo e massimo da 1 a 6
// specificare che siamo numeri interi
// se il valore casuale del bot è <= del valore
// stampa hai perso
// altrimenti stampa congratulazioni hai vinto


    document.getElementById('start').addEventListener('click',function(){
        let bot = 1+Math.floor(6*Math.random());
            // console.log(bot);
            let user = 1+Math.floor(6*Math.random()); 
            // console.log(bot);
            let message = 0;
            document.getElementById("bot").innerHTML = bot;
                document.getElementById("user").innerHTML = user;
                document.getElementById("message").innerHTML = message;
                
                if(user == bot){
                let message = "pareggio";
                }
                else if(bot < user){
                  let message ="hai vinto";
                }
                else{
                  let message ="hai perso";
                }
                	 
    })