import PerScholasLogo from "./PerScholasLogo";

import styled from "styled-components";

const Title = styled.h1`
  font-size: 3em;
  color: #009cdb;
  text-align: center;
  font-family: Arial;
`;

const TextContent = styled.p`
  font-size: 1em;
  color: #434343;
  text-align: center;
  font-family: Arial;
`;


export default function Gallery() {
  return (
    <>
      <Title>Per Scholas</Title>
      <PerScholasLogo />
      <PerScholasLogo />
      <PerScholasLogo />
      <TextContent>React!</TextContent>
    </>
  );
}
