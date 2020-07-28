const myLibrary = [];

function Book(name, author, status) {
  this.name = name;
  this.author = author;
  this.status = status;
}

// eslint-disable-next-line no-unused-vars
function deleteBook(e) {
  const ul = document.querySelector('#book-list ul');
  const el = e.target;
  if (el.className === 'delete') {
    const li = el.parentElement;
    const position = Array.prototype.indexOf.call(ul.children, li);
    ul.removeChild(li);
    myLibrary.splice(position, 1);
  }
}

// eslint-disable-next-line no-unused-vars
function toggleRead(e) {
  return e.target.checked;
}

function render() {
  const list = document.querySelector('#book-list ul');
  const i = myLibrary.length - 1;
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const authorName = document.createElement('span');
  const readbox = document.createElement('input');
  const deleteBtn = document.createElement('span');

  readbox.type = 'checkbox';
  readbox.setAttribute('onclick', 'toggleRead(event)');

  bookName.textContent = myLibrary[i].name;
  authorName.textContent = myLibrary[i].author;
  readbox.checked = myLibrary[i].status;
  deleteBtn.textContent = 'delete';
  deleteBtn.setAttribute('onclick', 'deleteBook(event)');

  bookName.classList.add('name');
  authorName.classList.add('author');
  deleteBtn.classList.add('delete');
  readbox.classList.add('read-button');

  li.appendChild(bookName);
  li.appendChild(authorName);
  li.appendChild(readbox);
  li.appendChild(deleteBtn);
  list.appendChild(li);
}

function addBookToLibrary() {
  const addForms = document.forms['add-book'];
  addForms.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameValue = addForms.querySelector('#name').value;
    const authorValue = addForms.querySelector('#author').value;
    const book = new Book(nameValue, authorValue, false);
    myLibrary.push(book);
    render();
  });
  return myLibrary;
}

addBookToLibrary();
