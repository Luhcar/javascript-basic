/*
BELAJAR FUNCTION
*/

// function addName(firstName, lastName){
//     console.log('Nama depan :', firstName)
//     console.log('Nama belakang :', lastName)
//     console.log(firstName, lastName)
// }
// addName('Jamor', 'Margondes')

// // CONTOH 2
// function addName(){
//     console.log('Nama depan :', arguments[0])
//     console.log('Nama belakang :', arguments[1])
//     console.log(arguments)
// }
// addName('Jamor', 'Margondes')

// CONTOH 3
// function addName(){
//    for(let i = 0; i < arguments.length; i++)
//    {
//     console.log('Nama lengkap :', arguments[i])
//    }
// }
// addName('Jamor Mentah', 'Kaja Margondes')

// CONTOH 4
// const fullname = new Function(
//     'firstname',
//     'lastname',
//     'console.log(firstname, lastname)')

// fullname('ronaldo', 'wati')

// CONTOH 5 PENJUMLAHAN FUNCTION
// CARA 1 keyword new function
const sum1 = new Function('x', 'y', 'console.log(x + y)'
)

// CARA 2 standard function
function sum2(x, y){
    console.log(x + y)
}

// CARA 3 arrow function
const sum3 = (x, y) => {
    console.log(x + y)
}

sum1(5,3)
sum2(7,9)
sum3(3,8)