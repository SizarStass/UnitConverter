
const containerEL = document.getElementById("container")
const convertBtn = document.getElementById("convert-btn")
const inputEL = document.getElementById("num-input")
const resultsHeader = ["Length (Master/Feet)", "Volume (Liters/Gallons)", "Mass (Kilograms/Pounds)"]

//conversion factors
const metersToFeetConversionFact  = 3.281
const literToGallonConversionFact  = 0.264
const kilosToPoundsConversionFact  = 2.204

convertBtn.addEventListener("click", function(){
    //get user input
    const userInput = inputEL.value
    //generate results
    let meterFeet =  generateResult (userInput,"meters","feet",getEquivlent(userInput,metersToFeetConversionFact), getQuantity(userInput,metersToFeetConversionFact))
    let literGallon = generateResult (userInput,"liters","gallons",getEquivlent(userInput,literToGallonConversionFact), getQuantity(userInput,literToGallonConversionFact))
    let killosPound = generateResult (userInput,"kilos","pounds",getEquivlent(userInput,kilosToPoundsConversionFact), getQuantity(userInput,kilosToPoundsConversionFact))
    //Storing all the results in an array
    let resultsArr = [meterFeet,literGallon,killosPound]
    //render to the html page
    renderResult(resultsArr)
})

//Equilvent is the result of the multiplication of a number and the conversion factor
function getEquivlent(num, conversionFactor){
    let equivalentVal = num*conversionFactor
    return equivalentVal.toFixed(3)
}
//Quantity is the result of the division of a number and the conversion factor
function getQuantity(num, conversionFactor){
    let orignalVal = num/conversionFactor
    return orignalVal.toFixed(3)
}

function generateResult(num, unit1, unit2, equivalent, quantity){
    return ` ${num} ${unit1} = ${equivalent} ${unit2} | ${num} ${unit2} = ${quantity} ${unit1}`
}

function renderResult(results){
    let strResult = ""
    for(let i = 0; i < results.length; i++){
        strResult += `
        <div class="restult">
            <h2>${resultsHeader[i]}</h2>
            <p>${results[i]}</p>
        </div>
        `
    }
    containerEL.innerHTML = strResult
}