import axios from "axios";
import { getStudentIdByEmail } from "./student";

export async function progressInDB(idStudent,idModule, idTheme) {
  
    try {
      const response = await axios.get(
        "http://localhost:3000/progress/progress",
        { params: { idStudent, idModule, idTheme } }
      );
      console.log(response);
    } catch (error) {
      console.error(error.response);
      try {
        const response = await axios.post(
          `http://localhost:3000/progress/progress?idStudent=${idStudent}&idModule=${idModule}&idTheme=${idTheme}`
        );

        console.log(response);
      } catch (error) {
        console.error(error.response);
      }
    }
  
}
