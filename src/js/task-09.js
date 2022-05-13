function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widget = document.querySelector(".widget")
console.log(widget);

const color = document.querySelector(".color")
console.log(color);

const btnChangeColor = document.querySelector(".change-color")
console.log(btnChangeColor);

btnChangeColor.addEventListener('click', changeColor)
btnChangeColor.addEventListener('click', outputColorValue)

function changeColor() {
widget.style.backgroundColor = getRandomHexColor()

}

function outputColorValue() {
color.textContent = widget.style.backgroundColor
}
