var http = require('http'),
    fs = require('fs');

// Leer el archivo HTML
var html = fs.readFileSync("./index.html");

// Crear servidor y mostrar la plantilla HTML
http.createServer(function(req, res) {
  res.write(html);
  res.end();
}).listen(3000, function() {
  console.log('Servidor corriendo en http://localhost:3000');
});
