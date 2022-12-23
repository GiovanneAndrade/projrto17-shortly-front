import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Headers } from "../../components/Headers";
import { Logo } from "../logo/Logo";
import { Containner } from "../register/Register";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleForm(e) {
    e.preventDefault();
    navigate("/");
  }
  const register = {
    email: email,
    password: password,
  };
  console.log(register);
  return (
    <>
      <Headers cadastrar={"cadastrar"} entrar={"entrar"} link={'entrar'} />
      <Logo />
      <Containner onSubmit={handleForm}>
        <input
          type="email"
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="senha"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text={'Entrar'} type="submit" />
      </Containner>
    </>
  );
};
