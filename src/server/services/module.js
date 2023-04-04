import axios from "axios";
import { SERVER_URL } from "../config";

/**
 * Comprueba si un módulo ha sido completado por un estudiante
 * @param idStudent - la identificación del estudiante
 * @param idModule - la identificación del módulo
 * @returns El estado de la respuesta
 */
export const checkModuleCompleted = async (idStudent, idModule) => {
  try {
    const response = await axios.get(
      `${SERVER_URL}/progress/progress/modulecompleted`,
      {
        params: {
          idStudent,
          idModule,
        },
      }
    );
    return response.status; //devuelve solo el estado de la respuesta
  } catch (error) {
    console.error(error.response);
    console.error(error.status);

    throw error;
  }
};

/**
 * Esta función realiza una solicitud GET al servidor para obtener todos los módulos.
 * @returns Una matriz de objetos.
 */
export const getAllModules = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/modules/modules`);
    return response;
  } catch (error) {
    console.error.response;
  }
};
