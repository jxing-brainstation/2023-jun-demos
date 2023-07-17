/* JSON AND JAVASCRIPT OBJECTS */
const student = {
    firstName: "John",
    lastName: "Doe",
    course: "Web Development",
};

console.log("student as a string? ", student.toString())

const studentJSONString = JSON.stringify(student);
const studentObj = JSON.parse(studentJSONString);

console.log('Original JS object: ', student);
console.log('Stringified JSON: ', studentJSONString);
console.log('Parsed JS object: ', studentObj);


/* WEB APIS */

const dogContainer = document.querySelector(".dogimg-container");
const quotesContainer = document.querySelector(".quotes-container");

// Dog pictures API: https://dog.ceo/dog-api/
axios.get("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
        const img = document.createElement("img");
        img.style.maxWidth = "500px";
        img.setAttribute("src", response.data.message);
        dogContainer.appendChild(img);
    });


/* DEVELOPER JOKES API: https://developerjokes.herokuapp.com */

const BASE_URL = "https://developerjokes.herokuapp.com"
// Get the element
const jokesList = document.querySelector(".devjokes-container");

// Data source of truth
let jokes = [];

axios.get(`${BASE_URL}/jokes/`)
    .then((response) => {
        jokes = response.data;
        displayJokes();
    });

function displayJokes() {
    jokesList.innerHTML = ""; // clear html in jokesList before appending, avoids duplicates

    jokes.forEach((joke) => {
        const article = document.createElement("article");

        const questionEl = document.createElement("h3");
        questionEl.innerText = joke.question;
        article.appendChild(questionEl);

        const answerEl = document.createElement("p");
        answerEl.innerText = joke.answer;
        article.appendChild(answerEl);

        jokesList.appendChild(article);
    });
}


// Let's post some new jokes

const API_KEY = "neocat"
const jokesForm = document.querySelector("#jokeForm");
jokesForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newJoke = {
        question: event.target.question.value,
        answer: event.target.answer.value
    };

    console.log("submit");
    // Post it to the API
    axios.post(`${BASE_URL}/jokes/?api_key=${API_KEY}`, newJoke)
        .then((response) => {
            alert("Joke successfullys submitted")
            jokes = response.data.jokes;
            displayJokes();

            // If the API you're using *doesn't* provide the updated list in the response
            // then you could make another axios.get request here
            // then update your list of jokes
        });

    jokesForm.reset();
});

// NASA api: https://api.nasa.gov/