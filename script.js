let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function createNew() {
    const title = document.getElementById('bTitle').value;
    const author = document.getElementById('bAuthor').value;
    const pages = document.getElementById('bPages').value;
    const isRead = document.getElementById('bRead').checked;
    return new Book(title, author, pages, isRead)
}

const bForm = document.getElementById("add-book-form");
const addBookPopup = document.getElementById("add-popup")
const addBookBtn = document.getElementById("add-btn");
const bookGrid = document.getElementById("bookGrid");

bForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newBook = createNew();
    myLibrary.push(newBook)

    addBookPopup.style.display = "none";

    createCard(newBook);
});


function createCard(book) {
    const card = document.createElement("div");
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    readBtn.textContent = book.isRead ? "Read" : "Not Read";
    removeBtn.textContent = "Remove";

    title.style.fontStyle = "italic";

    readBtn.addEventListener("click", () => {
        book.isRead = !book.isRead;
        readBtn.textContent = book.isRead ? "Read" : "Not Read";
    })

    removeBtn.addEventListener("click", (e) => {
        e.target.parentNode.remove();
        myLibrary.splice(myLibrary.indexOf(book), 1);
    });

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(readBtn);
    card.appendChild(removeBtn);

    bookGrid.appendChild(card);
}

addBookBtn.addEventListener("click", () => {
    addBookPopup.style.display = "block";
})