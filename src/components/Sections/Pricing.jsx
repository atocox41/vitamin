import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">GROWTH</h1>
            <p className="font18">
              All fees for marketing, advertising and building your brand on Amazon will come out of our budget with NO added expenses to your brand. 
              <br />
              We are 100% sure you will be happy with our business relationship and know that we can grow sales on Amazon substantially. 
            </p>
            <StartDiv className="font18">
              Let's seal the deal and move forward!
            </StartDiv>
            <StartButton className="font15">
              Get Started
            </StartButton>
          </HeaderInfo>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const StartDiv = styled.div`
  margin: 20px 0;
`
const StartButton = styled.button`
  border: 1px solid #7620ff;
  border-radius: 15px;
  background-color: #7620ff;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`



