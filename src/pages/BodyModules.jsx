import React, { useEffect, useState } from "react";
import { Colores, Frutas, Numeros } from "./Modules/Module1";
import { Animales, PartesDeLaCasa, PartesDelCuerpo } from "./Modules/Module2";
import Module3 from "./Modules/Module3";
import "./Modules/css/bodyModules.css";

function Prueba(props) {
  const [pagina, setPagina] = useState(props.moduleState);

  console.log(props.moduleState);
  console.log("El estado es: ", pagina);

  useEffect(() => {
    setPagina(props.moduleState);
  }, [props.moduleState]);

  console.log("El estado es: ", pagina);

  return (
    <>
      {pagina === "Colores" && <Colores />}
      {pagina === "Numeros del 1 al 10" && <Numeros />}
      {pagina === "Frutas" && <Frutas />}
      {pagina === "Animales" && <Animales/>}
      {pagina === "Partes del Cuerpo" && <PartesDelCuerpo />}
      {pagina === "Partes de la Casa" && <PartesDeLaCasa />}
    </>
  );
}

export default Prueba;
