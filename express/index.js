// Importando el paquete Express
var express = require('express');

// Creando la aplicación en Express
var app = express();

// Creando manejadores de rutas
app.get('/', function(req, res) {
    res.send('Hola mundo desde Express');
});

app.get('/login', function(req, res) {
    res.send('Aquí se mostraría la página del login');
});

// El servidor de escucha en el puerto 3000
app.listen(3000, function() {
    console.log('La aplicación está funcionando en el puerto 3000');
});
