import React from "react";
import { LoaderContainer, LoadingSpinner } from "./Loader.styled";

function Loader() {
  return (
    <LoaderContainer>
      <LoadingSpinner />
    </LoaderContainer>
  );
}

export default Loader;
