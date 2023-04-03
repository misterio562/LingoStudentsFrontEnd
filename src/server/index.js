import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

import { PORT } from "./config.js";

import endpointValidateUser from "./routes/endpointValidateUser.js";
import endpointAddProgress from "./routes/endpointProgress.js";
import endpointModules from "./routes/endpointModules.js";
import endpointStudents from './routes/endpointStudent.js'

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
app.use("/student", endpointStudents)

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
