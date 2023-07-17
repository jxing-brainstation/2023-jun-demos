const student = {
    firstName: "John",
    lastName: "Doe",
    course: "Software Engineering"
}

console.log(student);

console.log("student as a string?", student.toString());
const studentJSONString = JSON.stringify(student);

console.log(studentJSONString);

const studentObject = JSON.parse(studentJSONString);

console.log("parsed JS object", studentObject);

// const invalidJSON = JSON.parse("['apples', 'pears']")

// console.log(invalidJSON)

/**** WEB APIs using Axios */
console.log(axios)


// myArray.map(book => {

// })
axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then(response => {
        const dogImageInfo = response.data
        console.log("response: ", response)
        if (response.status === 200) {
            console.log("request sucessful")
        }
        console.log("data from the API: ", response.data);
        console.log(dogImageInfo.message); //alternatively, this is response.data.message, but that's harder to read

        // now we do something with the data, such as DOM manipulation

        /*
            Final HTML:
            <img src="https://images.dog.ceo/breeds/terrier-yorkshire/20200319_143121.jpg" class="dogimg-container">
        */
        const dogImgElement = document.querySelector(".dogimg-container");
        dogImgElement.src = dogImageInfo.message;
    })
    .catch(error => {
        console.error("Error from api request:", error)
    })


const BASE_URL = "https://developerjokes.herokuapp.com";
const API_KEY = "neocat";

// NASA API EXAMPLE

axios
    .get(BASE_URL + "/jokes")
    .then(res => {
        const allJokes = res.data; // array of objects
        console.log(allJokes)
        const jokeListElement = document.querySelector(".devjokes-container")
        displayJokes(jokeListElement, allJokes)
    })

function displayJokes(jokesList, jokes) {
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

// order of events:
/*
The user submits the joke
make a post call to the API endpoint to add the joke to the database
*/

const jokeForm = document.querySelector('#jokeForm');
jokeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const question = e.target.question.value;
    const answer = e.target.answer.value;

    const newJoke = {
        question: question,
        answer: answer
    }
    axios
        .post(`${BASE_URL}/jokes?api_key=${API_KEY}`, newJoke)
        .then(response => {
            console.log(response.data);
            /*response.data looks like {
                message: "was successful",
                jokes: [{}, {}, {}]
            }
            */
            const jokeListElement = document.querySelector(".devjokes-container")
            displayJokes(jokeListElement, response.data.jokes)
        })
        .catch(error => {
            console.error("Error from posting a joke: ", error)
        })
})