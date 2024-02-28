const inputPal = document.querySelector(`.inputPal`);
const btnConferma = document.querySelector(`.btnConferma`);


/* acquisito l'input, lo dividiamo in 2 (il resto non ci interessa perchè la lettera di mezzo è neutra nella definizione di palindromia) 
e verifichiamo che la prima e l'ultima lettera siano uguali, variando il contatore fino ad arrivare al centro della parola */

/*in commento il metodo con reverse()*/

btnConferma.addEventListener('click',controlPalindromy())


function controlPalindromy() /*L'INPUT NON VIENE RICEVUTO*/
{
   /*
    let palStr; 
    palStr = inputPal.value;

    let splitStr = palStr.split(``);
    let reverseStr = splitStr.reverse();

    console.log(`La parola inserita è` + palStr);
    console.log(`L'array estratto è` + splitStr);
    console.log(`L'array invertito è` + reverseStr);
    
    if (splitStr == reverseStr) {
        document.getElementById('rispostaPalindromia').innerHTML = 
        `<p> La parola inserita è palindroma <p>`;
    } else {
        document.getElementById('rispostaPalindromia').innerHTML = 
        ` <p> La parola inserita non è palindroma <p>`;
    } */

    let palStr; 
    palStr = inputPal.value;

    let splitStr = palStr.split(``);
    indexI = 0;
    beforeLetter = splitStr[indexI];
    indexY = splitStr.length;
    afterLetter = splitStr[indexY];

    let isPal;

    for (i = 0; i < splitStr.length / 2; i++) 
    {
        if (beforeLetter == afterLetter) 
        {
            indexI++;
            indexY--;
            isPal = true;
        } 
        else
        {
            isPal = false;
        }
    }

    if (isPal = true) 
    {
        document.getElementById('rispostaPalindromia').innerHTML = 
        `<p> La parola inserita è palindroma <p>`;
    }
    else
    {
        document.getElementById('rispostaPalindromia').innerHTML = 
        ` <p> La parola inserita non è palindroma <p>`;
    }

}


/* PARI E DISPARI */

const inputPD = document.querySelector(`.inputPD`);
const btnPD = document.querySelector(`.btnPD`);

const btnPari = document.querySelector(`.btnPari`);
const btnDispari = document.querySelector(`.btnDispari`);

let pari = 0;
let dispari = 0;

btnPari.addEventListener('click',plusPari())
btnDispari.addEventListener(`click`,plusDispari()) 


btnPD.addEventListener('click',function() 
{
    let inputNum = parseInt(inputPD.value);
    console.log(`Il numero inserito è ` + inputNum);

    if ((inputNum < 1) || (inputNum > 5)) {
        document.getElementById('rispostaPD').innerHTML = 
        ` <p> Non hai inserito un numero compreso tra 1 e 5 <p>`;
    } 
    else 
    { 
        let randNum1To5 = getRandomInt(1,5);
        const sumNum = inputNum + randNum1To5;

        if (dispariOPari(sumNum) == `pari`) 
        {
            if (pari == 1) {
                document.getElementById('rispostaPD').innerHTML = 
                `<p> Hai vinto, la somma è pari`
            }
            else if (pari == 0) {
                document.getElementById('rispostaPD').innerHTML = 
                `<p> Hai perso, la somma è dispari`
            }
        } else if (dispariOPari(sumNum) == `dispari`)
        {
            if (dispari == 1) {
                document.getElementById('rispostaPD').innerHTML = 
                `<p> Hai vinto, la somma è dispari`
            }
            else if (dispari == 0) {
                document.getElementById('rispostaPD').innerHTML = 
                `<p> Hai perso, la somma è pari`
            }
        }
    }
}
)

/*FUNZIONI UTILIZZATE*/

function plusPari()
{
    pari += 1;
}

function plusDispari()
{
    dispari += 1;
}

function getRandomInt(min, max) 
{
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil);
}

function dispariOPari(number) 
{
    let resto = (number % 2);

    if (resto == 1) {
        return (`dispari`)
    } else
    {
        return (`pari`)
    }
}