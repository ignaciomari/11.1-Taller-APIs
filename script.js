// Función para hacer la solicitud a la API
function getUsers() {
    // URL de la API de JSONPlaceholder para obtener usuarios
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Realizar la solicitud GET utilizando fetch
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById('user-list');

            // Limpiar la lista antes de agregar nuevos elementos
            userList.innerHTML = '';

            // Iterar a través de los datos y mostrarlos en la página
            data.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = `Nombre: ${user.name}, Email: ${user.email}`;
                userList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error al obtener datos de la API:', error);
        });
}

// Agregar un evento de clic al botón para cargar usuarios
const loadUsersButton = document.getElementById('load-users');
loadUsersButton.addEventListener('click', getUsers);
