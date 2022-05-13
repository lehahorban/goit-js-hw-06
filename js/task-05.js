const textInput = document.querySelector("#name-input")
console.log(textInput);
const textOutput = document.querySelector("#name-output")
console.log(textOutput);

textInput.addEventListener("input", (event) => {
  if (textInput.value === "") {
  return textOutput.textContent = "Anonymous"
}
 return textOutput.textContent = event.currentTarget.value;
});

