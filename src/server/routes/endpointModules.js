import express from "express";
import { openConnection } from "../../database/conexiondb.js";

const router = express.Router();
const connection = openConnection();

router.get("/modules", (req, res) => {
  const sql = "SELECT * FROM module";
  connection.execute(sql, (error, result) => {
    error ? res.send(error) : res.send(result);
  });
});

export default router;
