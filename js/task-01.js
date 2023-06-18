const categoriasAmount = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categoriasAmount.length}`);
categoriasAmount.forEach(item =>
	console.log(
		`Category: ${item.querySelector('h2').textContent} \nElements: ${
			item.querySelectorAll('li').length
		}`
	)
);
