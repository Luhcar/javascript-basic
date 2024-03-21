/*
PERULANGAN JAVASCRIPT 
1. for, for of, for in, foreach
2. while, do while
*/

const namaOrang = ['Dito', 'Agnes', 'Brian', 'Tama', 'Ardi']

for (let orang of namaOrang)
{
    console.log(orang)
}

for (let orang in namaOrang)
{
    console.log(orang)
}

namaOrang.forEach((orang, index) => {
    console.log(orang, index)
});