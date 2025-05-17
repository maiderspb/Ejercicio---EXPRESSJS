# Express

## Objetivos del Proyecto

Este proyecto tiene como propósito introducir y afianzar conocimientos en tecnologías del entorno backend, específicamente con:

✅ Manejo de Node.js

✅ Comprensión e implementación de Express.js

✅ Uso adecuado de NPM (Node Package Manager)

✅ Pruebas de rutas con Postman

✅ Interacción frontend utilizando Axios

✅ Subida y manejo de proyectos en GitHub

## Ejercicios

📝 Ejercicio 1
Archivo: e1.js

Crear un servidor básico con Express.

📝 Ejercicio 2
Archivo: ej2.js

Crear servidor Express con múltiples rutas y métodos.

Rutas:

GET / → Mensaje de bienvenida

GET /productos → "Listado de productos"

POST /productos → "Crear un producto"

PUT /productos → "Actualizar un producto"

DELETE /productos → "Borrar un producto"

GET /usuarios → "Listado de usuarios"

POST /usuarios → "Crear un usuario"

PUT /usuarios → "Actualizar un usuario"

DELETE /usuarios → "Borrar un usuario"

Todas las rutas deben ser probadas con Postman.

📝 Ejercicio 3
Archivo: ej3.js

Crear un servidor con rutas REST para productos.

Endpoint principal: GET /products → Devuelve un JSON con una lista de productos.

Funcionalidades adicionales:

POST /products → Crear un producto

PUT /products/:id → Actualizar un producto

DELETE /products/:id → Eliminar un producto

Filtros:

Por precio exacto

Por rango de precio (entre 50 y 250)

Por id (parámetro)

Por nombre (parámetro)

💻 Interfaz Frontend (Extra)
Crear interfaz con JavaScript + Axios.

Requisitos:

Pantalla de visualización de productos

Pantalla para añadir nuevos productos

Opción para eliminar productos desde la lista

📦 Requisitos Previos
Node.js, npm y postman instalados
