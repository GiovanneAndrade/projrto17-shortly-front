import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Headers } from "../../components/Headers";
import { Logo } from "../logo/Logo";
import { Containner } from "../register/Register";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteUrls, getUserMe, postShorten } from "../../servers/UserServices";
import { AuthContext } from "../../providers/Auth";
export const Links = () => {
  const { token, setToken, user, setUser } = React.useContext(AuthContext);
  const [link, setlink] = useState("");
  const navigate = useNavigate();
  let { name, shortenedUrls } = user;

  console.log(shortenedUrls);
  const shorten = {
    url: link,
  };
  const config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  function handleForm(e) {
    e.preventDefault();
    const userShorten = postShorten(shorten, config);
    userShorten
      .then((response) => {
        const { shortUrl } = response.data;
        console.log(shortUrl);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    const ALLUserMe = getUserMe(config);
    ALLUserMe.then((response) => {
      setUser(response.data);
    }).catch(() => {
      console.log("error");
    });
  }, []);
  function handleDelete() {
    /*  const deleteShorten = deleteUrls(id, config);
    deleteShorten
      .then((response) => {
        console.log("ok");
      })
      .catch((error) => {
        console.log(error);
      }); */
  }

  return (
    <>
      <Headers
        cadastrar={"home"}
        entrar={"ranking"}
        ranking={"sair"}
        welcome={`Seja bem-vindo(a), ${name}!`}
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
        {shortenedUrls?.map((i) => (
          <AllLinks>
            <div className="information">
              <p>{i.url}</p>
              <p>{i.shortUrl}</p>
              <p>Quantidade de visitantes: {i.visitCount}</p>
            </div>
            <div className="deleteLinks">
              <RiDeleteBin5Fill
                onClick={function () {
                  let id = i.id;
                  id = String(id);
                  const deleteShorten = deleteUrls(id, config);
                  deleteShorten
                    .then((response) => {
                      console.log("ok");
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
                className="delete"
              />
            </div>
          </AllLinks>
        ))}
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
