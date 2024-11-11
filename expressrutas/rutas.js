/// ARCHIVO ESPECIALIZADO DE MANEJO DE RUTAS
// Creando gestor de rutas
var express = require('express');
var router = express.Router();

// Creando manejadores de rutas
router.get('/', function(req, res) {
    res.send('Página principal');
});

router.get('/login', function(req, res) {
    res.send('Inicia sesión');
});

router.get('/productos', function(req, res) {
    res.send('Catálogo de productos');
});

router.get('/productos/compra', function(req, res) {
    res.send('Aquí puedes comprar tus productos');
});

// Exportando las rutas para usarlas en otros archivos
module.exports = router;
