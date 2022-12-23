import React from "react";
import { Headers } from "../../components/Headers";
import { Logo } from "../logo/Logo";
import { Ranking } from "../ranking/Ranking";
import styled from "styled-components";
import { AuthContext } from "../../providers/Auth";
export const Home = () => {
  const { token, setToken,user } = React.useContext(AuthContext);
  let { name, shortenedUrls } = user;
  name= !name ? 'pessoa':name
  let welcome;
  let cadastrar;
  let entrar;
  let ranking;
  cadastrar = token ? "home" : "cadastrar";
  entrar = token ? "ranking" : "entrar";
  ranking = token ? "sair" : null;
  welcome = token ?` Seja bem-vindo(a), ${name}!` : null;
  const link = !token ? null : "ranking";
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
        {token ? null : <h1>Crie sua conta para usar nosso serviço!</h1>}
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
