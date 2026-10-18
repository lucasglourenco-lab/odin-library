// Escreva aqui o seu JavaScript para o projeto Library.
// Botão Adicionar Livro e Cancelar/Fechar no Modal
const btnAddBook = document.querySelector("#addBook");
btnAddBook.addEventListener("click", openModal);

const btnCancel = document.querySelector("#cancelBook");
const btnClose = document.querySelector("#closeDialog");
btnCancel.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);

//Funções de Abrir e Fechar Modal
function openModal() {
  const modal = document.querySelector("#bookDialog");

  modal.style.display = "block";
  modal.style.position = "fixed";
  modal.style.top = "200px";
  modal.style.zIndex = "999";
}

function closeModal() {
  const modal = document.querySelector("#bookDialog");
  modal.style.display = "none";
  // modal.style.position = "absolute";
}

// Criar Lista de Livros
const listOfBooks = [];

// Criar Livro e adicionar ao Array listOfBooks
const Book = function (title, author, pages, read) {
  if (!new.target) {
    throw Error("utilize o new para criar");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

function addBooksToList(title, author, pages, read) {
  const title = document.querySelector("#bookTitle").value;
  const author = document.querySelector("#bookAuthor").value;
  const pages = document.querySelector("#bookPages").value;
  const read = document.querySelector("#read").value;
  const book = new Book(title, author, pages, read);
  listOfBooks.push(book);
  console.log(listOfBooks);
}

//Botão Adicionar Livro à Estante
const btnSave = document.querySelector("#saveBook");
btnSave.addEventListener("click", addBooksToList);
