import React, { useEffect, useState } from "react";
import { getRanking, getUserMe } from "../servers/UserServices";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [token, setToken] = useState("");
  const [ranking, setRanking] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const ALLRanking = getRanking();
    ALLRanking.then((response) => {
      setRanking(response.data);
    }).catch(() => {
      console.log("error");
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ranking,
        token,
        setToken,
        user,
        setUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
