import axios from "axios";
import { SERVER_URL } from "../config";

/**
 * Envía el correo electrónico al servidor Node.js y, si el correo electrónico no está en la base de
 * datos, guarda el correo electrónico y el nombre para mostrar en la base de datos.
 * @param email - La dirección de correo electrónico del usuario.
 * @param displayName - El nombre para mostrar del usuario.
 */
export async function checkIfStudentExistsInDatabase(email, displayName) {
  try {
    const student = await getAllStudentDataByEmail(email);
    console.log(student);
  } catch (error) {
    console.error(error.response);
    SaveStudentInDB(email, displayName);
  }
}

export const getAllStudentDataByEmail = async (email) => {
  try {
    const response = await axios.get(`${SERVER_URL}/validate/student`, {
      params: { email },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error.response);
    throw error;
  }
};

/**
 * Recibe un correo electrónico y un displayName, y luego envía una solicitud POST al servidor con el
 * correo electrónico y un displayName como cuerpo.
 * @param email - La dirección de correo electrónico del usuario.
 * @param displayName - El nombre del usuario.
 */
const SaveStudentInDB = (email, displayName) => {
  axios
    .post("http://localhost:3000/validate/student", { email, displayName })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error.response);
    });
};

export async function getStudentData() {
  try {
    const response = await axios.get("http://localhost:3000/validate/student");
    const { id, name, email } = response.data;
    const student = new Student(id, name, email);
    return student;
  } catch (error) {
    console.error("Error al obtener los datos del estudiante", error);
    throw error;
  }
}



/**
 * Toma un correo electrónico como parámetro y devuelve la identificación del estudiante con ese correo
 * electrónico
 * @param email - el correo del estudiante
 * @returns La identificación del estudiante
 */
export async function getStudentIdByEmail(email) {
  try {
    const response = await axios.get(
      "http://localhost:3000/validate/student/id",
      { params: { email } }
    );
    console.log(response.data);
    return response.data.idStudent;
  } catch (error) {
    console.error(error);
  }
}

export default checkIfStudentExistsInDatabase;
