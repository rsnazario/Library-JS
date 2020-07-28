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
    //console.log(nameValue);
    const authorValue = addForms.querySelector('#author').value;
    //console.log(authorValue);
    let arr = [nameValue, authorValue];
    console.log(arr);
    myLibrary.push(arr);
    
    console.log(myLibrary);
    render();
  });
  
}

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
