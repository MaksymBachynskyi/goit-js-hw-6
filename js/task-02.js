const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const ul = document.querySelector('ul#ingredients');
const elements = ingredients.map(item => {
	const itemEl = document.createElement('li');
	itemEl.textContent = item;
	itemEl.classList.add('item');
	return itemEl;
});
ul.append(...elements);
console.log(ul);
