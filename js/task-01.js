const listEl = document.querySelector('ul#categories');
console.log(`Number of categories: ${listEl.children.length}`);
const allItemEl = document.querySelectorAll('li.item');
allItemEl.forEach(element => {
	console.log(
		`Category: ${element.firstElementChild.textContent}\n Elements: ${element.lastElementChild.children.length}`
	);
});
