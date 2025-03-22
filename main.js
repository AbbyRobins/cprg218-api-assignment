//INITIAL

heading.textContent = "Joke of the Day";

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

//BUTTON IDS

const programmingButton = document.getElementById('programming-button');
const miscButton = document.getElementById('misc-button');
const punButton = document.getElementById('pun-button');
const spookyButton = document.getElementById('spooky-button');
const christmasButton = document.getElementById('christmas-button');

//EVENTS

//Programming

programmingButton.addEventListener('click', function(){

    heading.textContent = "A Random Programming Joke";

    fetch("https://v2.jokeapi.dev/joke/programming?safe-mode")

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
    })
})

//Misc

miscButton.addEventListener('click', function(){

    heading.textContent = "A Random Miscellaneous Joke";

    fetch("https://v2.jokeapi.dev/joke/miscellaneous?safe-mode")

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
    })
})

//Pun

punButton.addEventListener('click', function(){

    heading.textContent = "A Random Pun";

    fetch("https://v2.jokeapi.dev/joke/pun?safe-mode")

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
    })
})

//Spooky

spookyButton.addEventListener('click', function(){

    heading.textContent = "A Random Spooky Joke";

    fetch("https://v2.jokeapi.dev/joke/spooky?safe-mode")

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
    })
})

//Christmas

christmasButton.addEventListener('click', function(){

    heading.textContent = "A Random Christmas Joke";

    fetch("https://v2.jokeapi.dev/joke/christmas?safe-mode")

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
    })
})