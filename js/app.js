// GET DOM ELEMENTS
const jokeButton = document.querySelector(".get-joke-button");
const jokeContainer = document.querySelector(".joke-container");

// FETCH JOKE FUNCTION

const fetchJoke = async ()=> {
	const response = await fetch("https://api.chucknorris.io/jokes/random");
	const data = await response.json();
	renderJoke(data.value)
}

// RENDER JOKE FUNCTION

const renderJoke = (joke)=> {
	const paragraph = document.createElement("p");
	jokeContainer.appendChild(paragraph);
	paragraph.textContent = joke
}

// ADD LISTENER

jokeButton.addEventListener("click", fetchJoke);