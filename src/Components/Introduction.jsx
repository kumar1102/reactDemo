import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-image: url("https://www.arthmate.com/storage/blogs/2023-01-10-63bd5a480648c.png");
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SubHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: white;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: white;
`;

const BulletList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  color: white;
`;

const LinkButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const Introduction = () => {
  return (
    <Container>
      <Heading>Arthmare Finance</Heading>
      <hr />

      <Section>
        <SubHeading>EMBEDDED FINANCE AS A SERVICE</SubHeading>
        <Paragraph>
          Arthmate offers a complete suite of cloud-based financial services,
          enabling on-demand deployment of credit and lending technology for
          Fintechs, Digital Platforms and SME Anchors.
        </Paragraph>
        <Paragraph>
          <LinkButton to="/services/">Know more</LinkButton>
        </Paragraph>
      </Section>
      <hr />

      <Section>
        <SubHeading>Credit Cloud</SubHeading>
        <BulletList>
          <li>Microservices enabled plug-n-play API based lending stack</li>
          <li>Loan origination and loan management systems</li>
          <li>
            Value-added digital India-stack services such as Bureau, cKYC,
            PAN, Aadhar, AA based bank statement analyzer
          </li>
          <li>Enabling digital lending within a short time frame of 2 weeks</li>
        </BulletList>
      </Section>
      <hr />

      <Section>
        <SubHeading>Credit Exchange</SubHeading>
        <BulletList>
          <li>Comprehensive lending product suite</li>
          <li>Embedded loan sourcing</li>
          <li>In-house NBFC</li>
          <li>Co-lending with banks and NBFCs</li>
          <li>P2P lending</li>
        </BulletList>
      </Section>
      <hr />

      <Section>
        <SubHeading>Risk Engine</SubHeading>
        <BulletList>
          <li>Analytics-based risk scorecards</li>
          <li>Early warning system</li>
          <li>Cross-sell/Up-sell engine</li>
        </BulletList>
      </Section>
    </Container>
  );
};

export default Introduction;
