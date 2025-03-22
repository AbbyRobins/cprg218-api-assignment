heading.textContent = "Joke of the Day"

joke.textContent = "Loading . . .";

fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")

.then(response => response.json())

.then(data => {
    console.log(data);
    console.log(data.setup);
    console.log(data.delivery);
    console.log(data.joke);
    console.log(data.type);
    
    if (data.type === 'single'){
        joke.textContent = data.joke;
    }

    else if (data.type === 'twopart'){
        joke.textContent = data.setup + " ... " + data.delivery;
    }

    else {
        joke.textContent = "Something went wrong... Please try again."
    }
});
