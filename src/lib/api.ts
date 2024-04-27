import axios from "./axios";

// All dogs data

export const fetchDogData = async () => {
  try {
    const response = await axios.get("/breeds/list/all");
    return response?.data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    } else {
      console.log("unexpected error", err);
    }
  }
};

// Fetch all breed images https://dog.ceo/api/breed/hound/images

export const fetchAllBreedImg = async (breed: string) => {
  try {
    const response = await axios.get(`/breed/${breed}/images`);
    return response?.data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    } else {
      console.log("unexpected error", err);
    }
  }
};

// Fetch The Sub Breeds
export const fetchDogsSubBreed = async (breed: string) => {
  try {
    const response = await axios.get(`/breed/${breed}/list`);
    return response?.data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err, "error message");
    } else {
      console.log("unexpected error: ", err);
    }
  }
};

// Fetch all sub breed images https://dog.ceo/api/breed/hound/afghan/images

export const fetchAllSubBreedImg = async (breed: string, subBreed: string) => {
  try {
    const response = await axios.get(`/breed/${breed}/${subBreed}/images`);
    return response?.data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    } else {
      console.log("unexpected error", err);
    }
  }
};

// Fetch Breed Images
export const fetchBreedImages = async (breed: string, number: string) => {
  try {
    const response = await axios.get(`/breed/${breed}/images/random/${number}`);
    return response?.data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err, "error message");
    } else {
      console.log("unexpected error: ", err);
    }
  }
};

// Fetch Sub Breed Images
export const fetchSubBreedImages = async (
  breed: string,
  subBreed: string,
  number: string
) => {
  try {
    const response = await axios.get(
      `/breed/${breed}/${subBreed}/images/random/${number}`
    );
    return response?.data;
  } catch (err: any) {
    if (err instanceof Error) {
      console.log("error message: ", err.message);
    } else {
      console.log("unexpected error: ", err);
    }
  }
};
