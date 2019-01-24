const number = 10;

//Function to get all the prime numbers from 0 to 100
const getPrimeNumbers = (totalNumber, currentNumber, primeNumbers, next) => {
    if (currentNumber >= totalNumber)
        return finish(primeNumbers);

    getDivisores(currentNumber)
        .then((res) => {
            if (res === 2) {

                next(totalNumber, ++currentNumber, primeNumbers.concat(currentNumber), next)
            } else {
                next(totalNumber, ++currentNumber, primeNumbers, next)
            }
        })
};


const finish = (result) => {
    console.log(result)
};


const getDivisores = (number) => {
    return new Promise(resolve => {
        let countOfNumbers = 0;

        for (let i = 1; i <= number; i++ ) {
            if (number % i === 0)
                countOfNumbers = countOfNumbers + 1
        }
        resolve(countOfNumbers)
    })
}

//TODO : Do it with recursivity.

getPrimeNumbers(number, 1, [], getPrimeNumbers);

export   {
     getDivisores,
     getPrimeNumbers
}