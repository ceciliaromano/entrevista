# Sistema de login y perfil

Permite a los dos usuarios registrados en la base de datos iniciar sesión en sus cuentas y ver su perfil. El perfil contiene sus datos personales (nombre, apellido, DNI e email).

## Cómo instalar / ejecutar

### Requisitos
- Instalar  [NodeJS](https://nodejs.org)
- Instalar [XAMPP](https://www.apachefriends.org/es/download.html)

### Pasos

1. Clonar este proyecto y guardarlo en el directorio que desee.
2. Clonar el [BackEnd](https://github.com/ceciliaromano/entrevista-php-backend) en la carpeta htdocs de XAMPP.
3. Ejecutar XAMPP y activar el servidor Apache y MySQL.
4. Abrir terminal en la raiz (donde se encuentra el archivo App.js) y ejecutar lo siguiente:

`npm install`

Esto instalará todas las dependencias necesarias

Luego ejecutar

`npm start`

Esto abrirá el servidor local de ReactJS

## Instrucciones de uso

Ingresar el usuario y contraseña del usuario en el formulario, y luego iniciar sesión.
Una vez dentro del perfil se puede editar los datos aprentado el botón "Editar datos", esto abrirá un formulario donde se puede ingresar los datos que se desea cambiar.
Se puede la cantidad de datos que se desee, no hace falta llenarlos todos.

#### Usuarios utilizados:
Usuario 1: test1@gmail.com - Contraseña: contrasena1

Usuario 2: test2@gmail.com - Contraseña: contrasena2

### Video ilustrativo
https://user-images.githubusercontent.com/72151846/147143235-c8e4f850-2b35-4a67-ac74-11874ab93901.mp4

## Errores conocidos y mejoras

### Errores
- Al guardar cambios en ocaciones no se reflejan correctamente los cambios realizados, sin embargo la base de datos los ha modificado.
- Cuando el usuario intenta ingresar el mismo email que el otro usuario posee se le prohibe realizar la acción y se le muestra un cartel al respecto, este cartel no logra desaparecer una vez se ha corregido el error.

### Mejoras
- Eliminar los errores existentes.
- Generar un sistema de registro de usuarios nuevos.
- Mejorar el diseño UI.
- Generar rutas en la url principal y permitir que la sesión del usuario se mantenga abierta por una cantidad determinada de tiempo.
