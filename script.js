const myLibrary = [];

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

addBookToLibrary("yes", "yes", "yes", true, myLibrary)
addBookToLibrary("no", "no", "no", true, myLibrary)
myLibrary[0].read()


