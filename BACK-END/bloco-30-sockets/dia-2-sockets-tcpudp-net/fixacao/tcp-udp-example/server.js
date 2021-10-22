/* Importando o pacote NET, responsável pela implementação dos sockets no Node. */
const net = require('net');
const connections = [];

/* Criando o servidor com o método 'createServer', onde recebe uma conexao na qual são expostos os eventos que podemos manipular no nosso servidor. */
const server = net.createServer((connection) => {
  connections.push(connections);
  connection.on('end', () => {
    console.log('Cliente desconectado');
  });

  connection.on('data', (data) => {
    console.log(`O cliente disse: ${data}`);
  });
});

server.getConnections((err, count) => {
  console.log(count);
});

/* Após termos programado o servidor, é só colocá-lo de pé */
server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});
