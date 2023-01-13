const numberToGuess = [];

for (let index = 1; index <= 5; index++) {
    
    let myRandomNumbers = generateRandomNumber(1, 50);

    while (numberToGuess.includes(myRandomNumbers)) {
        myRandomNumbers = generateRandomNumber(1, 50)
    }
    numberToGuess.push(myRandomNumbers);

    const addNumbers = createMySpan(myRandomNumbers);
    
}
console.log(numberToGuess);
/* -------------------------------------------------- */ 

setTimeout(hidden, mySeconds(5));
setTimeout(createPrompt, mySeconds(7));

/*------------------ FUNCTIONS ------------------*/
function generateRandomNumber (min, max) {
    
        return Math.ceil(Math.random() * (max - min)) + min;
        
}

function createMySpan (element){
    const divNumbers = document.querySelector('#numbers');
    const mySpan = document.createElement('span');
    mySpan.classList.add('number');
    mySpan.innerHTML = element;
    divNumbers.append(mySpan);
}

function mySeconds(seconds) {
    return seconds * 1000;    
}

function hidden () {
    alert('I numeri sono scomparsi')
    const myContainer = document.querySelector('div.container.flex');
    const divMyNumbers = document.querySelector('div.container.hidden');
    myContainer.classList.remove('flex');
    myContainer.classList.add('hidden');
    divMyNumbers.classList.remove('hidden');
    divMyNumbers.classList.add('flex');
}

function createPrompt () {
    for (let index = 1; index <= 5; index++) {

        let guessNumbers = parseInt(prompt('Inerisci il ' + index + ' ° numero della sequenza'));

        while (isNaN(guessNumbers) == true){
            guessNumbers = parseInt(prompt('VALORE NON VALIDO, Inerisci il ' + index + ' ° numero della sequenza'));
        }
        const spanMyNumbers = document.querySelector('#numeri-inseriti');
        const mySpan = document.createElement('span');
        mySpan.innerHTML = guessNumbers;
        mySpan.classList.add('number');
        spanMyNumbers.append(mySpan); 

        // if(isNaN(guessNumbers) == false){

        // }
    }
}