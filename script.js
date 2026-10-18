const cancelBtn = document.getElementById("cancelBtnModal");
cancelBtn.addEventListener("click", closeModal);

function closeModal() {
  const modal = document.querySelector("#modal");
  modal.style.display = "none";
}

const addBtn = document.querySelector("#addBook");
addBtn.addEventListener("click", openModal);

function openModal() {
  const modal = document.querySelector("#modal");
  modal.style.display = "block";
}

const titleInput = document.querySelector("#bookTitle");
const authorInput = document.querySelector("#bookAuthor");
const pagesInput = document.querySelector("#bookPages");
const readInput = document.querySelector("#read");

const addBookModal = document.querySelector("#addBookModal");

const sectionOfBooks = document.querySelector("#listOfBooks");

// Botão de Adicionar Livro no Modal
addBookModal.addEventListener("click", () => {
  // Seleciona os elementos
  title = titleInput.value;
  author = authorInput.value;
  pages = pagesInput.value;
  read = readInput.value === "on" ? true : false;

  //Cria um novo book e adiciona ao array
  addBookToLibrary(title, author, pages, read);

  //Limpa o formulário
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.value = "off";

  //Limpa a Section de Books
  document.querySelector("#listOfBooks").innerHTML = "";

  //Atualiza a Lista de Books
  listOfBook.forEach((book) => {
    const createBook = document.createElement("div");
    createBook.classList.add("book");
    createBook.innerHTML = `<div class="bookData">
          <h3 class="bookTitle">${book.title}</h3>
          <p>Author: <span class="">${book.author}</span></p>
          <p>Number of pages: <span>${book.pages}</span></p>
        </div>
        <div class="bookOptions">
          <div class="read">read</div>
          <button class="delButton" id='id-${book.id}'>Delete</button>
        </div>`;
    sectionOfBooks.appendChild(createBook);
    const delBtn = document.querySelector(`#id-${book.id}`);
    delBtn.addEventListener("click", () => {
      console.log("Clicou no delete");
    });
  });

  //Adicionar o Evento ao Botão Delete Criado

  //Fecha o Modal
  closeModal();

  console.log(listOfBook);
});

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  listOfBook.push(book);
}

let listOfBook = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = `id-${crypto.randomUUID()}`;
}
