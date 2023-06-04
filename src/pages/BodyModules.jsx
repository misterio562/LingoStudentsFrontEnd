import React, { useEffect, useState } from "react";
import {Frutas} from "./Modules/Module1/Frutas";
import { Colores } from "./Modules/Module1/Colores";
import { Numeros } from "./Modules/Module1/Numeros1al10";
import "./Modules/css/bodyModules.css";
import { Animals } from "./Modules/Module2/Animals";
import { PartesDelCuerpo } from "./Modules/Module2/PartesDelCuerpo";
import { PartesDeLaCasa } from "./Modules/Module2/PartesDeLaCasa";

function ShowThemes(props) {
  const [pagina, setPagina] = useState(props.moduleState);

  console.log(props.moduleState);
  console.log("El estado es: ", pagina);

  useEffect(() => {
    setPagina(props.moduleState);
  }, [props.moduleState]);

  console.log("El estado es: ", pagina);

  return (
    <>
      {pagina === null && <Colores />}
      {pagina === "Colores" && <Colores />}
      {pagina === "Numeros del 1 al 10" && <Numeros />}
      {pagina === "Frutas" && <Frutas />}
      {pagina === "Animales" && <Animals />}
      {pagina === "Partes del Cuerpo" && <PartesDelCuerpo />}
      {pagina === "Partes de la Casa" && <PartesDeLaCasa />}
    </>
  );
}

export default ShowThemes;
