// GET DOM ELEMENTS
const jokeButton = document.querySelector(".get-joke-button");
const jokeContainer = document.querySelector(".joke-container");

const fetchJoke = async () => {
	try {
		const response = await fetch("https://api.chucknorris.io/jokes/random");
		const data = await response.json();
		return data.value; 		
	} catch (error) {
		console.log("Fail",error);		
	}
}

const renderJoke = async ()=> {
	try {
		jokeContainer.textContent = "Loading joke";
		const joke = await fetchJoke()
		jokeContainer.textContent = joke;
	} catch (error) {
		console.log("Something went wrong rendering", error);
	}
}

jokeButton.addEventListener("click", fetchJoke);

