import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";

// Assets
import ProjectImg1 from "../../assets/img/projects/1.jpg";
import ProjectImg2 from "../../assets/img/projects/2.jpg";
import ProjectImg3 from "../../assets/img/projects/3.jpg";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          {/* <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Projects</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo> */}
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Brand Control"
                text="Many brands do not have the expertise to conquer the Amazon marketplace. We establish and enforce policies to prevent over-saturation, ensure MAP compliance, and keep your brand presence unpolluted.
                "
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Content Management"
                text="Optimize search results and watch click-through rates skyrocket with quality content that drives consumers to purchase. We work with Amazon's premium support to clean up content and get your products to top-rate status."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Promotion and Sales"
                text="As one of the largest sellers on Amazon, we know how to build brands that truly `make it` on their platform. Our in-house marketing experts are primed to get your products seen and grow your sales to the next level."
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
