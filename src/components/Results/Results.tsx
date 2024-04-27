import React from "react";
import { Container } from "./Results.styled";
import DogInfo from "./DogInfo";
import Images from "./Images";

interface Props {
  images: string[];
}

const Results = ({ images }: Props) => {
  return (
    <Container>
      <h2>Gallery</h2>
      <DogInfo />
      <Images images={images} />
    </Container>
  );
};

export default Results;
