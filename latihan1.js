/*
1. promp untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
2. menentukan hasil dari tanggal yang ada saat ini di pc
*/

let Saldoawal = parseInt(prompt('berapa saldo awal kamu? ','0')) 
let Saldoakhir = parseInt(prompt ('berapa saldo akhir kamu? ','0')) 
const Totalsaldo = Saldoawal + Saldoakhir

alert(`Toal saldo anda sebanyak ${Totalsaldo}`)



let hari = new Date().getDay()

// if(hari == 1){
//     hari = 'Monday'
// }

switch(hari){
    case 1:
        hari = "Senin"
    break
    case 2:
        hari = "Selasa"
    break
    case 3:
        hari = "Rabu"
    break
    case 4:
        hari = "Kamis"
    break
    case 5:
        hari = "Jumat"
    break
    case 6:
        hari = "Sabtu"
    break
    case 7:
        hari = "Minggu"
    break
}

console.log(`hari ini adalah hari ${hari}`)