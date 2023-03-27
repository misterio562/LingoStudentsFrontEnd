import axios from "axios";

function showEmailInDB(email, displayName) {
  // Enviar el correo electrónico al servidor Node.js
  axios
    .get("http://localhost:3000/validate/student", { params: { email } })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      SaveStudentInDB(email, displayName);
      console.error(error);
    });
}

function SaveStudentInDB(email, displayName) {
  axios
    .post("http://localhost:3000/validate/student", { email, displayName } )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default showEmailInDB;
