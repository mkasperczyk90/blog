var amqp = require('amqplib/callback_api');

amqp.connect('amqp://user:password@localhost', function(error, connection) {
  //carre about errors
  connection.createChannel(function(error, chanel) {
    //carre about errors
    var queueName = 'testQueue';

    chanel.assertQueue(queueName); // inicjalizacja kolejki
    console.log("Oczekiwanie na wiadomość.", queueName);

    // uruchomienie funkcji konsumera. Czyli nasłuchiwanie na nadejście wiadomosci
    chanel.consume(queueName, function(message) { 
      console.log("Otrzymano wiadomość %s", message.content.toString());
    });
  });
});