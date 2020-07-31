const myLibrary = [];

function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.status = status;
  this.pages = pages;
}

function openWindow() {
  const wrap = document.querySelector('#wrapper');
  wrap.style.display = 'block';
}

function closeWindow() {
  const wrap = document.querySelector('#wrapper');
  wrap.style.display = 'none';
}

const titleBtn = document.querySelector('.title-btn button');
titleBtn.onclick = () => openWindow();

// eslint-disable-next-line no-unused-vars
function deleteBook(e) {
  const ul = document.querySelector('.table tbody');
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
  const list = document.querySelector('.table tbody');
  const i = myLibrary.length - 1;
  const li = document.createElement('tr');
  const bookName = document.createElement('td');
  const authorName = document.createElement('td');
  const bookPages = document.createElement('td');
  const tdInput = document.createElement('td');
  const readbox = document.createElement('input');
  const deleteBtn = document.createElement('td');

  readbox.type = 'checkbox';
  readbox.setAttribute('onclick', 'toggleRead(event)');

  bookName.textContent = myLibrary[i].name;
  authorName.textContent = myLibrary[i].author;
  bookPages.textContent = myLibrary[i].pages;
  readbox.checked = myLibrary[i].status;
  deleteBtn.textContent = 'delete';
  deleteBtn.setAttribute('onclick', 'deleteBook(event)');

  bookName.classList.add('name');
  authorName.classList.add('author');
  bookPages.classList.add('pages');
  deleteBtn.classList.add('delete');
  readbox.classList.add('read-button');

  li.appendChild(bookName);
  li.appendChild(authorName);
  li.appendChild(bookPages);
  tdInput.appendChild(readbox);
  li.appendChild(tdInput);
  li.appendChild(deleteBtn);
  list.appendChild(li);
}

function addBookToLibrary() {
  const addForms = document.forms['add-book'];
  addForms.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameValue = addForms.querySelector('#name').value;
    const authorValue = addForms.querySelector('#author').value;
    const pagesValue = addForms.querySelector('#book-pages').value;
    const book = new Book(nameValue, authorValue, pagesValue, false);

    if ((nameValue == null || nameValue === '') || (authorValue == null || authorValue === '') || (pagesValue == null || pagesValue === '')) {
      document.getElementById('error').innerHTML = 'Fill all the required fields with correct format';
    } else if (Number.isInteger(Math.floor(pagesValue)) !== true) {
      document.getElementById('error').innerHTML = 'Incorrect format for Number of Pages';
    } else {
      myLibrary.push(book);
      render();
      closeWindow();
    }
  });
  return myLibrary;
}

window.onload = closeWindow();
addBookToLibrary();
