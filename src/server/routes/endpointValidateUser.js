import express from "express";
import { openConnection } from "../../database/conexiondb.js";

const router = express.Router();

/* Creación de una conexión a la base de datos. */
const connection = openConnection();

router.get("/student", function (req, res) {
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
});

router.post("/student", (req, res) => {
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

export default router;
