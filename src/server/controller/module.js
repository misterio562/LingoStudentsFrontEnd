import axios from "axios";

export const checkModuleCompleted = async (idStudent, idModule) => {
  try {
    const response = await axios.get(
      "http://localhost:3000/progress/progress/modulecompleted",
      {
        params: {
          idStudent,
          idModule,
        },
      }
    );
    return response.status; //devuelve solo el estado de la respuesta
  } catch (error) {
    console.error( error.response);
    console.error( error.status);
    throw error;
  }
};
