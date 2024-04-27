import { Dispatch } from "redux";

import {
  ALL_IMAGES,
  BREED,
  ERROR,
  NUMBER,
  SUB_BREED,
} from "../redux/dogFinder";
import { fetchAllBreedImg, fetchAllSubBreedImg } from "../lib/api";

export const renderBreed = async (breed: string, dispatch: Dispatch) => {
  dispatch(BREED(breed));
  dispatch(SUB_BREED("all"));
  dispatch(NUMBER("1"));
  dispatch(ERROR(false));

  await fetchAllBreedImg(breed).then((data) => {
    if (data?.status === "success" && data?.message?.length) {
      dispatch(ALL_IMAGES(data?.message?.length));
    }
  });
};
export const renderSubBreed = async (
  subBreed: string,
  dogStoreBreed: string,
  dispatch: Dispatch
) => {
  dispatch(SUB_BREED(subBreed));

  await fetchAllSubBreedImg(dogStoreBreed, subBreed).then((data) => {
    if (data?.status === "success" && data?.message?.length) {
      dispatch(ALL_IMAGES(data?.message?.length));
    }
  });
};
export const renderNumber = (number: string, dispatch: Dispatch) => {
  dispatch(NUMBER(number));
};
