const counterEl = document.querySelector("#counter")
console.log(counterEl);
const btnDecrement = document.querySelector("[data-action=decrement]")
console.log(btnDecrement);
const btnIncrement = document.querySelector("[data-action=increment]")
console.log(btnIncrement);
const valueEl = document.querySelector('#value')
console.log(valueEl);

btnIncrement.addEventListener('click', increment)
btnDecrement.addEventListener('click', decrement)
let counterValue = 0
 
function increment() {   
valueEl.textContent = `${counterValue}`
    return counterValue += 1
}


function decrement() {
    valueEl.textContent = `${counterValue}`
    return counterValue -= 1
}

