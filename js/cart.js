// capturamos el cuerpo de la table 'tbody'
const cuerpoTabla = document.querySelector('#cuerpo-tabla');

const cargarCarrito = () => {
    // cargamos el carrito desde el local storage
    const carrito = JSON.parse(localStorage.getItem('carrito'))
    //limpiamos el cuerpo de la tabla
    cuerpoTabla.innerHTML = '';
    // por cada elemento en el carrito, mostramos una fila con los datos del producto
    carrito.forEach((elemento) => {
        // creamos la fila
        const tr = document.createElement('tr');
        // creamos el contenido ira dentro de la fila
        const contenidoTr = `
              <th scope="row">${elemento.id}</th>
              <td>${elemento.titulo}</td>
              <td>${elemento.descripcion}</td>
              <td>${elemento.precio}</td>
              <td><button class="btn btn-outline-danger" onclick="eliminarDelCarrito(${elemento.id})"><i class="bi bi-trash"></i></button></td>
        `
        // agregamos el contenido a la fila
        tr.innerHTML = contenidoTr;
        // mostramos la fila lista para agregar al cuerpo de la tabla
        cuerpoTabla.appendChild(tr)
    })
    // calculamos el total
    calcularTotal()
}


const eliminarDelCarrito = (id) => {
    const confirmar = confirm("¿Seguro que quieres eliminar este producto?")
    // si el usuario acepta, se agrega al carrito
    if (confirmar) {
        // obtenemos el carrito del localstorage
        const carrito = JSON.parse(localStorage.getItem('carrito'))
        // obtenemos la posicion del array donde esta el producto que vamos a eliminar
        const productoIndex = carrito.findIndex((elemento) => elemento.id === id)
        // ubicamos el producto a eliminar y eliminamos un elemento a partir de esa posicion
        carrito.splice(productoIndex, 1);
        // actualizamos el local storage
        localStorage.setItem('carrito', JSON.stringify(carrito))
        // cargamos nuevamente el carrito
        cargarCarrito()
    } else {
        alert('Operacion cancelada')
    }
}

const calcularTotal = () => {
    // cargamos el carrito del localstorage
    const carrito = JSON.parse(localStorage.getItem('carrito'))
    // creamos la variable donde acumularemos el total
    let totalCompra = 0;
    // sumamos todos los precios de cada elemento que esta en el carrito
    carrito.forEach((elemento) => {
        totalCompra += elemento.precio
    });
    // capturamos el elemento donde mostraremos el resultado
    const precioFinal = document.querySelector('#total-compra');
    precioFinal.innerHTML = `$${totalCompra}`
}

// cargamos el carrito cuando entramos a la página
cargarCarrito()


