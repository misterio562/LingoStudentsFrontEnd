import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

import { PORT } from "./config.js";

import endpointValidateUser from "./routes/endpointValidateUser.js";
import endpointAddProgress from "./routes/endpointProgress.js";
import endpointModules from "./routes/endpointModules.js";

const app = express();

// Un middleware que analiza el cuerpo de la solicitud y lo pone a disposición en la propiedad req.body.
app.use(express.json());
// Un middleware que analiza el cuerpo de la solicitud y lo pone a disposición en la propiedad req.body.
app.use(bodyParser.json());
// Un middleware que permite al servidor aceptar solicitudes de diferentes orígenes.
app.use(cors());
// Un middleware que registra las solicitudes a la consola.
app.use(morgan("dev"));

//Se usan los endPoint
app.use("/validate", endpointValidateUser);
app.use("/progress", endpointAddProgress);
app.use("/modules", endpointModules);

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
