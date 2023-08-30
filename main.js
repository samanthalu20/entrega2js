// Arreglo para almacenar los nombres ingresados
var nombres = [];

// Función para agregar un nombre al arreglo y mostrarlo en la lista
function agregarNombre() {
    var nombreInput = document.getElementById('nombreInput');
    var nombresLista = document.getElementById('nombresLista');

    var nuevoNombre = nombreInput.value;
    if (nuevoNombre.trim() !== '') {
        nombres.push(nuevoNombre);

        // Limpiar el input
        nombreInput.value = '';

        // Limpiar la lista antes de actualizarla
        nombresLista.innerHTML = '';

        // Actualizar la lista de nombres
        nombres.forEach(function(nombre) {
            var li = document.createElement('li');
            li.textContent = nombre;
            nombresLista.appendChild(li);
        });
    }
}