// const mysql = require ('mysql2');

// /**
//  * Crea una conexión a la base de datos y la devuelve.
//  * @returns El objeto de conexión.
//  */
// function openConnection() {
//   const connection = mysql.createConnection({
//     host: 'localhost',
//     port: '3306',
//     user: 'root',
//     password: '123456',
//     database: 'tiendaxdb'
//   });

//   connection.connect(function(err) {
//       if (err) {
//           console.error('Error al conectarse a la base de datos: ' + err.stack);
//           return;
//       }
//       console.log('Conectado a la base de datos como ID ' + connection.threadId);
//   });

//   return connection;
// }

// /**
//  * Cierra la conexión a la base de datos.
//  * @param connection - El objeto de conexión.
//  * @returns El objeto de conexión.
//  */
// function closeConnection(connection) {
//   connection.end(function(err) {
//       if (err) {
//           console.error('Error al cerrar la conexión: ' + err.stack);
//           return;
//       }
//       console.log('Conexión cerrada');
//   });
// }

// /* Exportando las funciones `openConnection` y `closeConnection` para que puedan ser utilizadas en
// otros archivos. */
// module.exports = {
//   openConnection,
//   closeConnection
// }

import mysql from "mysql2";

export const openConnection = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "userlingoadmin",
    password: "123456",
    database: "lingostudentsdb",
  });

  connection.connect(function (err) {
    if (err) {
      console.error("Error al conectarse a la base de datos: " + err.stack);
      return;
    }
    console.log("Conectado a la base de datos como ID " + connection.threadId);
  });

  return connection;
};

openConnection();
