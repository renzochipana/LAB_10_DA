// Importando el paquete Express
var express = require('express');

// Creando la aplicación en Express
var app = express();

// Invocando el archivo que maneja las rutas
var rutas = require('./rutas.js');

// Usando las rutas definidas en el archivo rutas.js
app.use('/', rutas);

// El servidor de escucha que desplegará mi ruta HTTP
app.listen(3000, function() {
    console.log('La aplicación está funcionando en el puerto 3000');
});
