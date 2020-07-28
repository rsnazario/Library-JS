let myLibrary = [];

function Book(name, author) {
  this.name = name;
  this.author = author;
}

function addBookToLibrary() {  
  let addForms = document.forms['add-book'];
  addForms.addEventListener("submit", function(event) {
    event.preventDefault();
    const nameValue = addForms.querySelector('#name').value;
    const authorValue = addForms.querySelector('#author').value;
    let arr = [nameValue, authorValue];
    myLibrary.push(arr);
    render();
  });
}

function deleteBook() {
  list = document.querySelector('#book-list ul');

  list.addEventListener('click', function(del) {
    del.preventDefault();
    if (del.target.className == 'delete'){
      const li = del.target.parentElement; // get the whole li item that encapsulates the delete
      // Array method that gets the nth-child (in this case, the nth-LI on the UL parent)
      let position = Array.prototype.indexOf.call(list.children, li);
      list.removeChild(li); // html dealing
      myLibrary.splice(position, 1); // array dealing
    }
  });
};

function render() {
  const list = document.querySelector('#book-list ul');
  let i = myLibrary.length - 1;
  // Create Elements
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const authorName = document.createElement('span');
  const deleteBtn = document.createElement('span');
  // Add content
  bookName.textContent = myLibrary[i][0];
  authorName.textContent = myLibrary[i][1];
  deleteBtn.textContent = 'delete';
  // Add classes
  bookName.classList.add('name')
  authorName.classList.add('author')
  deleteBtn.classList.add('delete')
  // Append to document
  li.appendChild(bookName);
  li.appendChild(authorName);
  li.appendChild(deleteBtn);
  list.appendChild(li); 
}

addBookToLibrary();
deleteBook();