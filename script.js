const numInput = document.getElementById("num-input")
const convertBtn = document.getElementById("convert-btn")
const lengthResult = document.getElementById("length-result")
const volResult = document.getElementById("vol-result")
const massResult = document.getElementById("mass-result")

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

convertBtn.addEventListener("click", function() {
    const inputVal = numInput.value
    let meterResult = inputVal / 3.281
    let feetResult = inputVal * 3.281
    let literResult = inputVal / 0.264
    let gallonResult = inputVal * 0.264
    let kiloResult = inputVal / 2.204
    let poundResult = inputVal * 2.204

    lengthResult.innerHTML = `${inputVal} meters = ${feetResult.toFixed(3)} feet <span class="separator">|</span> ${inputVal} feet = ${meterResult.toFixed(3)} meters`
    volResult.innerHTML = `${inputVal} liters = ${gallonResult.toFixed(3)} gallons <span class="separator">|</span> ${inputVal} gallons = ${literResult.toFixed(3)} liters`
    massResult.innerHTML = `${inputVal} kilos = ${poundResult.toFixed(3)} pounds <span class="separator">|</span> ${inputVal} pounds = ${kiloResult.toFixed(3)} kilos`

    console.log(meterResult, feetResult, literResult, gallonResult, kiloResult, poundResult)
})