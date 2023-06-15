import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
background-image: url("https://www.arthmate.com/storage/homecontent/2022-11-18-6377630085056.png");
  background-size: cover;
  background-position: center;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
  color: white;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 10px;
`;

const ContactLink = styled.a`
  display: block;
  text-align: center;
  font-size: 16px;
  color: white;
  text-decoration: none;
  margin-top: 20px;
`;



const About = () => {
  return (
    <AboutContainer  >
      <Heading>About Us</Heading>
      <Paragraph >
        Arthmate is India's premier embedded fintech platform leveraging
        technology to provide on-demand seamless deployment of credit across
        fintechs, digital platforms and SME anchors. With our at-scale credit
        exchange platform, we strive to transform digital lending through
        proprietary tech and advanced analytics solutions.
      </Paragraph>      
      <hr></hr>
      <div className="journey-slide" style={{ position: "middle", bottom: 20, left: 100, width: "100%" }} >
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="journey-content">
          <h1 className="common-title text-center mb-5" style={{color:'white'}}>Our Journey</h1>
          {/* <h1 className="common-heading before-effect">
          </h1> */}
          <div className="journey-img1">
            <img src="https://www.arthmate.com/storage/homecontent/2023-01-06-63b80ebec878f.png" alt="Responsive image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<hr></hr>

<div style={{ background: "#ffffff20", paddingTop: "30px" }}>
      <div className="container text-center" style={{ paddingBottom: "13px" ,color:"#FFFFFF"}}>
        {/* Footer links */}
        <div className="row text-center text-md-left mt-3 pb-3">
          {/* Grid column */}
          <div className="col-md-4 justify-content-start align-items-center footer-web-logo" >
            <a className="d-inline-block mt-n1" href="https://www.arthmate.com" style={{color:'white'}}>
              <b style={{ fontSize: "larger" ,color:'white'}}>Arthmatetech Private Limited</b>
            </a>
            <h6>
              <b>Registered Office:</b>
            </h6>
            <p>
              EM 03, Bengal Eco Intelligent Park, 11th Floor,
              <br />
              Unit 11 D1&amp;D2, Salt Lake,
              Kolkata 700091
            </p>

            <h6>
              <b>Corporate Offices:</b>
            </h6>
            <span className="floctn">Gurugram</span>
            <p>
              The Circle, 3rd Floor, Huda City Centre Metro station,
              <br />
              Sector 29, Gurugram, Haryana 122002
            </p>

            <span className="floctn">Mumbai</span>
            <p>
              3rd Floor, South Side Annexe, Tower 2B,
              <br />
              Redbricks offices, One World Center, Prabhadevi, Mumbai
            </p>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-5 footer-padding-bottom" >
                <h6 className="text-uppercase mb-4 font-weight-bold footer-heder">Arthmate For Partners</h6>
                <ul className="widget-list" style={{ paddingBottom: "10px", color:'white'}}>
                  <li className="widget-list-item">
                    <a href="/partners#one-tab1" className="widget-list-link" style={{color:'white'}}>Arthmate for Digital Platforms</a>
                  </li>
                  <li className="widget-list-item">
                    <a href="/partners#one-tab2" className="widget-list-link"style={{color:'white'}}>Arthmate for SME Anchors</a>
                  </li>
                  <li className="widget-list-item">
                    <a href="/partners#one-tab3" className="widget-list-link"style={{color:'white'}}>Arthmate for Banks &amp; NBFCs</a>
                  </li>
                  <li className="widget-list-item">
                    <a href="/partners#one-tab4" className="widget-list-link"style={{color:'white'}}>Arthmate for Fintechs</a>
                  </li>
                  <li className="widget-list-item">
                    <a href="/partners#one-tab5" className="widget-list-link"style={{color:'white'}}>Arthmate for Auto OEM/Dealers</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 footer-padding-bottom" style={{}}>
                <h6 className="text-uppercase mb-4 font-weight-bold footer-heder">Company</h6>
                <ul className="widget-list" style={{ paddingBottom: "10px" }}>
                  <li className="widget-list-item">
                    <a href="/about-us" className="widget-list-link"style={{color:'white'}}>About Us</a>
                  </li>
                  <li className="widget-list-item">
                    <a href="/careers" className="widget-list-link"style={{color:'white'}}>Careers</a>
                  </li>
                  <li className="widget-list-item">
                    <a href="/helpTopic" className="widget-list-link"style={{color:'white'}}>Terms &amp; Policies</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 footer-padding-bottom">
                <h6 style={{ fontWeight: 700, fontSize: "14.3208px" }}>Help &amp; Support</h6>
                <a href="mailto:customercare@arthmate.com"style={{color:'white'}}>
                  <i style={{ display: "initial", paddingRight: "7px" }} className="fa fa-envelope" aria-hidden="true" />
                  customercare@arthmate.com
                </a>
                <a style={{ marginTop: "22px", display: "block" ,color:'white' }} href="tel:+917835009643">
                  <i className="fa fa-phone" aria-hidden="true" />
                  +91 7835009643
                </a>

                <h6 style={{ fontWeight: 700, fontSize: "14.3208px" ,color:'white'}}>Follow Us On</h6>
                <span className="social-media">
                  <a className="social-btn sb-light sb-linkedin mr-2 mb-2" target="_blank" href="https://www.linkedin.com/company/arthmate/" style={{ color: "white!important" }}>
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/* Grid column */}
        </div>
        {/* Footer links */}
      </div>
    </div>

    </AboutContainer>
  );
};

export default About;
