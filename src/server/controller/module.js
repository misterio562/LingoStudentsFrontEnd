import axios from "axios";
import { getStudentIdByEmail } from "./student";

export const checkModuleCompleted = async (email, idModule) => {
  try {
    const idStudent = await getStudentIdByEmail(email);
    const response = await axios.get(
      "http://localhost:3000/progress/progress/modulecompleted",
      {
        params: {
          idStudent,
          idModule,
        },
      }
    );
    return response.status;
  } catch (error) {
    console.error("Error al consultar los modulos completados", error);
    throw error;
  }
};
