import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

import { PORT } from "./config.js";

/* Importando la función openConnection desde el archivo conexiondb.js */
import { openConnection } from "../database/conexiondb.js";

const app = express();
/* Creación de una conexión a la base de datos. */
const connection = openConnection();

// Un middleware que analiza el cuerpo de la solicitud y lo pone a disposición en la propiedad req.body.
app.use(express.json());
// Un middleware que analiza el cuerpo de la solicitud y lo pone a disposición en la propiedad req.body.
app.use(bodyParser.json());
// Un middleware que permite al servidor aceptar solicitudes de diferentes orígenes.
app.use(cors());
// Un middleware que registra las solicitudes a la consola.
app.use(morgan("dev"));

/* Una solicitud de obtención al servidor. */
app.get("/registers", (req, res) => {
  const sql = "SELECT * FROM student";

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("No hay registro");
    }
  });
});

app.get("/register", (req, res) => {
  res.send("Activo el get");
});

// Enviar los datos del formulario a un endpoint en el servidor
app.post("/register", (req, res) => {
  console.log(req.body);

  const sql = "INSERT INTO student SET ?";
  // Guardar los datos en la base de datos

  const userObj = {
    email: req.body.email,
    nombre: req.body.fullName,
    telefono: req.body.phone,
    pass: req.body.password,
  };

  connection.query(sql, userObj, (error, rows) => {
    // if (error) throw error;
    console.log(userObj);
    res.send("Registrado correctamente");
  });

  // connection.query(
  //   sql,
  //   [email, fullname, phone, password],
  //   (error) => {
  //     if (error) {
  //       return res.send({ error });
  //     }

  //     // Retornar una respuesta
  //     res.send({ message: "Datos guardados correctamente" });
  //   }
  // );
});

app.get("/validate", function (req, res) {
  const email = req.query.email;
  const sql = "SELECT * FROM student WHERE email = ?";
  connection.query(sql, [email], function (err, results) {
    if (err) {
      // Manejar el error
      console.log(err);
      return res.status(500).send("Error al buscar usuario");
    }

    // Si la consulta no devuelve resultados, el email no existe en la base de datos
    if (results.length === 0) {
      return res.status(400).send("El usuario no existe");
    }

    // Si la consulta devuelve resultados, el email existe en la base de datos
    const usuario = results[0];
    return res.send(usuario);
  });

  // if (req.query.email==null) {
  //   res.send("Está nulo")
  // }else{
  //   res.send("No está nulo")
  // }

  // const sql = "SELECT * FROM student WHERE email = ?";
  // const rows = await connection.execute(sql, [req.query.email]);
  // if (rows) {
  //   //res.status(200).json({ message: 'Correo electrónico encontrado' });
  //   res.send("Encontrado");
  // } else {
  //   res.send("No encontrado");
  //   //res.status(404).json({ message: 'Correo electrónico no encontrado en la base de datos' });
  // }
});

app.post("/validate", (req, res) => {
  const email = req.body.email;
  const displayName = req.body.displayName;

  const sql = "INSERT INTO student (email, displayName) VALUES (?, ?)";
  connection.query(sql, [email, displayName], (err) => {
    if (err) {
      return res.status(404).send("Error to save user");
    }
    return res.status(200).send("User saved to database");
  });
});

app.post("/module1theme1", (req, res) => {
  const { aprobado } = req.body.aprobado;
  const sql = "UPDATE";
  try {
    connection.execute(sql, aprobado);
  } catch (error) {}
});

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
