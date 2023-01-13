const numberToGuess = [];

for (let index = 1; index <= 5; index++) {

    let myRandomNumbers = generateRandomNumber(1, 50);

    while (numberToGuess.includes(myRandomNumbers)) {
        myRandomNumbers = generateRandomNumber(1, 50)
    }
    numberToGuess.push(myRandomNumbers);
}

console.log(numberToGuess);


/*------------------ FUNCTIONS ------------------*/
function generateRandomNumber (min, max) {
    
        return Math.ceil(Math.random() * (max - min)) + min;
        
}