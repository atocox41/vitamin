import React from "react";
import styled from "styled-components";

import ClientSlider from "../components/Elements/ClientSlider";
import TestimonialSlider from "../components/Elements/TestimonialSlider";
import Footer from "../components/Sections/Footer";

export default function Brands() {
  return (
    <>
        <Wrapper id="brands">
            <div className="whiteBg">
                <div className="container">
                    <h1 className="font40 extraBold textCenter">Industries we serve</h1>
                    <div className="row">
                        <BrandIcon className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <BrandSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="#f7cf4e" data-icon-name="li-pills"> <g id="1025255204"> <path d="M83.8,17.7c-2.4-4.2-6.9-6.8-11.7-6.8c-2.4,0-4.7,0.6-6.7,1.8L33.4,31.1c-6.4,3.7-8.7,12-4.9,18.5c1,1.7,2.4,3.2,4,4.3
                                        h-4.6c-7.4,0-13.5,6.1-13.5,13.5s6.1,13.5,13.5,13.5h36.8c7.4,0,13.5-6.1,13.5-13.5s-6.1-13.5-13.5-13.5H48.1l30.8-17.8
                                        C85.3,32.4,87.5,24.1,83.8,17.7z M16.9,67.4c0-6.1,5-11.1,11.1-11.1h17.2v22.1H27.9C21.8,78.4,16.9,73.5,16.9,67.4z M75.8,67.4
                                        c0,6.1-5,11-11,11H47.6V56.3h17.2C70.8,56.3,75.8,61.3,75.8,67.4z M30.6,48.4c-3-5.3-1.2-12,4-15.1l14.9-8.6l11.1,19.1l-14.9,8.6
                                        c-1.7,1-3.6,1.5-5.5,1.5C36.3,53.9,32.6,51.8,30.6,48.4z M77.6,34l-14.9,8.6L51.7,23.4l14.9-8.6c1.7-1,3.6-1.5,5.5-1.5
                                        c3.9,0,7.6,2.1,9.6,5.5C84.7,24.2,82.9,30.9,77.6,34z" id="1289528340"></path> 
                                <circle cx="27.9" cy="73.4" r="2.5" id="1658626661"></circle> 
                                <circle cx="21.5" cy="67.4" r="2.5" id="1711099989"></circle> 
                                <circle cx="34.2" cy="61.3" r="2.5" id="1801763425"></circle> 
                                <circle cx="40" cy="67.4" r="2.5" id="1374336412"></circle> 
                                <circle cx="34.2" cy="42.7" r="2.5" id="1023985646"></circle> 
                                <circle cx="40" cy="49" r="2.5" id="1990335304"></circle> 
                                <circle cx="40" cy="36.7" r="2.5" id="1766417725"></circle> 
                                <circle cx="52.5" cy="42.7" r="2.5" id="1509642458"></circle> 
                                </g> 
                            </BrandSVG>
                            <div className="font20 extraBold textCenter">Health</div>
                        </BrandIcon>

                        <BrandIcon className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <BrandSVG xmlns="http://www.w3.org/2000/svg" fill="#6f88fc" viewBox="0 0 100 100"  data-icon-name="li_wine_bottle"> 
                            <g id="1988282865"> 
                                <path d="M70,88.7H30V49.2c0-8.1,5-15.5,12.5-18.5V11.3h15v19.4C65,33.7,70,41,70,49.2V88.7z M32.5,86.2h35v-37
                                    c0-7.4-4.7-14-11.7-16.5L55,32.4V13.8H45v18.6l-0.8,0.3c-7,2.5-11.7,9.1-11.7,16.5V86.2z" id="1607355091">
                                </path> 
                            </g> 
                            </BrandSVG>
                            <div className="font20 extraBold textCenter">Beauty</div>
                        </BrandIcon>

                        <BrandIcon className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <BrandSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="#f7cf4e" data-icon-name="li_barbell"> 
                                <path d="M88.6,38H76.2V25.5h-15v24.9H38.8V25.5h-15V38H11.4v27.4h12.5v12.5h15V53h22.4v24.9h15V65.4h12.5V38H88.6z M13.8,62.9V40.5
                                h10v22.4H13.8z M36.3,75.4h-10v-10V38V28h10V75.4z M73.7,75.4h-10V28h10v10v27.4V75.4z M86.2,62.9h-10V40.5h10V62.9z" id="1796028149"></path> 
                            </BrandSVG>
                            <div className="font20 extraBold textCenter">Exercise</div>
                        </BrandIcon>
                    </div>

                    <div className="row">
                        <BrandIcon className="col-xs-12 col-sm-4 col-md-4 col-lg-4" >
                            <BrandSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"  fill="#6f88fc"    data-icon-name="general_jug_cleaning_fluid"> 
                                <title id="1805496459">new_icons</title> 
                                <path d="M32.32,56.46a1.16,1.16,0,0,1-.23-2.29c.26-.05,6.47-1.41,6.47-7.3a1.16,1.16,0,0,1,1.15-1.16h0a1.16,1.16,0,0,1,1.16,1.15c0,6.25-5.44,9-8.32,9.57Z" id="1144675328"></path> 
                                <path d="M47.34,56.46l-.23,0c-2.88-.58-8.32-3.33-8.32-9.57a1.16,1.16,0,0,1,1.16-1.16h0a1.16,1.16,0,0,1,1.16,1.16c0,5.94,6.2,7.25,6.47,7.3a1.16,1.16,0,0,1-.23,2.29Z" id="1335495006"></path> 
                                <path d="M39.71,65.26h0a1.16,1.16,0,0,1-1.16-1.16c0-5.93-6.2-7.25-6.47-7.3a1.16,1.16,0,1,1,.46-2.26c2.88.58,8.32,3.33,8.32,9.57A1.16,1.16,0,0,1,39.71,65.26Z" id="1382800272"></path> 
                                <path d="M39.94,65.26a1.16,1.16,0,0,1-1.16-1.16c0-6.25,5.44-9,8.32-9.57a1.16,1.16,0,0,1,.46,2.26c-.26.05-6.47,1.41-6.47,7.3A1.16,1.16,0,0,1,39.94,65.26Z" id="1144372984"></path> 
                                <path d="M48.93,67.84a1.16,1.16,0,0,1-.23-2.29c.18,0,4.57-1,4.57-5.14a1.16,1.16,0,0,1,1.15-1.16h0a1.16,1.16,0,0,1,1.16,1.15c0,4.84-4.2,7-6.43,7.41Z" id="1048648701"></path> 
                                <path d="M60.1,67.84l-.23,0c-2.22-.45-6.43-2.57-6.43-7.41a1.16,1.16,0,0,1,1.16-1.16h0a1.16,1.16,0,0,1,1.16,1.16c0,4.18,4.39,5.11,4.57,5.14a1.16,1.16,0,0,1-.23,2.29Z" id="1646716516"></path> 
                                <path d="M54.43,74.38h0a1.16,1.16,0,0,1-1.16-1.16c0-4.18-4.39-5.11-4.57-5.14a1.16,1.16,0,1,1,.46-2.27c2.22.45,6.43,2.57,6.43,7.41A1.16,1.16,0,0,1,54.43,74.38Z" id="1934715045"></path> 
                                <path d="M54.6,74.38a1.16,1.16,0,0,1-1.16-1.16c0-4.84,4.2-7,6.43-7.41a1.16,1.16,0,1,1,.46,2.27c-.18,0-4.57,1-4.57,5.14A1.16,1.16,0,0,1,54.6,74.38Z" id="1803731795"></path> 
                                <path d="M64.78,88.27H35.3A8.39,8.39,0,0,1,26.9,79.9V29.61c0-3.52,0-8.35,5.37-8.35H45.13c6.43,0,13.81,3.57,19.75,9.56S73.1,44,73.1,48.56V79.9A8.26,8.26,0,0,1,64.78,88.27ZM32.26,23.57c-2.61,0-3.06,1.51-3.06,6V79.9A6.08,6.08,0,0,0,35.3,86H64.78a6,6,0,0,0,6-6.05V48.56c0-4.1-2-10.49-7.56-16.11S51,23.57,45.13,23.57Z" id="1653024770"></path> 
                                <path d="M44.22,23.29h-15a1.16,1.16,0,0,1-1.16-1.16V12.89a1.16,1.16,0,0,1,1.16-1.16h15a1.16,1.16,0,0,1,1.16,1.16v9.24A1.16,1.16,0,0,1,44.22,23.29ZM30.36,21H43.07V14H30.36Z" id="1859926382"></path> 
                                <path d="M63.05,57.3a1.15,1.15,0,0,1-.51-.12,4.07,4.07,0,0,1-1.32-1c-3.62-3.91-11.89-16.32-14.5-21.76a1.15,1.15,0,0,1-.1-.65,1.16,1.16,0,0,1,.91-1.86,26.42,26.42,0,0,1,3.42.24H51c4.6.56,8.58,3.71,10.92,8.63s2.44,11.81,2.27,15.43a1.16,1.16,0,0,1-1.15,1.1Zm-13.82-23A146.7,146.7,0,0,0,62,53.5c0-3.49-.41-8.17-2.1-11.73-1.17-2.47-3.92-6.7-9.12-7.33h-.07C50.25,34.38,49.77,34.32,49.23,34.28Z" id="1572597966"></path> 
                                <path d="M32.38,23.29a1.16,1.16,0,0,1-1.16-1.16V13.76a1.16,1.16,0,1,1,2.31,0v8.38A1.16,1.16,0,0,1,32.38,23.29Z" id="1885217761"></path> 
                                <path d="M36.14,23A1.16,1.16,0,0,1,35,21.84V13.18a1.16,1.16,0,1,1,2.31,0v8.66A1.16,1.16,0,0,1,36.14,23Z" id="1788672437"></path> 
                                <path d="M40.47,23a1.16,1.16,0,0,1-1.16-1.16V13.18a1.16,1.16,0,0,1,2.31,0v8.66A1.16,1.16,0,0,1,40.47,23Z" id="1824292838"></path> 
                            </BrandSVG>
                            <div className="font20 extraBold textCenter">Home</div>
                        </BrandIcon>

                        <BrandIcon className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <BrandSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="#f7cf4e" data-icon-name="li-apple"> <path d="M62.5,30c-4,0-7.8,1.7-11.1,4.9C52.7,23.1,62.8,13.8,75,13.8v-2.5c-13.7,0-25,10.6-26.1,24c-3.3-3.4-7.3-5.2-11.4-5.2
                                    c-11,0-20,13.2-20,29.4s9,29.4,20,29.4c4.6,0,9-2.3,12.5-6.4c3.5,4.2,7.9,6.4,12.5,6.4c11,0,20-13.2,20-29.4S73.5,30,62.5,30z
                                    M62.5,86.2c-4.2,0-8.3-2.4-11.5-6.7l-1-1.4l-1,1.4c-3.2,4.3-7.3,6.7-11.5,6.7c-9.6,0-17.5-12-17.5-26.8s7.8-26.9,17.5-26.9
                                    c4.2,0,8.3,2.4,11.5,6.7l1,1.3l1-1.3c3.2-4.3,7.3-6.7,11.5-6.7c9.6,0,17.5,12.1,17.5,26.9S72.1,86.2,62.5,86.2z" id="1808687184"></path> 
                            </BrandSVG>
                            <div className="font20 extraBold textCenter">Grocery</div>
                        </BrandIcon>

                        <BrandIcon className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <BrandSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="#6f88fc" data-icon-name="li-basketball"> <path d="M50,10.9c-21.3,0-38.6,17.3-38.6,38.6S28.7,88.1,50,88.1s38.6-17.3,38.6-38.6C88.6,28.3,71.3,10.9,50,10.9z M70,48.3
                                c0.3-7.8,3.2-15.3,8.2-21.4c4.7,5.9,7.6,13.3,7.9,21.4H70z M86.1,50.8C85.8,59,82.8,66.5,78,72.4c-5-6.2-7.8-13.7-8-21.6
                                C70,50.8,86.1,50.8,86.1,50.8z M76.5,25.1c-5.5,6.6-8.7,14.7-9,23.3H51.2V13.5C61.2,13.8,70.2,18.2,76.5,25.1z M48.8,13.5v34.8H32.5
                                c-0.3-8.5-3.5-16.7-9-23.3C29.8,18.2,38.8,13.8,48.8,13.5z M13.9,48.3c0.3-8.1,3.2-15.5,7.9-21.4c5,6.1,7.8,13.6,8.2,21.4H13.9z
                                M30,50.8c-0.2,7.9-3,15.4-8,21.6c-4.9-5.9-7.8-13.4-8.1-21.6C13.9,50.8,30,50.8,30,50.8z M23.7,74.3c5.5-6.7,8.6-14.9,8.8-23.5
                                h16.3v34.8C38.9,85.3,30,81,23.7,74.3z M51.2,85.7V50.8h16.2c0.2,8.6,3.3,16.8,8.8,23.5C70,81,61.1,85.3,51.2,85.7z" id="1713200385"></path> 
                            </BrandSVG>
                            <div className="font20 extraBold textCenter">Sporting Goods</div>
                        </BrandIcon>
                    </div>

                    <div className="row">
                        <BrandIcon className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <BrandSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="#f7cf4e" data-icon-name="li-fish"> <g id="1664433894"> <circle cx="25.3" cy="49.9" r="2.5" id="1269565601"></circle> 
                                <path d="M88.3,36.2c-0.5-0.2-1-0.1-1.4,0.3L76.1,48c-5.6-8.8-14.5-14.8-24.6-16.8v-11c0-0.5-0.3-1-0.8-1.1c-0.5-0.2-1-0.1-1.4,0.2
                                        L37.2,31.1c-10.7,2-20.3,8.7-25.9,18.3L11,50l0.4,0.6c5.6,9.6,15.1,16.3,25.8,18.3l12.3,11.8c0.2,0.2,0.5,0.3,0.9,0.3
                                        c0.2,0,0.3,0,0.5-0.1c0.5-0.2,0.8-0.6,0.8-1.2V68.9c10-2,19-8.1,24.6-16.8l10.8,11.3c0.2,0.3,0.6,0.4,0.9,0.4c0.2,0,0.3,0,0.5-0.1
                                        c0.5-0.2,0.8-0.7,0.8-1.2V37.4C89,36.9,88.7,36.4,88.3,36.2z M49.1,23.1v7.6c-1.6-0.2-3.2-0.3-4.9-0.3c-0.9,0-1.9,0-2.8,0.1
                                        L49.1,23.1z M49.1,76.9l-7.7-7.4c0.9,0.1,1.9,0.1,2.8,0.1c1.6,0,3.3-0.1,4.9-0.3V76.9z M44.2,67.1c-12.3,0-23.9-6.5-30.3-17.1
                                        c6.4-10.6,18-17.1,30.3-17.1S68.1,39.4,74.5,50C68.1,60.6,56.5,67.1,44.2,67.1z M86.5,59.4L77.6,50l8.9-9.4V59.4z" id="1513586825"></path> 
                                </g> 
                            </BrandSVG>
                            <div className="font20 extraBold textCenter">Pet Supplies</div>
                        </BrandIcon>

                        <BrandIcon className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <BrandSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="#6f88fc" data-icon-name="li-target"> <path d="M74.6,39.7l15-15H75.3V10.5l-15,15V38l-6.1,6c-4.7-4.2-10.8-6.8-17.6-6.8c-14.4,0-26.2,11.7-26.2,26.2
                                c0,14.4,11.7,26.2,26.2,26.2s26.2-11.7,26.2-26.2c0-6.8-2.6-12.9-6.8-17.6l6.1-6.1C62.1,39.7,74.6,39.7,74.6,39.7z M83.5,27.2
                                l-10,10h-8.9l10-10H83.5z M62.8,26.5l10-10v8.9l-10,10C62.8,35.4,62.8,26.5,62.8,26.5z M60.3,63.3C60.3,76.4,49.7,87,36.7,87
                                C23.6,87,13,76.4,13,63.3s10.6-23.7,23.7-23.7c6.1,0,11.6,2.3,15.8,6.1l-7,7c-2.4-2-5.4-3.2-8.8-3.2c-7.6,0-13.7,6.1-13.7,13.7
                                s6.2,13.7,13.7,13.7s13.7-6.2,13.7-13.7c0-3.3-1.2-6.4-3.2-8.8l7-7C58,51.7,60.3,57.3,60.3,63.3z M37.3,61c-0.2-0.1-0.4-0.1-0.6-0.1
                                c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5c0-0.2-0.1-0.4-0.1-0.6l6.4-6.4c1.5,1.9,2.5,4.3,2.5,7
                                c0,6.2-5,11.2-11.2,11.2s-11.2-5-11.2-11.2s5-11.2,11.2-11.2c2.6,0,5,1,7,2.5L37.3,61z" id="1702549740"></path> 

                            </BrandSVG>
                            <div className="font20 extraBold textCenter">Toys & Games</div>
                        </BrandIcon>

                        <BrandIcon className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <BrandSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="#f7cf4e" data-icon-name="li-lemon"> <g id="1455899558"> <path d="M50,76.2c-14.4,0-27-7.7-31.1-18.7c-4.1,0.1-7.6-3.3-7.6-7.5s3.5-7.6,7.6-7.5C23,31.4,35.6,23.8,50,23.8s27,7.7,31.1,18.7
                                        c4.2-0.1,7.6,3.3,7.6,7.5s-3.4,7.6-7.6,7.5C77,68.6,64.4,76.2,50,76.2z M19.8,54.9c0.5,0,1,0.3,1.2,0.9c3.4,10.6,15.3,18,29.1,18
                                        s25.7-7.4,29.1-18c0.2-0.6,0.8-1,1.4-0.9c0.3,0,0.5,0.1,0.8,0.1c2.8,0,5-2.2,5-5s-2.2-5-5-5c-0.3,0-0.5,0-0.8,0.1
                                        c-0.6,0.1-1.2-0.3-1.4-0.9c-3.4-10.6-15.3-18-29.1-18s-25.7,7.4-29.1,18c-0.2,0.6-0.8,1-1.4,0.9C19.3,45,19,45,18.8,45
                                        c-2.8,0-5,2.2-5,5s2.2,5,5,5c0.3,0,0.5,0,0.8-0.1C19.6,54.9,19.7,54.9,19.8,54.9z" id="1184334948"></path> 
                                </g>  
                            </BrandSVG>
                            <div className="font20 extraBold textCenter">Baby</div>
                        </BrandIcon>
                    </div>

                    <HeaderInfo>
                        <h1 className="font40 extraBold">Brand We Serve</h1>
                        <p className="font18">
                            Amazon is one of the most important opportunities available to brands today. 
                            <br />
                            here are some of the brands we work with
                        </p>
                    </HeaderInfo>
                    <div className="whiteBg" style={{ padding: "50px 0" }}>
                        <div className="container">
                            <ClientSlider />
                        </div>
                    </div>

                    {/* <BrandContact>
                        <StartButton className="font20" href="/contact">
                            Partner With Us
                        </StartButton>
                        <div className="marginTop50">
                            <TestimonialSlider />
                        </div>
                    </BrandContact> */}
                </div>
            </div>
        </Wrapper>
        <Footer />
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
  margin-top: 60px;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin: 50px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const BrandIcon = styled.div`
  width: 55px;
  height: 55px;
  margin: 40px 0;
`
const BrandSVG = styled.svg`
 width: 100%;
 height: 100%;
`

const BrandContact = styled.div`
  text-align: center;
  margin: 50px 0;
  padding: 40px 0;
  padding-bottom: 40px;
`
const StartButton = styled.a`
  border: 1px solid #7620ff;
  border-radius: 15px;
  background-color: #7620ff;
  padding: 15px 35px;
  margin: 30px 0;
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


