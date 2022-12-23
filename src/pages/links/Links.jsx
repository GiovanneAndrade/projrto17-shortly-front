import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Headers } from "../../components/Headers";
import { Logo } from "../logo/Logo";
import { Containner } from "../register/Register";
import { RiDeleteBin5Fill } from "react-icons/ri";
export const Links = () => {
  const [link, setlink] = useState("");
  const navigate = useNavigate();
  function handleForm(e) {
    e.preventDefault();
    navigate("/");
  }
  const register = {
    link: link,
  };
  return (
    <>
      <Headers
        cadastrar={"home"}
        entrar={"ranking"}
        ranking={"sair"}
        welcome={"Seja bem-vindo(a), Pessoa!"}
        link={true}
      />

      <Logo />
      <Containner type={true} onSubmit={handleForm}>
        <input
          type="text"
          placeholder="nome"
          required
          onChange={(e) => setlink(e.target.value)}
        />
        <Button text={"Encurtar link"} type="submit" />
      </Containner>
      <MyLinks>
        <AllLinks>
          <div className="information">
            <p>https://www.driven.com.br</p>
            <p>e4231A</p>
            <p>Quantidade de visitantes: 271</p>
          </div>
          <div className="deleteLinks">
            <RiDeleteBin5Fill className="delete" />
          </div>
        </AllLinks>
        <AllLinks>
          <div className="information">
            <p>https://www.driven.com.br</p>
            <p>e4231A</p>
            <p>Quantidade de visitantes: 271</p>
          </div>
          <div className="deleteLinks">
            <RiDeleteBin5Fill className="delete" />
          </div>
        </AllLinks>
        <AllLinks>
          <div className="information">
            <p>https://www.driven.com.br</p>
            <p>e4231A</p>
            <p>Quantidade de visitantes: 271</p>
          </div>
          <div className="deleteLinks">
            <RiDeleteBin5Fill className="delete" />
          </div>
        </AllLinks>
      </MyLinks>
    </>
  );
};

export const AllLinks = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  .information {
    width: 685px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px 0 20px;
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    gap: 50px;
    background: #80cc74;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 0px 0px 12px;
  }
  .deleteLinks {
    width: 182px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 0px 12px 12px 0px;
    border: 1px solid rgba(120, 177, 89, 0.25);
  }
  .delete {
    color: #ea4f4f;
    font-size: 35px;
    cursor: pointer;
  }
`;
export const MyLinks = styled.div`
  width: 100%;
  display: flex;
  margin-top: 57px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
