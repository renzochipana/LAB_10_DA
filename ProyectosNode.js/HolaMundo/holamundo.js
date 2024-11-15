var hhtp = require('http');
var server = http.createServer();
//Creacion de mensaje de respuesta cuando se reciba una solicitud
function mensaje(petic, resp){
    resp.writeHead(200,{'content-type':'text/plain'});
    resp.write('Hola Mundo');
    resp.end();
}
//asignando mensaje de respuesta al servidor
server.on('request',mensaje);
//levantando servidor en puerto 3000 y configurando mensaje de confirmación
server.listen(3000,function(){
    console.log('La Aplicacion esta funcionando en el puerto 3000');
});
    