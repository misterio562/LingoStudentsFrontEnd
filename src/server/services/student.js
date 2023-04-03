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

/**
 * Hace una solicitud GET al servidor, pasa el correo electrónico como un parámetro de consulta y
 * devuelve los datos que el servidor devuelve
 * @param email - El correo electrónico del estudiante.
 * @returns Se devuelven los datos de respuesta.
 */
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
    .post(`${SERVER_URL}/validate/student`, { email, displayName })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error.response);
    });
};

/**
 * Hace una solicitud al servidor para obtener los datos del estudiante y devuelve un objeto Estudiante
 * con esos datos.
 * @returns Un objeto de estudiante
 */
export async function getStudentData() {
  try {
    const response = await axios.get(`${SERVER_URL}/validate/student`);
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
      `${SERVER_URL}/validate/student/id`,
      { params: { email } }
    );
    console.log(response.data);
    return response.data.idStudent;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Toma un idStudent y un displayName, y luego envía una solicitud PUT al servidor con idStudent y
 * displayName como el cuerpo de la solicitud.
 * @param idStudent - el id del estudiante a actualizar
 * @param displayName - El nombre del estudiante
 * @returns La respuesta del servidor.
 */
export async function updateStudent(idStudent, displayName) {
  try {
    const response = await axios.put(
      `${SERVER_URL}/student/studentupdate`,
      { idStudent, displayName }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default checkIfStudentExistsInDatabase;

