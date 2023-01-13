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
    myContainer.classList.remove('flex');
    myContainer.classList.add('hidden');
}