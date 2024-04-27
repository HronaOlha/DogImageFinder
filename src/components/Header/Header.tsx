import React from "react";
import { Container, Logo } from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <Logo src="https://dog.ceo/img/dog-api-logo.svg" alt="Imran Dog App" />
      <h1>Dog Image Finder App</h1>
    </Container>
  );
};

export default Header;
