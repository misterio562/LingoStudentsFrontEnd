import express from "express";
import { openConnection } from "../../database/conexiondb.js";

const router = express.Router();
const connection = openConnection();

router.get("/progress", (req, res) => {
  const { idStudent, idModule, idTheme } = req.query;
  console.log(idStudent, idModule, idTheme);
  const sql =
    "SELECT * FROM progressStudent WHERE idStudent= ? AND idModule= ? AND idTheme=?";
  connection.query(
    sql,
    [idStudent, idModule, idTheme],

    function (err, results) {
      if (err) {
        // Manejar el error
        console.log("Error al buscar ese registro de progreso");
        return res.status(400).send("Error al buscar ese progreso");
      }
      if (results.length === 0) {
        console.log("El progreso no existe");
        return res
          .status(404)
          .send("El progreso no existe en la base de datos");
      }
      // Si la consulta devuelve resultados (El id que tiene ese Estudiante)), el email existe en la base de datos
      // const progreso = results[0];
      return res.status(200).send("Este tema ya está superado");
    }
  );
});

router.post("/progress", (req, res) => {
  const { idStudent, idModule, idTheme } = req.query;
  console.log(idStudent,idModule,idTheme);
  const sql =
    "INSERT INTO progressStudent (idStudent,idModule,idTheme,completed) values (?,?,?,?)";
  connection.query(sql, [idStudent, idModule, idTheme, 1], (error) => {
    if (error) {
      console.error("Error al guardar el progreso a la base de datos", error);
      res.status(400).send("Error al guardar el progreso a la base de datos");
    } else {
      console.log("Datos guardados a la base de datos");
      res.status(200).send("Datos guardados a la base de datos");
    }
  });
});

router.get("/progress/modulecompleted",(req,res)=>{
  const {idStudent,idModule} = req.query
  const sql = "SELECT COUNT(*) AS count FROM progressStudent WHERE idStudent=? AND idModule=? AND completed=1;"
  connection.query(sql,[idStudent,idModule],(error, results)=>{
    if (error) {
      console.error("Error al consultar los temas completado");
      res.status(400).send("Error al consultar los temas completado")
    }else {
      const count = results[0].count;
      if (count === 3) {
        res.status(200).send('Módulo completado');
      } else {
        res.status(404).send('Módulo No completado');
      }
    }
  })

})

export default router;
