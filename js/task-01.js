function createElement() {
    const categories = document.querySelector("#categories")
     
const numberOfCategories = document.querySelectorAll('#categories ul');
console.log('Number of categories:', numberOfCategories.length);
const categoriesItem = document.querySelectorAll('.item');
 for (const item of categoriesItem) {
        const categoriesTitle = item.querySelector('#categories h2');
        const categoriesLength = item.querySelectorAll('ul li');
        console.log("Category:", categoriesTitle.textContent);
        console.log("Elements:", categoriesLength.length);
    }
}


createElement()

    
// console.log('Number of categories:', categoriesEl.children.length);
// console.log("Category:", categoriesEl.firstElementChild.querySelector('h2').textContent);
// console.log('Elements:', categoriesEl.querySelector('ul').children.length);
// console.log('Category:', categoriesEl.children[1].querySelector('h2').textContent);
// console.log('Elements:', categoriesEl.children[1].querySelector('ul').children.length);
// console.log('Category:', categoriesEl.lastElementChild.querySelector('h2').textContent);
// console.log('Elements:', categoriesEl.lastElementChild.querySelector('ul').children.length);

