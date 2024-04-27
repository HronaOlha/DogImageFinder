import React from "react";
import { Container, DropdownContainer, ErrorText } from "./DropDown.styled";

interface Props {
  showError?: boolean;
  title: string;
  children: React.ReactNode;
}

const Dropdown = ({ title, children, showError }: Props) => {
  return (
    <Container>
      <h5>{title}</h5>
      <DropdownContainer>{children}</DropdownContainer>
      {showError && <ErrorText>Please choose a breed above</ErrorText>}
    </Container>
  );
};

export default Dropdown;
