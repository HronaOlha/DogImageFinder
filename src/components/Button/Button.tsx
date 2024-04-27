import React from "react";
import { FetchButton, ResetButton } from "./Button.styled";
import { useDispatch } from "react-redux";
import { ERROR, IMAGE_RESULTS, RESET } from "../../redux/dogFinder";
import { fetchBreedImages, fetchSubBreedImages } from "../../lib/api";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

interface Props {
  setImages: React.Dispatch<React.SetStateAction<never[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Button = ({ setImages, setIsLoading }: Props) => {
  const dispatch = useDispatch();
  const dogStore = useSelector((state: RootState) => state.dogFinder);

  const dogStoreBreed = dogStore?.breed;
  const dogStoreSubBreed = dogStore?.subBreed;
  const dogStoreNumber = dogStore?.number;

  const handleImagesFetch = async () => {
    if (dogStoreBreed === "all") {
      dispatch(ERROR(true));
    }
    if (dogStoreBreed !== "all" && dogStoreSubBreed === "all") {
      await fetchBreedImages(dogStoreBreed, dogStoreNumber).then((data) => {
        if (data?.status === "success" && data?.message?.length) {
          setImages(data.message);
          setIsLoading(false);
          dispatch(IMAGE_RESULTS(data.message.length));
        }
      });
    }
    if (dogStoreBreed !== "all" && dogStoreSubBreed !== "all") {
      await fetchSubBreedImages(
        dogStoreBreed,
        dogStoreSubBreed,
        dogStoreNumber
      ).then((data) => {
        if (data?.status === "success" && data?.message?.length) {
          setImages(data.message);
          setIsLoading(false);
          dispatch(IMAGE_RESULTS(data.message.length));
        }
      });
    }
  };

  return (
    <>
      <FetchButton role="button" onClick={() => handleImagesFetch()}>
        Search Dogs
      </FetchButton>
      <ResetButton
        role="button"
        onClick={() => {
          dispatch(RESET());
        }}
      >
        Reset Search
      </ResetButton>
    </>
  );
};

export default Button;
