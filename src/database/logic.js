import axios from 'axios';
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

function showEmailInDB(email) {
  // Enviar el correo electrónico al servidor Node.js
  axios.get("http://localhost:5000/validate", { params: { email } })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default showEmailInDB;
