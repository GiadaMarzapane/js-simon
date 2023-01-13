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


/*------------------ FUNCTIONS ------------------*/
function generateRandomNumber (min, max) {
    
        return Math.ceil(Math.random() * (max - min)) + min;
        
}

function createMySpan (element){
    const myContainer = document.querySelector('div.container');
    const mySpan = document.createElement('span');
    mySpan.classList.add('number');
    mySpan.innerHTML = element;
    myContainer.append(mySpan);
}