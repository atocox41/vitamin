import React, {Fragment, useState, useRef} from "react";
import styled from "styled-components";
import { Navigate  } from 'react-router-dom';
// Assets
import ContactImg1 from "../assets/img/8.jpg";
import emailjs from '@emailjs/browser';
import { ColorRing } from 'react-loader-spinner';

export default function Contact() {

  const form = useRef();
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

   
   emailjs.sendForm('service_w8qiwsk', 'template_51scj2c', form.current, 'qYhnZkrCzGsiua_9p')
      .then((result) => {
          setLoading(false);
          setRedirect(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      {redirect && (
        <Fragment>
          <Navigate to='/thankyou' />  
        </Fragment>
      )}   
        <Wrapper id="contact">
            <div className="lightBg">
                <div className="container">
                <HeaderInfo>
                    <h1 className="font40 extraBold">Let's get in touch</h1>
                </HeaderInfo>
                <div className="row" style={{ paddingBottom: "30px" }}>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <Form ref={form} onSubmit={sendEmail}>
                          <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                              <label className="font15 extraBold">Full Name:</label>
                              <input type="text" id="fname" name="fname" className="font20" required/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                              <label className="font15 extraBold">Last Name:</label>
                              <input type="text" id="lname" name="lname" className="font20" />
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <label className="font15 extraBold">Street Address:</label>
                              <input type="text" id="staddress1" name="staddress1" className="font20"/>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <label className="font15 extraBold">Street Address Line2:</label>
                              <input type="text" id="staddress2" name="staddress2" className="font20"/>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                              <label className="font15 extraBold">City:</label>
                              <input type="text" id="city" name="city" className="font20" required/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                              <label className="font15 extraBold">State/Province:</label>
                              <input type="text" id="province" name="province" className="font20" />
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <label className="font15 extraBold">Portal/Zip code:</label>
                              <input type="text" id="portal" name="portal" className="font20"/>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                              <label className="font15 extraBold">Phone Number:</label>
                              <input type="phone" id="phone" name="phone" className="font20" required/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                              <label className="font15 extraBold">Email:</label>
                              <input type="email" id="email" name="email" className="font20" required/>
                            </div>
                          </div>
                          
                          <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                              <label className="font15 extraBold">How did you hear about us?:</label>
                              <input type="text" id="link" name="link" className="font20" required/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                              <label className="font15 extraBold">Please Specify:</label>
                              <input type="text" id="spec" name="spec" className="font20" required/>
                            </div>
                          </div>
                          
                          <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <label className="font15 extraBold">Comment:</label>
                              <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20" />
                            </div>
                          </div>

                        <SumbitWrapper className="flex">
                            <ButtonInput type="submit" value="Send Message" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
                            {loading && (
                                <ColorRing   
                                  height="40"
                                  width="40"
                                  ariaLabel="blocks-loading"
                                  wrapperStyle={{}}
                                  wrapperClass="blocks-wrapper"
                                  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                  visible={true}
                                />
                              )} 
                        </SumbitWrapper>
                          
                      </Form>

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <ContactImg src={ContactImg1} alt="office" />
                    </div>
                </div>
                </div>
            </div>
        </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 40px 20px;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff !important;
  max-width: 150px !important;
  padding: 15px;
  outline: none;
  color: #fff;
  height: 43px !important;
  :hover {
    background-color: #580cd2;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImg = styled.img`
  radius6;
  width: 100%;
  height: 100%;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;