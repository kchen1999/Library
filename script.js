let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead; 
    this.info = function() {
        if(this.isRead === "true") {
            return this.title + " by " + this.author + ", " + this.pages + " pages, has read yet";
        }
        else {
            return this.title + " by " + this.author + ", " + this.pages + " pages, not read yet"; 
        }
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    const libraryContainer = document.querySelector('.library-container');
    const card = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    card.classList.add('card');
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages + ' pages';
    card.append(title);
    card.append(author);
    card.append(pages);
    libraryContainer.append(card);
}


const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const harryPotter = new Book('Chamber of Secrets', 'J.K Rowling', 800, true);
const windsOfWinter = new Book('Winds of Winter', 'George R.R Martin', 1200, false);
const deltoraQuest = new Book('The Forests of Silence', 'Emily Rodda', 400, true);
addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);
addBookToLibrary(windsOfWinter);
addBookToLibrary(deltoraQuest);


