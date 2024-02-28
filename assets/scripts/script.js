const inputPal = document.querySelector(`.inputPal`);
const btnConferma = document.querySelector(`.btnConferma`);

let palStr; 


/* acquisito l'input, lo dividiamo in 2 (il resto non ci interessa perchè la lettera di mezzo è neutra nella definizione di palindromia) 
e verifichiamo che la prima e l'ultima lettera siano uguali, variando il contatore fino ad arrivare al centro della parola */
/*inizialmente l'avrei fatto come sopra ma è più comodo usare i metodi split e reverse per fare un controllo più efficiente e più leggibile*/

btnConferma.addEventListener('click',controlPalindromy())


function controlPalindromy() /*L'INPUT NON VIENE RICEVUTO*/
{
    palStr = inputPal.value;

    let splitStr = palStr.split(``);
    let reverseStr = splitStr.reverse();

    console.log(`La parola inserita è` + palStr);
    console.log(`L'array estratto è` + splitStr);
    console.log(`L'array invertito è` + reverseStr);
    
    if (splitStr == reverseStr) {
        document.getElementById('#rispostaPalindromia').innerHTML = 
        `La parola inserita è palindroma`;
    } else {
        document.getElementById('#rispostaPalindromia').innerHTML = 
        `La parola inserita non è palindroma`;
    }
}