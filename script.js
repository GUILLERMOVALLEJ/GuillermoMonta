document.addEventListener("DOMContentLoaded", function () {
    const productoFormulario = document.getElementById("product-form");
    const productoLista = document.getElementById("product-list");

    let productos = [];

    productoFormulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const precio = document.getElementById("precio").value;

        añadirProducto(nombre, precio);
    });

    productoLista.addEventListener("click", function (e) {
        if (e.target.classList.contains("eliminar")) {
            const id = e.target.getAttribute("data-id");
            eliminarProducto(id);
        } else if (e.target.classList.contains("editar")) {
            const id = e.target.getAttribute("data-id");
            actualizarProducto(id);
        }
    });

    function añadirProducto(nombre, precio) {
        const newProducto = { nombre, precio };
        productos.push(newProducto);
        mostrarProductos();
    }

    function eliminarProducto(id) {
        productos.splice(id, 1);
        mostrarProductos();
    }

    function actualizarProducto(id) {
        const nuevoNombre = prompt("Ingrese el nuevo nombre:");
        const nuevoPrecio = prompt("Ingrese el nuevo precio:");
        if (nuevoNombre !== null && nuevoPrecio !== null) {
            productos[id] = {
                nombre: nuevoNombre,
                precio: nuevoPrecio
            };
            mostrarProductos();
        }
    }

    function mostrarProductos() {
        productoLista.innerHTML = "";
        productos.forEach((producto, id) => {
            const productoItem = document.createElement("div");
            productoItem.classList.add("producto");
            productoItem.innerHTML = `
                <p><strong>Nombre:</strong> ${producto.nombre}</p>
                <p><strong>Precio:</strong> $${producto.precio}</p>
                <button class="editar" data-id="${id}">Actualizar</button>
                <button class="eliminar" data-id="${id}">Eliminar</button>
            `;
            productoLista.appendChild(productoItem);
        });
    }
});