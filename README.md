# TP-FINAL-FRONT-END
El trabajo consiste en un e-commerce en el que se visualizan distintos productos. Se incluyen las siguientes funcionalidades:
- Se puede visualizar el detalle de cada uno de los productos
- Se pueden agregar productos al carrito de compras y confirmar la transacción
- Se puede acceder a un formulario para realizar cualquier tipo de consulta

El programa está compuesto por cuatro screens:
-HomePage: página principal, donde aparecen los distintos productos que se pueden adquirir
-ContactPage: página de contacto, donde se visualiza el formulario
-DetailPage: es la página en la que se pueden visualizar los detalles de los productos
-CartPage: página del carrito de compras, en la que se pueden ver los productos agregados y confirmar la compra
Por otro lado, los componentes que integran el programa son:
- Main.jsx: componente principal
- App.jsx: se incluyen los elementos del navegador y las distintas Routes
- ContextProvider.jsx, el cual provee los disntintos valores de estado utilizados en el proyecto
- Counter.jsx: componente creado para utilizarlo en la screen DetailPage, y así poder seleccionar la cantidad de unidades que quiero añadir al carrito
- Footer.jsx: componente que contiene los elementos del pie de página de mi HomePage
- ProductCard.jsx: se detalla la composición de las cartas de productos que aparecen en HomePage
- ProductCardCart.jsx: se detalla la composición de las cartas de productos que aparecen en CartPage
