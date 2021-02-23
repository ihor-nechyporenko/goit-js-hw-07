const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const makeIngredientsList = ingredients => {
    return ingredients.map(ingredient => {
        const ingredientEl = document.createElement('li');
        ingredientEl.textContent = ingredient;
    
        return ingredientEl;
    });
}

const ingredientsListEl = document.querySelector('#ingredients');
const elements = makeIngredientsList(ingredients);
ingredientsListEl.append(...elements);


// VARIANT #2 ------------------------------------------------

// const elements = ingredients.map(ingredient => {
//     const ingredientEl = document.createElement('li');
//     ingredientEl.textContent = ingredient;

//     return ingredientEl;
// });

// const ingredientsListEl = document.querySelector('#ingredients');
// ingredientsListEl.append(...elements);