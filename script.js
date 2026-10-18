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
  this.id = `id-${crypto.randomUUID()}`;
};

const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#bookAuthor");
const bookPages = document.querySelector("#bookPages");
const bookRead = document.querySelector("#read");

function addBooksToList() {
  title = bookTitle.value;
  author = bookAuthor.value;
  pages = bookPages.value;
  read = bookRead.value;

  const book = new Book(title, author, pages, read);
  listOfBooks.push(book);
  closeModal();
  console.log(listOfBooks);
}

//Botão Adicionar Livro à Estante
//Prevent Default primeiramente
const formulario = document.querySelector("#bookForm");
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
});

//Botão salvar e Chamada da Função
const btnSave = document.querySelector("#saveBook");
btnSave.addEventListener("click", addBooksToList);
