let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
    const title = document.getElementById('bTitle').value;
    const author = document.getElementById('bAuthor').value;
    const pages = document.getElementById('bPages').value;
    const isRead = document.getElementById('bRead').checked;
    myLibrary.push(new Book(title, author, pages, isRead))
}

const bForm = document.getElementById("add-book-form");
const addBookPopup = document.getElementById("add-Popup")
const addBookBtn = document.getElementById("add-btn");

bForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    console.log(myLibrary)

    addBookPopup.style.display = "none"
});


addBookBtn.addEventListener("click", () => {
    addBookPopup.style.display = "block";
})
