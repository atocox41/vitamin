import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper id="home" className="">
      <div className="textCenter">
        <BannerText>TALK TO AN EXPERT</BannerText>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 600px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const BannerText = styled.h1`
  padding: 200px 0;
  text-align: center;
  font-size: 72px;
  font-weight: 700;
  color: #fff
`;


