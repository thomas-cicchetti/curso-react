# ByteHub

Bytehub es un website que nace a partir del desafío de querer aprender a hacer diseño FrontEnd con React.

## Creador

Mi nombre es Thomas Cicchetti, Nací en Argentina y tengo 24 años. Con la creación de este website completo el curso de CoderHouse de Desarrollo Fornt End (HTML, CSS, JavaScrip y ahora React). 

Si bien falta mucho conocimiento por adquirir, estoy contento del resultado logrado mirando mi camino donde hace un año, cuando en ese momento veía todo esto muy lejos.




## Website y Funcionamiento

Este sitio web fue hecho principalmente para aprender el uso y gestión de React.
Se trata de E-Commerce en cual vamos a identificar cuatro botones en la barra de navegación:

- Home 
- Productos
- Contacto
- Carrito


Podremos navegar por el mismo, y encontrar en la sección *Productos* una variedad de artículos a la venta, cargada en un servidor de Firestore y traída al propio sitio.

Estar usando React, gracias a sus métodos de renderizado, nos permite que al agregar un producto en nuestro servidor, instantáneamente se muestre en el sitió web sin ningún configuración adicional.

El usuario tendrá la oportunidad de añadir artículos a su carrito desde la propia sección de productos, donde también podrá en el lateral izquierdo, encontrar la sección de categorías que le permitirá filtrar los artículos por estas mismas. A su vez, el usuario también podrá clickear en la imagen de un producto para ser dirigido a una ventana con mas detalles del producto, y también desde esa misma ventana tendrá la oportunidad de sumar artículos a su carrito.

A medida que el usuario agregue artículos a su carrito, la cantidad de artículos en el mismo irán apareciendo debajo del propio icono del carrito. 

Una vez finalizada la selección, dirigiéndose al icono del carrito serán direccionados a la ventana para ver el detalle final de su compra, con una imagen del producto, el titulo, la cantidad que están comprando del mismo, el subtotal, y el valor final de su compra.

Desde esta sección, podrán eliminar los artículos que deseen, o sencillamente vaciar el carrito por completo.

Si se desea avanzar con la compra, se deberá completar un formulario que pide datos básicos, una vez enviado ese formulario se le entrega al usuario el ID de su compra.


## Tecnologías Utilizadas


### Maquetación
- HTML
- CSS

### Programación
- JavaScript

### Librearias
- React
- [Toastify](https://www.npmjs.com/package/react-toastify)
- [UI VERSE](https://uiverse.io/elements?search=cart)

### Backend
- Firestore



## Uso del Repositorio
Para el correcto uso del mismo, debes instalar las tecnologías mencionadas (React, Toastify)
Debes crearte o tener una cuenta en Firestore y disponer de productos en tu servidor para poder ser consultados. Una vez cuentes con tu FireBase, debes ir a los ajustes del proyecto y obtener las claves para poder conectarse a esa base, esas claves las debes copiar en el archivo "Firebase.js" ubicado en la carpeta SRC.

Una vez instaladas las tecnologías y conectada tu base con el siguiente comando podrás levantar el website de manera local.

```bash
npm run dev
