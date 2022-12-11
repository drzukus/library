let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function() {
    console.log(`${title} by ${author}, ${pages} pages, ${isRead ? "read" : "not read yet"}`);
  }
}


const book = new Book("The Hobbit", "J.R.R. Tolkein", 295, false)
book.info()

function addBookToLibrary() {
  // do stuff here
}