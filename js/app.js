// GET DOM ELEMENTS
const jokeButton = document.querySelector(".get-joke-button");
const jokeContainer = document.querySelector(".joke-container");

// FETCH JOKE FUNCTION

const fetchJoke = async ()=> {
	try {
		const response = await fetch("https://api.chucknorris.io/jokes/rando");
		const data = await response.json();
		renderJoke(data.value)
	} catch (error) {
		console.log("Fail", error);
	}
}

// RENDER JOKE FUNCTION

const renderJoke = (joke)=> {
	const paragraph = document.createElement("p");
	jokeContainer.appendChild(paragraph);
	paragraph.textContent = joke
}

// ADD LISTENER

jokeButton.addEventListener("click", fetchJoke);