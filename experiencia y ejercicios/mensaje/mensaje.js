// Importar la librería http
var http = require('http');

// Crear un servidor
var server = http.createServer();

// Función para manejar las peticiones y respuestas
function manejarSolicitud(peticion, respuesta) {
    // Obtener la URL solicitada
    var url = peticion.url;

    // Configurar la respuesta
    respuesta.writeHead(200, { 'Content-Type': 'text/html' });

    // Variable para almacenar el contenido de la respuesta
    var contenido;

    // Responder según la ruta solicitada
    if (url === '/') {
        contenido = `
            <h1>hola bienvenido a mi servidor Node.js </h1>
            <p> Node.js es un entorno de servidor de codigo abierto que usa JavaScript y el motor V8 de Google, compatible con varias plataformas.</p>
        `;
    } else if (url === '/about') {
        contenido = `
            <h1>Acerca de </h1>
            <p>Esta aplicacion es un ejemplo del ejercicio numero 1 de Node.js.</p>
        `;
    }
      

    // Enviar el contenido como respuesta
    respuesta.write(contenido);
    
    // Finalizar la respuesta
    respuesta.end();
}

// Asignar la función de manejo al servidor
server.on('request', manejarSolicitud);

// Levantar el servidor en el puerto 3001
server.listen(3001, function() {
    console.log('El servidor está funcionando en el puerto 3001');
});
