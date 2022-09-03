let myLibrary = [];

function Book(title, author, pages, isRead, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead; 
    this.index = index; 
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
}

function displayLibrary() {
    const libraryContainer = document.querySelector('.library-container');
    libraryContainer.replaceChildren();
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const removeBtn = document.createElement('button');
        card.classList.add('card');
        removeBtn.classList.add('remove-btn');
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages + ' pages';
        removeBtn.textContent = "Remove";
        card.append(title);
        card.append(author);
        card.append(pages);
        card.append(removeBtn);
        libraryContainer.append(card); 
        removeBtn.addEventListener('click', () => {
            myLibrary.splice(book.index, 1);
            for(let i = book.index; i < myLibrary.length; i++) {
                myLibrary[i].index -= 1; 
            }
            libraryContainer.removeChild(card); 
        });
    });


}


const newBookBtn = document.querySelector('.new-book-btn'); 
const modal = document.querySelector('.modal')
newBookBtn.addEventListener('click', () => {
    modal.style.display = 'block'; 
});
const submitBtn = document.querySelector('.modal-submit');
submitBtn.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('is-read').checked;
    const newBook = new Book(title, author, pages, isRead, myLibrary.length);
    modal.style.display = 'none';
    addBookToLibrary(newBook);
    displayLibrary();
});





const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false, 0);
const harryPotter = new Book('Chamber of Secrets', 'J.K Rowling', 800, true, 1);
const windsOfWinter = new Book('Winds of Winter', 'George R.R Martin', 1200, false, 2);
const deltoraQuest = new Book('The Forests of Silence', 'Emily Rodda', 400, true, 3);
addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);
addBookToLibrary(windsOfWinter);
addBookToLibrary(deltoraQuest);

displayLibrary();
