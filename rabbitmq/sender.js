var amqp = require('amqplib/callback_api');

amqp.connect('amqp://user:password@localhost', function(error, connection) {
  //carre about errors
  connection.createChannel(function(error, channel) {
  //carre about errors
    var queueName = 'testQueue';
    var message = 'Przykładowa treść';

    channel.assertQueue(queueName); // inicjalizacja kolejki
    
    channel.sendToQueue(queueName, new Buffer(message)); // wysyłanie wiadomości
    // To jest allias dla 
    //channel.publish('', queueName, new Buffer(message)); <-- (exchange, routingKey, message)
    console.log("Wysyłamy %s", message);
  });
  setTimeout(function() { connection.close(); process.exit(0) }, 500); // po wysłaniu zamknij i wyłącz aplikacje
});