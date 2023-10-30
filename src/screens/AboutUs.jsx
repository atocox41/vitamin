import React from "react";
import styled from "styled-components";

// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import AboutUsImg from "../assets/img/aboutus.jpg"

export default function AboutUs() {
  return (
    <>
      <TopNavbar />
        <Wrapper id="aboutus">
            <div className="whiteBg">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <HeaderInfo>
                                <h1 className="font40 extraBold">A Partner You Can Trust</h1>
                                <p className="font18">
                                    IDealVitamins has earned a remarkable reputation for being a truly exceptional partner in the world of  business. Our commitment to building and nurturing great relationships with all our vendors is at the heart of our success. This, coupled with our unwavering dedication to delivering top-notch service, ensures that we provide a premium customer experience that not only benefits you but also extends to your valued customers.

                                    At IDealVitamins, we understand that our success is directly tied to your success. Our business model is structured in such a way that we only see a return on investment when we successfully market and sell your products. Therefore, your achievements are not just a goal but an essential part of our overall profitability. 
                                </p>
                                <StartDiv className="font18">
                                    Let's seal the deal and move forward!
                                </StartDiv>
                                <StartButton className="font15" href="/contact">
                                    Get Started
                                </StartButton>
                            </HeaderInfo>
                                
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <ImgTag src={AboutUsImg} alt="aboutus"/>
                        </div>
                    </div>

                </div>
            </div>
        </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 100px 20px;
`;

const HeaderInfo = styled.div`
  text-align: left;
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const StartDiv = styled.div`
  margin: 20px 0;
`
const StartButton = styled.a`
  border: 1px solid #7620ff;
  border-radius: 15px;
  background-color: #7620ff;
  padding: 15px;
  outline: none;
  color: #fff;
  cursor: pointer;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`
const ImgTag = styled.img`
  height: 100%;
`