const myLibrary = [];
const myLibraryDOM = [];
const mainBody = document.querySelector("body");
const selector = document.querySelector(".gridContainer");
const buttonClick = document.querySelector(".newBookButton");
const submitForm = document.querySelector(".formContainer");
const closeClick = document.querySelector(".closeButton")


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
        const bookTitle = document.createTextNode(myLibrary[i].title);
        const bookAuthor = document.createTextNode(myLibrary[i].author);
        const bookPages = document.createTextNode(myLibrary[i].pages);
        bookObject.appendChild(bookTitle);
        bookObject.appendChild(bookAuthor);
        bookObject.appendChild(bookPages);
        bookObject.style.borderStyle = "dotted";
        myLibraryDOM.push(bookObject)
        selector.appendChild(bookObject);
    }
}

function displayForm()
{
    submitForm.style.visibility = "visible";
}

function hideForm()
{
    submitForm.style.visibility = "hidden";
}

addBookToLibrary("yes", "yes", "yes", true, myLibrary);
addBookToLibrary("no", "no", "no", true, myLibrary);

displayBooks(myLibrary, myLibraryDOM);


buttonClick.onclick = function() {
    console.log("yay!");
    displayForm()
}

closeClick.onclick = function() {
    hideForm()
}
