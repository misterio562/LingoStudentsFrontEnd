import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const url = "http://localhost:3001/register"

  const handleSubmit =  (event) => {
    event.preventDefault();

    try {
      const response = axios.post(url, {
        email,
        fullName,
        phone,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }


    // fetch("http://localhost:3001/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email,
    //     fullName,
    //     phone,
    //     password
    //   })
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    

    // event.preventDefault();
    // console.log(email, fullName, phone, password);

    // const response = await fetch('http://localhost:5174/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(Register)
    // });
    // console.log(await response.text());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Email"
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Nombre Completo"
          type="text"
          id="fullName"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Teléfono"
          type="tel"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Contraseña"
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Register;
