import axios from "axios";

export async function progressInDB(email, idModule, idTheme) {
  try {
    const response = await axios.get(
      "http://localhost:3000/validate/student/id",
      {
        params: { email },
      }
    );
    console.log(response.data);
    /* Desestructurando el objeto response.data y asignando la propiedad idStudent a la variable idStudent. */
    const { idStudent } = response.data;
    try {
      const response = await axios.get(
        "http://localhost:3000/progress/progress",
        { params: { idStudent, idModule, idTheme } }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
      try {
        console.log(idStudent, idModule, idTheme);
        const response = await axios.post(
          `http://localhost:3000/progress/progress?idStudent=${idStudent}&idModule=${idModule}&idTheme=${idTheme}`
        );

        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  } catch (error) {
    console.error(error);
  }
}
