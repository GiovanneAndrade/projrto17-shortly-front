import React from "react";
import styled from "styled-components";
import Img from "../../assets/ranking.png";
export const Ranking = () => {
  return (
    <>
      <Containner>
        <img src={Img} />
        Ranking
      </Containner>
      <RankingAll>
        <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
        <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
        <p>5. DEFINITIVAMENTE_NAO_E_UM_BOT - 12345252 links - 37.707 visualizações</p>
        <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
        <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
        <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
        
      </RankingAll>
    
    </>
  );
};

export const Containner = styled.div`
  margin-top: 27px;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  gap: 8px;
`;
export const RankingAll = styled.div`
  display: flex;
  justify-content: center;
  min-width: 850px;
  min-height: 200px;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px 24px 0px 0px;
  padding: 17px;
  gap: 13px;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #000;
`;
