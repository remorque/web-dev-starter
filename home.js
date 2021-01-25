// let price = 49.99,
//     taxRate = 0.07,
//     name = 'Hiking Boots',
//     discounted = false;

// const fixedPrice = 10;

// price += fixedPrice;

// let message = `Hello


// World`
// console.log(message)

// let person = {
//     firstName: 'John',
//     lastName: 'Adams'
// }

// showMessage(person.firstName);

let price = 20;

if ( +(1.1 + 1.3).toFixed(2) !== 2.4 ) {
    showMessage('true');
}

if (price > 100) {
    console.log('huge')
}
else if (price > 50) {
    console.log('big')
}
else {
    console.log('small')
}

// Ternary operator
(price > 10) ? showMessage('expensive') : showMessage('cheap')

// Loops
for (let i=0; i <= 5; i++) {
    console.log(i)
}

let count = 1;
while (count < 5) {
    console.log(count);
    count++;
}

// Always executed once
do {
    console.log(count);
    count++;
} while (count < 5)