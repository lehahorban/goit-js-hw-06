const inputControl = document.querySelector("#font-size-control")
console.log(inputControl);
const inputText = document.querySelector("#text")
console.log(inputText);

inputControl.addEventListener('input', inputSizeControl)

function inputSizeControl(event) {
inputText.style.fontSize = event.currentTarget.value + "px";
}

