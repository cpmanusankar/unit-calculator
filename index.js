/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// let value = 18
const lengthCon = document.getElementById("length-conv")
const volumeCon = document.getElementById("volume-conv")
const massCon = document.getElementById("mass-conv")
const inputEl = document.getElementById("input-el")


const btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    let value = inputEl.value
    let feet = (3.281 * value).toFixed(4)
    let gallons = (0.264 * value).toFixed(4)
    let pound = (2.204 * value).toFixed(4)
    let meter = ( ( 1 / 3.281) * value ).toFixed(4)
    let liter = ( ( 1 / 0.264) * value ).toFixed(4)
    let kilogram = ( ( 1 / 2.204) * value ).toFixed(4)
    lengthCon.textContent = `${value} meters = ${feet} feet | ${value} feet = ${meter}`
    volumeCon.textContent = `${value} liters = ${gallons} gallons | ${value} gallons = ${liter}`
    massCon.textContent = `${value} kilos = ${pound} pounds | ${value} pounds = ${kilogram}`

})
