import React from "react";
import styled from "styled-components";
import SVG from "../assets/Wedges-2.5s-50px.svg";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;

const span = styled.span``;

export default () => (
  <Container>
    <span role="img" aria-label="Loading">
      <img src={SVG} className="App-loading" alt="loading" />
    </span>
  </Container>
);
