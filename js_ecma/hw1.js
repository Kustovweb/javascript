"use strict";
// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки.

const arr = [1, 5, 7, 9];

console.log(Math.min(...arr));


// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter(x) {
    let value = x;
    return {
        increment() {
            value += 1;
        },
        decrement() {
            value -= 1;
        },
        get value() {
            return value;
        }
    }
}


const counter = createCounter(10);

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value);


// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.


// function findElementByClass(rootElement, myClass) {
//     let i = 0;
//     i++;
//     const child = [...rootElement.children].filter(el => el.classList.contains(myClass));
//     if (child) {
//         return child.at(i);
//     } else {
//         return findElementByClass(rootElement, myClass);
//     }
// }

// function findElementByClass(rootElement, myClass) {
//     const child = [...rootElement.children];
//     let domEl = -Infinity;
//     child.forEach(el => {
//         if (el.classList.contains(myClass)) {
//             domEl = el;
//         }
//     });
//     if (domEl) {
//         return domEl;
//     }
//     return findElementByClass(rootElement, myClass);
// }

function findElementByClass(rootElement, myClass) {
    let children = rootElement.children;
    let iter = children[Symbol.iterator]();
    if (iter.next().value.classList.contains(myClass)) {
        return iter.next().value;
    }
    iter.next();

    return findElementByClass(rootElement, myClass);
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
