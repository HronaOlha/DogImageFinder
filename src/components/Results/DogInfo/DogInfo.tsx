import React from "react";
import { Container } from "./DogInfo.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const DogInfo = () => {
  const dogStore = useSelector((state: RootState) => state.dogFinder);

  const dogStoreBreed = dogStore?.breed;
  const dogStoreSubBreed = dogStore?.subBreed;
  const dogStoreImageResults = dogStore.imageResults;

  function capitalizeBreed(string: string) {
    return string.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  }

  const renderTitle = () => {
    if (
      dogStoreBreed !== "all" &&
      dogStoreSubBreed !== "all" &&
      dogStoreImageResults > 0
    )
      return (
        <span>
          {capitalizeBreed(dogStoreBreed)} - {capitalizeBreed(dogStoreSubBreed)}
        </span>
      );
    if (
      dogStoreBreed !== "all" &&
      dogStoreSubBreed === "all" &&
      dogStoreImageResults > 0
    )
      return <span>{capitalizeBreed(dogStoreBreed)}</span>;
    return null;
  };

  return (
    <Container>
      <>
        {renderTitle()}
        <p>{dogStoreImageResults} results</p>
      </>
    </Container>
  );
};

export default DogInfo;
