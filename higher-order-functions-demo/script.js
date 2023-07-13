const books = [
    "Eloquent JavaScript",
    "The Pragmatic Programmer",
    "Gödel, Escher, Bach",
    "If Hemingway Wrote JavaScript",
    "Hitchikers Guide to the Galaxy",
    "How to tell if your cat is plotting to kill you",
    "The Three-Body Problem"
];

/*** Writing a custom higher order function ***/
function doSomethingForEachElementInArray(inputArray, myAction) {
    for (let i = 0; i < inputArray.length; i++) {
        myAction(inputArray[i]);
    }
}

function printAction(whatToPrint) {
    console.log(whatToPrint);
}

function alertAction(whatToAlert) {
    alert(whatToAlert);
}
// doSomethingForEachElementInArray(books, printAction)
// doSomethingForEachElementInArray(books, alertAction)


/*** Built-in Array methods that are higher order functions ***/
books.forEach(printAction);
console.log("-------")
books.forEach(function printAction(book) {
    console.log(book)
})
console.log("-------")
books.forEach(function (book) {
    console.log(book)
})
console.log("------- :)")

books.forEach(book => {
    console.log(book)
})

books.forEach((book, index, bookArray) => {
    console.log("title: " + book + "is at index " + index);
    console.log("the array that it was called upon", bookArray)
})

const booksInAllCaps = books.map((book) => {
    return book.toUpperCase();
})

console.log("all caps books: ", booksInAllCaps)

const onlyJSBooks = books.filter((bookTitle) => {
    // if (bookTitle.includes("JavaScript")) {
    //     return true
    // } else {
    //     return false
    // }
    return bookTitle.includes("JavaScript");
})
console.log("only JS books: ", onlyJSBooks);

const requestedBook = "cat in the hat";
const foundBook = books.find((bookTitle) => {
    return bookTitle === requestedBook;
})
console.log("did we find the book? ", foundBook)
if (foundBook !== undefined) {
    console.log("we found ", requestedBook)
} else {
    console.log("we did not find ", requestedBook)
}

/*** A more complex example ***/
const libraryInventory = [
    {
        title: "Eloquent JavaScript",
        availableCopies: 2
    },
    { title: "The Pragmatic Programmer", availableCopies: 3 },
    { title: "Gödel, Escher, Bach", availableCopies: 0 },
    { title: "If Hemingway Wrote JavaScript", availableCopies: 3 },
    { title: "Hitchikers Guide to the Galaxy", availableCopies: 5 },
    { title: "How to tell if your cat is plotting to kill you", availableCopies: 0 },
    { title: "The Three-Body Problem", availableCopies: 7 }
];

/* Calculate how many books the library has in total */
// Output: 20;

function calculateTotalBooks(inventory) {
    let totalNumBooks = 0;
    inventory.forEach(book => {
        totalNumBooks += book.availableCopies;
    })
    return totalNumBooks;
}

console.log(calculateTotalBooks(libraryInventory))

/* Return an array of just the book titles (like the books array) */
const onlyBookTitles = libraryInventory.map((book) => {
    // console.log(book);
    return book.title;
})

console.log(onlyBookTitles)

/* What books have been checked out? */
// Output:
/*
[
    { title: "Gödel, Escher, Bach", availableCopies: 0 },
    { title: "How to tell if your cat is plotting to kill you", availableCopies: 0 },
]
*/

const checkedOutBooks = libraryInventory.filter((book) => {
    return book.availableCopies === 0;
})

console.log("checked out books:", checkedOutBooks)

/* Sort the inventory by the number of available copies, starting with books that have no available copies.  */


/* Calculate how many books the library has in total using reduce */
