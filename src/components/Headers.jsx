import React from "react";

import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
export const Headers = ({ entrar, cadastrar, ranking, welcome, link }) => {
  const navigate = useNavigate();
  function handle() {
    if (cadastrar === "home") {
      navigate("/link");
    }
    if (cadastrar === "cadastrar") {
      navigate("/register");
    }
  }
  function handleEntrar() {
    if (entrar === "ranking") {
      navigate("/");
    }
    if (entrar === "entrar") {
      navigate("/login");
    }
  }
  function handleSair() {
    if (entrar === "ranking") {
      alert("em breve");
    }
  }

  return (
    <Containner link={link}>
      <div>
        <p className="welcome">{welcome}</p>

        <p onClick={handle} className="cadastrar">
          {cadastrar}
        </p>

        <p onClick={handleEntrar} className="entrar">
          {entrar}
        </p>

        <p onClick={handleSair} className="ranking">
          {ranking}
        </p>
      </div>
    </Containner>
  );
};

export const Containner = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  div {
    padding-right: 500px;
    display: flex;
    gap: 20px;
  }
  .entrar {
    color: #9c9c9c;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
    ${(props) => {
      if (props.link === "entrar" || props.link === "ranking") {
        return `
        color: #5d9040;
      `;
      }
    }}
  }
  .ranking {
    color: #9c9c9c;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
  }
  .cadastrar {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #9c9c9c;
    cursor: pointer;
    ${(props) => {
      if (props.link === true || props.link === "link") {
        return `
        color: #5d9040;
      `;
      }
    }}
  }
  .welcome {
    position: absolute;
    left: 0;
    margin-left: 500px;
    color: #5d9040;
  }
`;
