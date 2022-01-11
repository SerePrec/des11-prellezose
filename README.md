# Desafío 11 - Programación Backend

### CoderHouse

## MOCKS Y NORMALIZACIÓN

### Consigna 1:

Sobre el desafío entregable de la clase 16, crear una vista en forma de tabla que consuma desde la ruta ‘/api/productos-test’ del servidor una lista con 5 **productos** generados al azar utilizando **Faker.js** como generador de información aleatoria de test (en lugar de tomarse desde la base de datos). Elegir apropiadamente los temas para conformar el objeto ‘producto’ (nombre, precio y foto).

### Consigna 2:

Ahora, vamos a **reformar el formato de los mensajes** y la forma de comunicación del chat (centro de mensajes).
El nuevo formato de mensaje será:

```json
{
  "author": {
    "id": "mail del usuario",
    "nombre": "nombre del usuario",
    "apellido": "apellido del usuario",
    "edad": "edad del usuario",
    "alias": "alias del usuario",
    "avatar": "url avatar (foto, logo) del usuario"
  },
  "text": "mensaje del usuario"
}
```

#### Aspectos a incluir en el entregable:

1. Modificar la persistencia de los mensajes para que utilicen un contenedor que permita guardar objetos anidados (archivos, mongodb, firebase).

2. El mensaje se envía del frontend hacia el backend, el cual lo almacenará en la base de datos elegida. Luego cuando el cliente se conecte o envie un mensaje, recibirá un **array de mensajes** a representar en su vista.

3. El array que se devuelve debe estar **normalizado con normalizr**, conteniendo una entidad de autores. Considerar que el array tiene sus autores con su correspondiente id (mail del usuario), pero necesita incluir para el proceso de normalización un id para todo el array en su conjunto (podemos asignarle nosotros un valor fijo).  
   `Ejemplo: { id: ‘mensajes’, mensajes: [ ] }`

4. El frontend debería poseer el **mismo esquema de normalización** que el backend, para que este pueda desnormalizar y presentar la información adecuada en la vista.

5. Considerar que se puede cambiar el nombre del id que usa normalizr, agregando un tercer parametro a la función schema.Entity, por ejemplo:  
    `const schemaAuthor = new schema.Entity('author',{...},{idAttribute: 'email'});`
   En este schema cambia el nombre del id con que se normaliza el nombre de los autores a 'email'. Más info en la web oficial.

6. Presentar en el frontend (a modo de test) el porcentaje de compresión de los mensajes recibidos. Puede ser en el título del centro de mensajes.

> **Nota:** incluir en el frontend el script de normalizr de la siguiente cdn:  
> https://cdn.jsdelivr.net/npm/normalizr@3.6.1/dist/normalizr.browser.min.js  
> Así podremos utilizar los mismos métodos de normalizr que en el backend. Por ejemplo: new normalizr.schema.Entity , normalizr.denormalize(...,...,...)

### Deploy en Heroku (temporal):

https://des11-prellezose.herokuapp.com/

### Ejecución

Luego de clonar o descargar el repositorio e instalar todas las dependencias con `npm install`, existen dos comandos para levantar el proyecto.
Para levantarlo en modo de desarrollo junto a nodemon, utilizar `npm run dev`. De lo contrario, para ejecutarlo en "modo producción", utilizar `npm start`

### Vistas

Hay 2 vistas servidas desde el servidor que proveen una manera amena de probar el desafío.
Estas vistas se encuentran en las rutas:

- **/** : es la vista principal en donde se encuentra el formulario de carga de productos y el centro de mensajes (chat). Utiliza **websockets**.

- **/productos-mock** : es donde se muestra en una tabla el mock de productos devueltos por la llamada a la API en la ruta de test.

### API

Consiste en las siguientes rutas:

#### Router /api/productos

| Método | Endpoint                | Descripción                                                        |
| ------ | ----------------------- | ------------------------------------------------------------------ |
| GET    | **/api/productos/**     | Me permite listar todos los productos disponibles                  |
| POST   | **/api/productos/**     | Para incorporar productos al listado                               |
| GET    | **/api/productos/:id**  | Me permite listar un producto por su id                            |
| PUT    | **/api/productos/:id**  | Actualiza un producto por su id. Admite actualizaciones parciales  |
| DELETE | **/api/productos/:id**  | Borra un producto por su id                                        |
| GET    | **/api/productos-test** | Devuelve un listado de 5 productos mock generados con **Faker.js** |


