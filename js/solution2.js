// Task 2
'use strict';



const arr1 = [1, 2, 3];
const arr2 = [1, 2, [1.1, 1.2, 1.3], 3];

function generateList(array) {
    const ul = document.createElement('ul');

    for (let i = 0; i < array.length; i++) {
        let liList = document.createElement('li');

        Array.isArray(array[i])
            ? liList.append(generateList(array[i]))
            : liList.append(document.createTextNode(array[i]));

        ul.append(liList);
    }
    // console.log(ul);
    return ul;
}
let elem = generateList(arr2);
document.body.append(elem);

