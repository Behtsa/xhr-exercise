//APIKEY = eb9ba887d49c4633aecd4af448eefe84

const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
const responseImg = document.getElementById('response-img');
let searchedForText;

form.addEventListener('submit', function(e) {
	e.preventDefault();
	responseContainer.innerHTML = '';
	searchedForText = searchField.value;
	getNews();
})

const handleError = () => {
	console.log('Se ha presentado un error');
}

const addNews = function() {
	// console.log(this);
	const data = JSON.parse(this.responseText);
	// console.log(data);
	const response = data.response.docs;
	console.log(response);

	response.forEach(element => {
		console.log(element);
		const title = element.headline.main;
		const snippet = element.snippet;
		// const src = element.multimedia[0].url;
		// console.log(src);

		let li = document.createElement('li');
		li.className = 'articleClass';
		li.innerText = snippet;

		responseContainer.appendChild(li);
	});

	// let img = document.createElement('img');
	// let info = img.setAttribute = ('src', src);
	// console.log(info);
	// responseContainer.appendChild(img);
}

const getNews = () => {
	const articleRequest = new XMLHttpRequest();
	articleRequest.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=eb9ba887d49c4633aecd4af448eefe84`);
	articleRequest.onload = addNews;
	articleRequest.onerror = handleError;
	articleRequest.send();
}


