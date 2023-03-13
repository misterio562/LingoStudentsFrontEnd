import axios from "axios";
// const database = require('./conexiondb')
// const connection = database.openConnection()

// function logic(paramsCredentials) {
//     if(Object.keys(paramsCredentials).length > 0){
//         console.log("Hay datos para meter");
//         console.log("Tu nombre es: ",paramsCredentials.user.displayName)
//         const sql = "SELECT * FROM user WHERE email=?"
//         connection.query(sql,[paramsCredentials.user.email], (error, results) => {
//             if (error) throw error
//             if (results.length > 0) {
//                 console.log("Se encontró el email en la db");
//                 console.log(results);
//             }else{
//                 console.log("No se encuentra el email en la db");
//             }
//         })
//     }else{
//         console.log("No hay datos para meter");
//     }
// }

// exports.logic1 = logic()

// import { openConnection } from "./conexiondb";

// const connection = openConnection()

// function logic(paramsCredentials){
//     if(Object.keys(paramsCredentials).length > 0){
//         console.log("Hay datos para meter");
//         console.log("Tu nombre es: ",paramsCredentials.user.displayName)
//         const sql = "SELECT * FROM user WHERE email=?"
//         connection.query(sql,[paramsCredentials.user.email], (error, results) => {
//             if (error) throw error
//             if (results.length > 0) {
//                 console.log("Se encontró el email en la db");
//                 console.log(results);
//             }else{
//                 console.log("No se encuentra el email en la db");
//             }
//         })
//     }else{
//         console.log("No hay datos para meter");
//     }
// }

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
