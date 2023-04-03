import express from "express";
import { openConnection } from "../../database/conexiondb.js";

const router = express.Router();
const connection = openConnection();

router.put("/studentupdate", (req, res) => {
  const { idStudent, displayName } = req.body;
  const sql = "UPDATE student SET displayName=? WHERE idStudent=?";
  connection.execute(sql, [displayName, idStudent], (error) => {
    error
      ? res
          .status(500)
          .send("Error al actualizar los datos en la base de datos")
      : res.status(200).send("Los datos han sido actualizados correctamente");
  });
});

export default router;
