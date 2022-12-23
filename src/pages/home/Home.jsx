import React from "react";
import { Headers } from "../../components/Headers";
import { Logo } from "../logo/Logo";
import { Ranking } from "../ranking/Ranking";
import styled from "styled-components";
export const Home = () => {
  const tokenValidation = true;
  let welcome;
  let cadastrar;
  let entrar;
  let ranking;
  cadastrar = tokenValidation ? "home" : "cadastrar";
  entrar = tokenValidation ? "ranking" : "entrar";
  ranking = tokenValidation ? "sair" : null;
  welcome = tokenValidation ? "Seja bem-vindo(a), Pessoa!" : null;
  const link = !tokenValidation ?null:'ranking'
  return (
    <>
      <Headers
        welcome={welcome}
        cadastrar={cadastrar}
        entrar={entrar}
        ranking={ranking}
        link={link}
      />
      <Containner>
        <Logo />
        <Ranking />
        {tokenValidation ? null : (
          <h1>Crie sua conta para usar nosso serviço!</h1>
        )}
      </Containner>
    </>
  );
};

export const Containner = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  h1 {
    margin-top: 40px;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
  }
`;
