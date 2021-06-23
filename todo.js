 const form = document.querySelector("form");
 const list = document.getElementById("list");
 const item = document.getElementById("item");


// Add element 

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  list.innerHTML +=`<li>${item.value}</li>`;
  storage();
  item.value = "";
});

// Remove element

list.addEventListener('click', (e) => {
  if(e.target.classList.contains('checked')){
    e.target.remove();
  } else {
    e.target.classList.add('checked');
  }
  storage();
})

// Storage 

function storage() {
  window.localStorage.todoList = list.innerHTML;
}

function getValues() {
  let storageContent = window.localStorage.todoList;
  if(!storageContent) {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`
  }
  else {
    list.innerHTML = storageContent;
  }
}

getValues();