const textInput = document.querySelector("#validation-input")
console.log(textInput);

const inputLength = textInput.getAttribute("data-length")
const inputNumber = Number(inputLength)
console.log(inputNumber);


textInput.addEventListener("blur", validInput)

function validInput(event) {
    if (textInput.value.length === inputNumber) {
         textInput.classList.remove('invalid');
    textInput.classList.add('valid');
      
    }
    else {
        textInput.classList.remove('valid');
       textInput.classList.add('invalid');
    }
}

console.log(validInput());

