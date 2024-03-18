// alert("siuuuu")

// var usia = 30
// const usia = 30 (nilai yang gabisa diubah / konstan)

/*
let usia = 30
usia = 35
console.log('hayyah usia kamu adalah ' + usia)
alert('usia kamu adalah ' + usia)*/

/*
let usia = prompt('berapa usia kamu?')
alert('usia anda adalah ' + usia)*/

// TIPE DATA

let nama = 'rachul indra' // tipe string
let usia = 20 // tipe integer  number
let tinggiBadan = 172.5 // tipe doube  float
let beratBadan 
let pacar = 2 // null = tidak berniai (kosong)

beratBadan = 60 

if(pacar == null){
    pacar = 'belum punya'
}else {
    pacar = 'udah punya'
}

// switch (pacar) {
//     case 1:
        // pacar = "punya 1 aja"
//     break
//     case 2:
//         pacar = "punya pacar 2, playboy juga aku"
//     break
//     default:
//         pacar = 'belum punya'
//     break
// }

let saldoAwal = 50000
let saldoTambahan = 80000
const hutang = 30000
const saldoAkhir = saldoAwal + saldoTambahan - hutang

const x = 9
const y = 2
const z = x * y
const a = x / y

alert(
    `Nilai x = ${x} * Nilai y = ${y} maka hasinya adalah ${z} dan ${x} dibagi ${y} hasilnya adalah ${a}`
)

alert(
`nama saya ${nama} usia saya itu ${usia} tinggi badan saya adalah ${tinggiBadan} cm berat badan saya ${beratBadan} kg dan pacar saya ${pacar}`
)
alert(
    `saldo awal saya sebanyak Rp.${saldoAwal} & saldo tambahan yang akan saya miliki sebanyak Rp.${saldoTambahan} jadi total saldo yang saya punya adalah sebanyak Rp.${saldoAkhir}`
)