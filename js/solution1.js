'use strict';
// Task 1

let ulNode = document.querySelector('ul');
let liList = ulNode.querySelectorAll('li');

let attrsNames = document.querySelector('ul').getAttributeNames();


//1  

const arr = [];

for (let item of attrsNames) {

    let a = ulNode.getAttribute(item);

    arr.push(a)
}
console.log(arr);


//2

console.log(attrsNames);

// //3

liList[liList.length - 1].textContent = ('Привет меня зовут ' + ' Елена');

// //4

liList[0].setAttribute('data-my-name', 'Елена');

// //5

ulNode.removeAttribute('data-dog-tail');







