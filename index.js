const number = 10;
//Todo : Implement all tests to make sure that every thing is ok.
//Function to get all the prime numbers from 0 to 100
const getPrimeNumbers = (totalNumber, currentNumber, primeNumbers, next) => {
    if (currentNumber >= totalNumber) {
        return finish(primeNumbers);

    }

    getDivisores(currentNumber)
        .then((res) => {
            if (res === 2 && currentNumber % 2 !== 0) {
                const currentNumberToAdd = currentNumber;
                next(totalNumber, ++currentNumber, Array.prototype.concat(primeNumbers, currentNumberToAdd) , next)
            } else {
                next(totalNumber, ++currentNumber, primeNumbers, next)
            }
        })
};


const finish = (result) => {
    console.log(result)
};


const getDivisors = (number) => {
    return new Promise(resolve => {
        let countOfNumbers = 0;

        for (let i = 1; i <= number; i++ ) {
            if (number % i === 0)
                countOfNumbers = countOfNumbers + 1
        }
        resolve(countOfNumbers)
    })
}

getPrimeNumbers(number, 1, [], getPrimeNumbers);

//It is necessary export the functions to use it at the tests.
export   {
     getDivisors,
     getPrimeNumbers
}