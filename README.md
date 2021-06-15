# PUBLICACION DE TIERRAS

## Objetivos del proyecto 

- Construir una App JavaScript desde cero.
- Implemetar mejores prácticas.
- Utilizar Metodologías Ágiles.

En este proyecto se podra añadir nuevas publicaciones , modificar y eliminar . Utilizando react-redux para la parte del front y postgres , express , sequilize para el backend .

## Comenzamos 

Para levantar el backend lo primero es hacer un `npm install` o `npm i`, despues crear variables de entorno `.env` con las siguientes variables :

```
DB_USER= usuario de postgres
DB_PASSWORD= contraseña de postgres
DB_HOST= localhost
DB_NAME= nombre de la base de datos
```
Una ves conectado a la base de datos , con el comando `npm start` se conecta y se crea la tabla `publicaciones` en la base de datos , luego ejecutar `npm run insert` para rellenar la base de datos.

Con esto la base de datos estaria funcionando .

## Conectar el Front 

Para levantar el front entrar a la carpeta `client` y escribir el comando `npm install` o `npm i` .Luego que se instale todo ponder `npm start` y se ejecuta el front donde se visualiza la pagina.
 Alli podras ver las publicaciones asi como tambien modificarlas y borrarlas , tambien tiene un buscador que filtra por titulo o ubicacion de la publicidad.
