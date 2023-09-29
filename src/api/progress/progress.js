import axios from "axios";
import { apiURL } from "./../apiConfig";

/**
 * Obtiene el progreso de un alumno en un módulo y un tema, si no existe lo crea
 * @param idStudent - la identificación del estudiante
 * @param idModule - la identificación del módulo
 * @param idTheme - la identificación del tema
 */
export async function progressInDB(idStudent, idModule, idTheme) {
  try {
    const response = await axios.get(`${apiURL}/progress/progress`, {
      params: { idStudent, idModule, idTheme },
    });
    console.log(response);
  } catch (error) {
    console.error(error.response);
    try {
      const response = await axios.post(
        `${apiURL}/progress/progress?idStudent=${idStudent}&idModule=${idModule}&idTheme=${idTheme}`
      );

      console.log(response);
    } catch (error) {
      console.error(error.response);
    }
  }
}
