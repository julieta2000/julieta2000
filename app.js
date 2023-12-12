// creamos funcion para mostrar los productos en el DOM
//en el parametro recibimos lo que tenemos que mostrar (en este caso si filtramos o no)
const cargarProductos = (filtrado) => {
    //capturamos el elemento del html donde mostraremos los productos
    const row = document.querySelector('#productos');
    // limpiamos el contenido del elemento para posteriormente mostrar los productos
    row.innerHTML = ''
    // creamos la funcion que se encarga de mostrar el array como cards en el index
    // esta funcion que recibirá el ForEach como parametro, donde a su vez el parametro 'producto' hace referencia a cada elemento del array

    const renderizarProductos = (producto) => {
        //creamos un nodo 'div' el cual tendra las clases de bootstrap para mostrar como columnas
        const card = document.createElement('div')
        // cambiamos las clases del div
        card.className = 'col-12 col-6 col-lg-4 col-xl-3'
        // agregamos estilos en linea (Bootstrap)
        card.style = "width: 18rem;"
        // creamos una variable donde estará el contenido HTML que será insertado en cada div
        const cardContenido = `
            <div class="card">
                <div class="card-header">
                    ${producto.categoria}
                </div>
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${producto.titulo}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">$${producto.precio}</h6>
                    <p class="card-text">${producto.descripcion}</p>
                    <button onclick="agregarAlCarrito(${producto.id})" class="btn btn-warning d-block w-100"><i class="bi bi-plus"></i> Agregar al carrito</button>
                </div>
            <div/>
            `
        // metemos el contenido HTML dentro del elemento creado anteriormente
        card.innerHTML = cardContenido
        // agregamos el elemento listo creado al HTML para mostrarlo
        row.appendChild(card)
    }

    // ejecutar la funcion que renderiza los productos para cada elemento del array
    if (filtrado) {
        // si recibe un filtrado, muestra los productos del array con los elementos filtrados
        // foreach del filtrado
        filtrado.forEach(renderizarProductos)
    } else {
        // en caso de que la funcion principal no reciba, mostrar todos los productos desde el array original
        //  foreach del array original de producto
        productos.forEach(renderizarProductos)
    }
}

// funcion para agregar al carrito
const agregarAlCarrito = (id) => {
    // buscamos el producto por el id
    const productoEncontrado = productos.find((producto) => producto.id === id)
    // llamamos al metodo fire de la libreria para mostrar un alert personalizado
    // el metodo recibe un objeto con las configuraciones del alert
    Swal.fire({
        title: "¿Agregar al carrito?",
        text: `¿Quieres agregar ${productoEncontrado.titulo} al carrito?`,
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#f0A500",
        cancelButtonColor: "#d33",
        confirmButtonText: "Agregar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            carrito.push(productoEncontrado)
            localStorage.setItem('carrito', JSON.stringify(carrito))
            Swal.fire({
                title: "Agregado al carrito",
                text: `${productoEncontrado.titulo} ha sido agregado al carrito`,
                icon: "success"
            });
        }
    });
}

const filtrarProducto = () => {
    // capturamos el select donde elegimos la categoria para filtrar
    const categoriaSeleccionada = document.querySelector('#buscador').value
    const elementosFiltrados = productos.filter((producto) => producto.categoria == categoriaSeleccionada);
    // si el usuario decide mostrar todas, cargamos todos los productos
    if (categoriaSeleccionada === "Todas") {
        cargarProductos()
    } else {
        //si elige otra opcion, que muestre los elementos que ha filtrado
        cargarProductos(elementosFiltrados)
    }
}



//llamamos a la funcion para cuando se inicia la pagina
cargarProductos();