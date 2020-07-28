let myLibrary = [];

function Book(name, author, status) {
  this.name = name;
  this.author = author;
  this.status = status;
}

function addBookToLibrary() {
  let addForms = document.forms['add-book'];
  addForms.addEventListener("submit", function(event) {
    event.preventDefault();
    const nameValue = addForms.querySelector('#name').value;
    const authorValue = addForms.querySelector('#author').value;
    let arr = [nameValue, authorValue, false];
    myLibrary.push(arr);
    render();
  });
}

function deleteBook(e) {
  const ul = document.querySelector('#book-list ul');
  const el = e.target;
  if (el.className == 'delete') {
    const li = el.parentElement; // get the whole li item that encapsulates the delete
    // Array method that gets the nth-child (in this case, the nth-LI on the UL parent)
    let position = Array.prototype.indexOf.call(ul.children, li);
    ul.removeChild(li); // html dealing
    myLibrary.splice(position, 1); // array dealing
  }
}

function toggleRead(e) {
  let el = e.target.checked;
  el = !el;  // list = document.querySelector('#book-list ul');  // list.addEventListener('click', function(toggle){
  //   toggle.preventDefault();
  //   if (toggle.target.className == 'read-button'){
  //     let li = toggle.target.parentElement;
  //     let position = Array.prototype.indexOf.call(list.children, li);
  //     myLibrary[position][2] = true;
  //   }
  // })
}

function render() {
  const list = document.querySelector('#book-list ul');
  let i = myLibrary.length - 1;
  // Create Elements
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const authorName = document.createElement('span');
  const readbox = document.createElement('input');
  readbox.type = "checkbox";
  readbox.setAttribute("onclick", "toggleRead(event)");
  const deleteBtn = document.createElement('span');
  // Add content
  bookName.textContent = myLibrary[i][0];
  authorName.textContent = myLibrary[i][1];
  console.log(myLibrary[i][2]);
  readbox.checked = myLibrary[i][2];  deleteBtn.textContent = 'delete';
  deleteBtn.setAttribute("onclick", "deleteBook(event)");
  // Add classes
  bookName.classList.add('name')
  authorName.classList.add('author')
  deleteBtn.classList.add('delete')
  readbox.classList.add('read-button');
  // Append to document
  li.appendChild(bookName);
  li.appendChild(authorName);
  li.appendChild(readbox);
  li.appendChild(deleteBtn);
  list.appendChild(li);
}

addBookToLibrary();
//deleteBook();
//toggleRead();