// Solicitando paquete de Mysql
var mysql = require('mysql');

// Configurando parámetros de conexión (puede variar según instalación)
var conexion = mysql.createConnection({
  host: 'localhost',
  port: '3306',  // Verifica que este sea el puerto correcto
  database: 'miapp_db',
  user: 'root',
  password: '',
});

// Realizando conexión o verificando si sucedió un error
conexion.connect(function(err) {
  if (err) {
    console.log("Error de conexión: " + err.stack);
    return;
  }
  console.log("Conectado al ID " + conexion.threadId);
});

// Consultando y mostrando registros de la tabla 'albums'
conexion.query('SELECT * FROM productos', function(error,results){
    if (error) throw error;
    results.forEach(element => {
        console.log(element);
    })
});

conexion.query('SELECT*FROM clientes', function(error,results){
    if (error) throw error;
    results.forEach(element => {
        console.log(element);
    })
});

// Cerrando la conexión
conexion.end();