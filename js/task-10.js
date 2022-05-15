function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector("#controls") 
console.log(controls);

const input = document.querySelector("input")
console.log(input);

const btnCreate = document.querySelector("[data-create]")
console.log(btnCreate);

const btnDestroy = document.querySelector("[data-destroy]")
console.log(btnDestroy);

const boxes = document.querySelector("#boxes")
console.log(boxes);



btnCreate.addEventListener("click", createBoxes)


function createBoxes(amount) {
 
for (let i = 0; i < amount; i += 1) {
  console.log(amount[i]);    
  const box = document.createElement('div')   
  boxes.append(box)
}
}

console.log(createBoxes(5));

