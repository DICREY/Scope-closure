// function moneyBox(coins){
//     let saveCoins = 0
//     saveCoins += coins
//     console.log(`MoneyBox: $${saveCoins}`)
// }

// moneyBox(5)
// moneyBox(5)

function moneyBox(){
    let saveCoins = 0
    function countCoins(coins){
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
}

const caj = moneyBox()
caj(31)
caj(31)
caj(31)

const caja = moneyBox()
caja(50)
caja(50)
caja(50)
