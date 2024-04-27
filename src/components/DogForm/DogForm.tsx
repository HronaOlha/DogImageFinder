import React from "react";
import { useDispatch } from "react-redux";

import { DogFormContainer } from "./DogForm.styled";
import Dropdown from "./DropDown/DropDown";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { BreedsType } from "../../types/breeds";
import Button from "../Button/Button";
import {
  renderBreed,
  renderNumber,
  renderSubBreed,
} from "../../helpers/helpers";
// import { Select } from "./DropDown/DropDown.styled";

interface Props {
  breedList: BreedsType;
  subBreedList: string[];
  setImages: React.Dispatch<React.SetStateAction<never[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const DogForm = ({
  breedList,
  subBreedList,
  setImages,
  setIsLoading,
}: Props) => {
  const dispatch = useDispatch();
  const dogStore = useSelector((state: RootState) => state.dogFinder);

  const dogStoreBreed = dogStore?.breed;
  const dogStoreSubBreed = dogStore?.subBreed;
  const dogStoreNumber = dogStore?.number;
  const dogStoreError = dogStore?.error;
  const dogStoreAllImg = dogStore?.allImages;

  return (
    <DogFormContainer>
      <Dropdown title="Select a Breed" showError={dogStoreError}>
        <select
          className={dogStoreError ? "error" : ""}
          onChange={(e) => renderBreed(e.target.value, dispatch)}
          value={dogStoreBreed}
        >
          <option value="all">Select breeds</option>
          {breedList &&
            Object.keys(breedList)?.map((breed, index) => (
              <option key={index} value={breed}>
                {breed}
              </option>
            ))}
        </select>
      </Dropdown>
      {subBreedList?.length ? (
        <Dropdown title="Select a Sub Breed">
          <select
            onChange={(e) =>
              renderSubBreed(e.target.value, dogStoreBreed, dispatch)
            }
            value={dogStoreSubBreed}
          >
            <option value="all">Select sub breeds</option>
            {subBreedList?.length &&
              subBreedList?.map((subbreed: string, index: number) => (
                <option key={index} value={subbreed}>
                  {subbreed}
                </option>
              ))}
          </select>
        </Dropdown>
      ) : null}
      <Dropdown title="Select Number of Images">
        <select
          onChange={(e) => renderNumber(e.target.value, dispatch)}
          value={dogStoreNumber}
        >
          <option value="all">Select number of images</option>

          {Array.from({ length: dogStoreAllImg }, (_, index) => (
            <option value={index + 1} key={index}>
              {index + 1}
            </option>
          ))}
        </select>
      </Dropdown>

      <Button setImages={setImages} setIsLoading={setIsLoading} />
    </DogFormContainer>
  );
};

export default DogForm;
