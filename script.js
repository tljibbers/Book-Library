const myLibrary = [];
const myLibraryDOM = [];
const mainBody = document.querySelector("body");
const selector = document.querySelector(".gridContainer");
const buttonClick = document.querySelector("button");

function book(title, author, pages, haveRead)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.read = function(haveRead) {
        if(haveRead)
        {
            console.log("Have read")
        }
        else
        {
            console.log("Have not read")
        }
    }

    this.info = function() {
        console.log(this.title, this.author, this.pages, this.read(this.haveRead))
    }
}

function addBookToLibrary(newBookTitle, newBookAuthor, newBookPages, newBookHaveRead, myLibrary)
{
    const newBook = new book(newBookTitle, newBookAuthor, newBookPages, newBookHaveRead)
    myLibrary.push(newBook);
    console.log(myLibrary)

}

function displayBooks(myLibrary, myLibraryDOM)
{
    for (let i in myLibrary)
    {
        const bookObject = document.createElement("div");
        myLibraryDOM.push(bookObject)
        selector.appendChild(bookObject);
    }
}

addBookToLibrary("yes", "yes", "yes", true, myLibrary);
addBookToLibrary("no", "no", "no", true, myLibrary);

displayBooks(myLibrary, myLibraryDOM);

buttonClick.onclick = function() {
    console.log("yay!");
}
