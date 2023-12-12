# Proyecto JavaScript - Antonella Coronel

## Pagina Inicial
En el index tenemos la página inicial de nuestro proyecto.
Aquí se muestran los productos en forma de 'cards' o tarjetas con los estilos de Bootstrap

Tambíen se agregó la funcionalidad de poder filtrar los productos mostrados por su categoría

Cada card, nos muestra la información del producto, con la posibilidad de agregar al carrito.
Este carrito se guarda en el localStorage, para evitar que se pierdan los datos cuando cerramos la ventana

## Página de carrito

En la página del carrito tenemos una tabla que nos muestra los productos que hemos añadido para comprar
Cada producto mostrado con su ID, titulo, descripcion, precio y con un botón que nos permite eliminar del carrito.

Además, se ha incluido la funcionalidad de calcular el total de compra de todos los elementos, sumando todos los precios de los productos que estan en el carrito.

### Herramientas
- Bootstrap 5
(Librería para Interfaz de Usuario)
- Sweet Alert
(Librería para crear alertas más estéticas y personalizables)

#### app.js

app.js es el archivo inicial de JavaScript de nuestro proyecto.

En el app, tenemos la funcion que muestra todos los productos en el index, como también la función para filtrar por categoría y mostrarlos en la página

La función que muestra los productos analiza si en el parámetro hay un array con los elementos filtrados. En el caso de que no lo haya o su valor sea falso, ejecutará un forEach de los productos que están en el Array inicial, proveniente del data.js.
En el caso de que si se hayan enviado, este ejecutará un forEach de ese Array filtrado.

La función que mostrará los productos se llamará 'renderizarProductos', la cual es la función que recibe como parametro el método 'forEach'

La función de cargar al carrito se ejecuta cuando llamamos al evento 'click' en el botón de cada card, guardando un array en el localStorage, el cual utlizaremos en la página del carrito.

La función de filtrar producto se ejecuta cuando cambiamos el valor del select. Este vuelve a llamar a la función que muestra los productos, pero enviando un Array como parámetro para que esta muestre los productos filtrados

#### data.js

Aqui guardamos los datos iniciales para posteriormente utilizarlos en las páginas

#### cart.js

Este es el archivo de JavaScript de la página del carrito. Aqui tenemos la función que muestra una fila por cada elemento que tengamos en el carrito (localStorage) en una tabla.
En esta tabla, podemos ver en detalle los productos que hemos seleccionado, asi como tambíen quitarlos de la lista.

Además, tenemos la función para calcular el total, que se ejecuta cuando cargamos la página o cuando eliminamos un elemento del carrito.# PROYECTO-FROTEND-jul
