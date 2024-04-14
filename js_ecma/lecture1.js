function mergeArrays(array1, array2) {
    return [...array1, ...array2];
}

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

console.log(mergeArrays(arr1, arr2));


function removeDuplicates(...rest) {
    const resArr = [];
    for (const [key, value] of rest.entries()) {
        if (rest.indexOf(value) == key) {
            resArr.push(value);
        }
    }
    return resArr;
}


console.log(removeDuplicates(1, 2, 3, 4, 5, 1, 2, 2, 3, 4, 5, 6, 7));

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getEvenNumbers = arr => arr.filter(item => item % 2 == 0);

console.log(getEvenNumbers(numArr));


const calculateAverage = arr => (arr.reduce((acc, currentValue) => acc + currentValue)) / arr.length;

console.log(calculateAverage(numArr));

const capitalizeFirstLetter = str => str.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');

console.log(capitalizeFirstLetter("hello world"));


function createCalculator(x) {
    let value = x;
    return (
        {
            add(y) {
                value += y;
            },

            subtract(y) {
                value -= y;
            },
            get value() {
                return value;
            }
        }
    );
}


const calc = createCalculator(10);
calc.add(5);
calc.subtract(2);
calc.subtract(2);

console.log(calc.value);

function createGreeting(namePerson) {
    return function () {
        console.log("Hello, " + namePerson + "!");
    }
}

const hello = createGreeting("Евгений");

hello();


function createPasswordChecker(passwordLength) {
    return function (strPass) {
        return strPass.length <= passwordLength;
    }
}

const passw = createPasswordChecker(8);

console.log(passw('passw12ord'));
console.log(passw('secret'));


function sumDigits(num) {
    if (num < 10) {
        return num;
    }
    return num % 10 + sumDigits(Math.floor(num / 10));

}

console.log(sumDigits(123));
console.log(sumDigits(4561));