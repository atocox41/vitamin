import React from 'react';
import styled from "styled-components";

function ThankYou() {
  return (
    <ContainerDiv>
        <Wrapper>
            <Wrapper1>
                <Thankyou>Thank you !</Thankyou>
                {/* <DescP>Thanks for subscribing to our news letter.  </DescP> */}
                <DescP>One of our team members will follow up with you as soon as possible.</DescP>
                <ButtonWrapper>
                    <BackHome href="/">
                        go home
                    </BackHome>
                </ButtonWrapper>
            </Wrapper1>
            {/* <div className="footer-like">
                <p>Email not received?
                    <a href="#">Click here to send again</a>
                </p>
            </div> */}
        </Wrapper>
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
    padding: 100px 20px;    
    min-height: calc(100vh - 90px);
    @media (min-width:600px){
        max-width:1000px;
        margin:0 auto;
    }
`
const Wrapper = styled.div`
    width:100%;
    height:100vh;
    display: flex;
    flex-direction: column;
    @media (min-width:600px){
        height: initial;
        max-width:620px;
        margin:0 auto;
        margin-top:50px;
        box-shadow: 4px 8px 40px 8px rgba(88, 146, 255, 0.2);
    }
`
const Wrapper1 = styled.div`
    padding :30px;
    text-align:center;
`
const Thankyou = styled.h1`
    font-family: 'Kaushan Script', cursive;
    font-size:4em;
    letter-spacing:3px;
    color:#5892FF ;
    margin:0;
    margin-bottom:20px;
    @media (min-width:360px){
        font-size:4.5em;
    }
`
const DescP = styled.p`
    margin-bottom: 10px;
    font-size:1.3em;
    color:#aaa;
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing:1px;
`
const ButtonWrapper = styled.div`
    margin-top: 30px;
`

const BackHome = styled.a`
    color:#fff;
    background:#5892FF;
    border:none;
    padding:10px 50px;
    margin:30px 0;
    border-radius:30px;
    text-transform:capitalize;
    box-shadow: 0 10px 16px 1px rgba(174, 199, 251, 1);
    @media (min-width:360px){
        margin-bottom:20px;
    }
`

export default ThankYou;