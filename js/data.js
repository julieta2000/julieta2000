// creamos una clase para los productos
class Producto {
    constructor(id, titulo, descripcion, precio, categoria, imagen) {
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
        this.precio = precio
        this.categoria = categoria
        this.imagen = imagen
    }
}

// creamos un array con los productos iniciales
const productos = [
    new Producto(1, 'Laptop', 'Laptop HP 4GB RAM', 4000, 'Tecnología', 'https://www.lenovo.com/medias/lenovo-laptop-ideapad-3-15-intel-gallery-1.png?context=bWFzdGVyfHJvb3R8MjIxNjM1fGltYWdlL3BuZ3xoMjIvaDkyLzEwNzU3MjQzOTI4NjA2LnBuZ3xhMjhmOWI5NmQ1ODE2YzIyN2RjZjg0YjU1MTIzYzAyNzY2Y2I3MTU4ZTAyNWI1MjQ5OTY4ZTFjMjBmMzYyNWI4'),
    new Producto(2, 'Tablet', 'Tablet Galaxy Tab 12 Pulgadas', 2000, 'Tecnología', 'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-x200nzsmaro/gallery/ar-galaxy-a8-sm-x200-sm-x200nzsmaro-531066559?$650_519_PNG$'),
    new Producto(3, 'SmartPhone', 'Iphone 13 Pro Max', 3000, 'Tecnología', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCwyvP6oe14yAxkfJ3MkawBW2q_fP532MZHEpCfvFcEFvDeboskU-Y3twlMAHZwl2St0&usqp=CAU'),
    new Producto(4, 'Monitor Curvo', 'Monitor Samsung 22 pulgadas', 5000, 'Tecnología', 'https://mauricomputacion.com.ar/images/productos/galerias/21834/790418516.jpg'),
    new Producto(5, 'Lavarropas', 'Lavarropas Automático Samsung Última Generación', 4000, 'Electrodomésticos', 'https://www.rodo.com.ar/media/catalog/product/cache/855090a5c67e45b26c9e0d345e7592dc/3/5/353719_lavarropas_samsung_4.jpg'),
    new Producto(6, 'Secarropas', 'Secarropas Kohinoor A655 5.5KG Nuevo', 2000, 'Electrodomésticos', 'https://www.casadelaudio.com/Image/0/500_500-590-KOH-212_01.png'),
    new Producto(7, 'Parlante', 'Parlante Bluetooh con Luces', 3000, 'Entretenimiento', 'https://static.cotodigital3.com.ar/sitios/fotos/full/00501400/00501422.jpg?3.0.162g'),
    new Producto(8, 'Play Station 5', 'Play Station 5 Sony 825GB + Joysticks + Juegos', 5000, 'Entretenimiento', 'https://acdn.mitiendanube.com/stores/236/748/products/ps5-pre-order-h1-bbcba6b2e075e9571716883294959588-1024-1024.jpg'),
    new Producto(9, 'Televisor', 'Televisor LG Nano Cell ThinQ AI', 6000, 'Entretenimiento', 'https://www.lg.com/ar/images/televisores/md07580332/gallery/D-03.jpg')
]

// obtenemos el carrito desde el local storage
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];