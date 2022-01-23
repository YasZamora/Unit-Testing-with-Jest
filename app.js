// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar=(euro)=> {
    let result = 0;
    result = euro*oneEuroIs["USD"]
    return result
}

const fromDollarToYen=(dollar)=>{
    let valueInYen = Math.round(dollar/oneEuroIs["USD"]*oneEuroIs["JPY"])
    return valueInYen;
}

const fromYenToPound=(yen)=>{
    let valueInPound = Math.round(yen/oneEuroIs["JPY"]*oneEuroIs["GBP"])
    return valueInPound;
}
// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
