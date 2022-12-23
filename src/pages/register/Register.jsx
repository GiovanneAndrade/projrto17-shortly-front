import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Headers } from "../../components/Headers";
import { Logo } from "../logo/Logo";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { postSignup } from "../../servers/UserServices";
export const Register = ({ type }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const signup = {
    name: nome,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };
  function handleForm(e ) {
    e.preventDefault();
    const register = postSignup(signup);
    register.then((response) => {
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  }
 

  return (
    <>
      <Headers cadastrar={"cadastrar"} entrar={"entrar"} link={"link"} />
      <Logo />
      <Containner onSubmit={handleForm}>
        <input
          type="text"
          placeholder="nome"
          required
          onChange={(e) => setNome(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="corfirme senha"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button text={"Criar Conta"} type="submit" />
      </Containner>
    </>
  );
};

export const Containner = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 67px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  input {
    box-sizing: border-box;
    padding: 20px;
    width: 700px;
    height: 63px;
    background: #ffffff;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
  }
  ${(props) => {
    if (props.type === true) {
      return `
        flex-direction: row;
        gap: 69px;
      `;
    }
  }}
`;
