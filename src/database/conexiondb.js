import mysql from "mysql2";
import {DB_HOST,DB_PORT,DB_USER,DB_PASSWORD,DB_NAME} from './config.js'

export const openConnection = () => {
  const connection = mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
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
