const myLibrary = [];
const myLibraryDOM = [];
let currentValue = 0;
const mainBody = document.querySelector("body");
const selector = document.querySelector(".gridContainer");
const buttonClick = document.querySelector(".newBookButton");
const submitForm = document.querySelector(".formContainer");
const closeClick = document.querySelector(".closeButton");

const form = document.getElementById('form');
const title = document.getElementById('title').value;
const author = document.getElementById('author').value;
const pages = document.getElementById('pages').value;
const read = document.getElementById('Read');
const notRead = document.getElementById('NotRead');



const test = document.querySelector('#title').value;


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
        const bookObject = document.createElement("div");
        const bookObjectHolder = document.createElement("div");
        const bookObjectTitleHold = document.createElement("div");
        const bookObjectAuthorHold = document.createElement("div");
        const bookObjectPagesHold = document.createElement("div");
        const bookDeleteButton = document.createElement("button");
        const bookReadToggleButton = document.createElement("button");
        bookDeleteButton.innerHTML = 'Delete';
        

        if(read.checked == true)
        {
            bookReadToggleButton.innerHTML = 'Have Read';
            bookReadToggleButton.style.backgroundColor = '#5dbea3';
        }
        else
        {
            bookReadToggleButton.innerHTML = 'Have Not Read';
            bookReadToggleButton.style.backgroundColor = '#dd7973'
        }

        const bookTitle = document.createTextNode('Title:' + " " + myLibrary[myLibrary.length - 1].title);
        const bookAuthor = document.createTextNode('Author:' + " " + myLibrary[myLibrary.length - 1].author);
        const bookPages = document.createTextNode('Pages:' + " " + myLibrary[myLibrary.length - 1].pages);

        bookObjectHolder.appendChild(bookObjectTitleHold);
        bookObjectHolder.appendChild(bookObjectAuthorHold);
        bookObjectHolder.appendChild(bookObjectPagesHold);
        bookObjectHolder.appendChild(bookReadToggleButton);
        bookObjectHolder.appendChild(bookDeleteButton);
        

        bookObjectTitleHold.appendChild(bookTitle);
        bookObjectAuthorHold.appendChild(bookAuthor);
        bookObjectPagesHold.appendChild(bookPages);

        bookObject.appendChild(bookObjectHolder);

        bookObject.style.borderStyle = "solid";
        bookObject.style.borderWidth = "thin";
        bookObject.style.boxShadow = '5px 5px 5px 5px darkred'
        bookObject.style.marginLeft = "20px";
        bookObject.style.backgroundColor = "white"
        bookObject.style.display = "flex";
        bookObject.style.flexDirection = "column";
        bookObject.style.fontSize = '30px';
        bookObject.style.gap = '10px';

        bookObjectHolder.style.display = 'flex';
        bookObjectHolder.style.flexDirection = 'column';
        bookObjectHolder.style.paddingLeft = '3px';
        bookObjectHolder.style.gap = '20px';
        bookObjectHolder.style.margin = 'auto';
        bookObjectHolder.style.backgroundColor = 'white';

        bookDeleteButton.style.borderRadius = '5px';
        bookDeleteButton.style.height = '40px';
        bookDeleteButton.style.width = '230px';
        
        

        bookReadToggleButton.style.borderRadius = '5px';
        bookReadToggleButton.style.height = '40px';
        bookReadToggleButton.style.width = '230px';

        myLibraryDOM.push(bookObject);
        
        selector.appendChild(bookObject);

        bookDeleteButton.onclick = function()
        {
            bookObject.remove();
            const currentIndex = myLibraryDOM.indexOf(bookObject);
            myLibrary.splice(currentIndex, 1);
            myLibraryDOM.splice(currentIndex, 1);
            console.log(myLibrary.length);

        }

        bookReadToggleButton.onclick = function()
        {
            if(read.checked == true)
            {
                bookReadToggleButton.style.backgroundColor = '#dd7973'
                bookReadToggleButton.innerHTML = 'Have Not Read';
                read.checked = false;

                console.log(read.checked);
            }
            else
            {
                bookReadToggleButton.style.backgroundColor = '#5dbea3';
                bookReadToggleButton.innerHTML = 'Have Read';
                read.checked = true;
            }
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



buttonClick.onclick = function() {
    
    console.log("yay!");
    displayForm()
}

closeClick.onclick = function() {
    hideForm()
}

form.addEventListener('submit', e =>{
    if(title == '' || title == null)
    {
        e.preventDefault()
    }
    if(author == '' || author == null)
    {
        e.preventDefault()
    }
    if(pages == '' || pages == null)
    {
        e.preventDefault()
    }


    addBooksDOM();
    displayBooks(myLibrary, myLibraryDOM);

    
});

function addBooksDOM() {
    if(read.checked == true)
    {
        addBookToLibrary(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value, true, myLibrary)
    }
    else
    {
        addBookToLibrary(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value, false, myLibrary)
    }
}
