import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Headers } from "../../components/Headers";
import { AuthContext } from "../../providers/Auth";
import { postSignin } from "../../servers/UserServices";
import { Logo } from "../logo/Logo";
import { Containner } from "../register/Register";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { token, setToken } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const signin = {
    email: email,
    password: password,
  };

  function handleForm(e) {
    e.preventDefault();

    const user = postSignin(signin);
    user.then((response) => {
        const { token } = response.data;
        setToken(token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Headers cadastrar={"cadastrar"} entrar={"entrar"} link={"entrar"} />
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
        <Button text={"Entrar"} type="submit" />
      </Containner>
    </>
  );
};
