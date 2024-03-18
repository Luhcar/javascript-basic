/*
BELAJAR ARRAY
*/

// const arraySaya = ['😁', '✌', '🙌', '😎']
// console.log(arraySaya.length)

// const arrayKamu = []
// arrayKamu[0] = '❤'
// arrayKamu[1] = '🌹'
// arrayKamu[2] = '🎉'
// console.log(arrayKamu)

// const arrayKita = new Array()
// arrayKita[0] = '🐱‍👤'
// arrayKita[3] = '🎶'
// arrayKita[1] = '✔ '
// console.log(arrayKita[1])

// ================================================================================================================
// const arrayMakanan = ['🍕', '🍔', '🍟', '🌭','🍿'] // len  ght = 5

// const kentang = arrayMakanan.includes('🍟')
// if (kentang) {
//     const posisiKentang = arrayMakanan.indexOf('🍟')
//     const indexBefore = posisiKentang - 1
//     const indexAfter = posisiKentang + 1
//     const before = arrayMakanan[indexBefore]
//     const after = arrayMakanan[indexAfter]
//     console.log(`posisi sebelum kentang adalah ${before}`)
//     console.log(`posisi setelah kentang adalah ${after}`)
//     const makananAwal = arrayMakanan.shift()
//     const makananAkhir = arrayMakanan.pop()
//     console.log(`Makanan awal adalah ${makananAwal}`)
//     console.log(`Makanan terakhir adalah ${makananAkhir}`)
// } else {
//     console.log('Saya tidak tau posisi kentangnya')
// }

// const array = []
// array['alpukat'] = '🥑'
// array['apel'] = '🍎'
// console.log(array['apel'])

// const arrayBuah = ['🍌', 12, { jambu: function () {console.log('ini jambu') }}, ['makan', 'buah']]
// console.log(arrayBuah[0])
// console.log(arrayBuah[1])
// console.log(arrayBuah[2].jambu)
// arrayBuah[2].jambu()
// console.log(arrayBuah[3])
// console.log(arrayBuah[3][0])
// console.log(arrayBuah[3][1])

// MENGGABUNGKAN 2 ARRAY
// const arrayLagi = ['🍕', '🍔', '🍟']
// const arrayAgain = ['🍌', '🍉', '🍊']

// const mergeArray = arrayLagi.concat(arrayAgain)
// console.log(mergeArray)
// for (list of mergeArray) console.log(list)
// for (list in mergeArray) console.log(list)
// mergeArray.map((value, index) => console.log(value, index))

const datas = [
    {
        name: 'budi',
        stack: 'js',
        age: 30,
    },
    {
        name: 'mulhan',
        stack: 'c++',
        age: 28,
    },
    {
        name: 'rudi',
        stack: 'php',
        age: 25,
    },
    {
        name: 'ratno',
        stack: 'python',
        age: 36,
    }
]
datas
.sort((a,b) => a.age - b.age) 
.filter((x) => x.age < 30)
.map(values =>console.log(values))