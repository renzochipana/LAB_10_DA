// Importando paquete express
var express = require('express');

// Creando objeto express
var app = express();

// Creando el middleware
const middleware = function(req, res, next) {
  console.log('Ejecutando el middleware mientras llega petición');
  next(); // Pasa al siguiente middleware o ruta
};

// Invocando el middleware
app.use(middleware);

// Configurando manejador de rutas
app.get('/', function(req, res) {
  res.send('Llegó petición al servidor');
});

// Levantando servidor
app.listen(3000, function() {
  console.log('Servidor en escucha en el puerto 3000');
});
