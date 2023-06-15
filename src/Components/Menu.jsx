import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: #0F2943;
  height: 100vh;
  color: #fff;
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px;
  &:hover {
    background-color: #cccc00;
  }
`;

export default function Menu() {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Items>Home</Items>
        </Link>
        <Link to="/team" style={{ textDecoration: "none", color: "inherit" }}>
          <Items>Teams</Items>
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
          <Items>About</Items>
        </Link>
      </Wrapper>
    </Container>
  );
}
