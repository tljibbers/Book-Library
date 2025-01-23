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



const theHobbit = new book("The Hobbit", "J.R.R. Tolkien", "200 pages", true)
theHobbit.info()



