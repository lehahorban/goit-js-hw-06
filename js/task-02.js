const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function createItem(array) { 

 const ingredientsEl = document.querySelector('#ingredients')
console.log(ingredientsEl)

let elements = array.map(el => {
  const ingredientItemEl = document.createElement('li');
  ingredientItemEl.classList = "item";
  ingredientItemEl.textContent = el;
  return ingredientItemEl
 })
  
ingredientsEl.append(...elements)

}

console.log(createItem(ingredients))


let elements = []
for (let i = 0; i < array.length; i += 1) {
  console.log(array[i]);
  
  
  const ingredientItemEl = document.createElement('li')
  ingredientItemEl.classList = "item"
  ingredientItemEl.textContent = array[i]
  ingredientsEl.appendChild(ingredientItemEl);
  elements.push(ingredientItemEl)
}