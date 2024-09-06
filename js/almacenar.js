const buttonAdd = document.getElementById("agregar");
const itemInput = document.getElementById("item");
const contenedor = document.getElementById("contenedor");
const buttonClear = document.getElementById('limpiar');

let listaItems = [];

document.addEventListener("DOMContentLoaded", () => {
    // Check if there is data in localStorage and repopulate the list
    if (localStorage.getItem('itemsList')) {
        listaItems = JSON.parse(localStorage.getItem('itemsList'));
        repopulateList();
    }
});

function createListItem(text) {
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(text));
    return item;
}

function repopulateList() {
    contenedor.innerHTML = ''; // Clear existing list items
    listaItems.forEach(itemText => {
        contenedor.appendChild(createListItem(itemText));
    });
}

buttonAdd.addEventListener("click", () => {
    let text = itemInput.value.trim();
    if (text) {
        // Add item to the list
        listaItems.push(text);
        contenedor.appendChild(createListItem(text));

        // Save list to localStorage
        localStorage.setItem('itemsList', JSON.stringify(listaItems));
        
        // Clear input field
        itemInput.value = '';
    } else {
        alert("Debe ingresar algún texto para ser ingresado");
    }
});

buttonClear.addEventListener('click', () => {
    // Clear localStorage and the list
    localStorage.removeItem('itemsList');
    listaItems = [];
    contenedor.innerHTML = '';
});


