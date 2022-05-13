const textInput = document.querySelector("#validation-input")

const inputLength = textInput.getAttribute("data-length")
console.log(inputLength);


textInput.addEventListener("blur", validInput)

function validInput() {
    if (textInput.value.length < inputLength) {
       textInput.classList.remove('valid');
       textInput.classList.add('invalid');
    }
    else {
        textInput.classList.remove('invalid');
    textInput.classList.add('valid');
    }
}

console.log(validInput());

