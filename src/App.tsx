import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { fetchDogData, fetchDogsSubBreed } from "./lib/api";
import { RootState } from "./redux/store";

import Loader from "./components/Loader";
import Header from "./components/Header";
import DogForm from "./components/DogForm";

import { AppBody, Container, Description } from "./Styles/styled";
import Results from "./components/Results";

function App() {
  const [breedList, setBreedList] = useState(null);
  const [subBreedList, setSubBreedList] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dogStore = useSelector((state: RootState) => state.dogFinder);
  const dogStoreBreed = dogStore.breed;
  const dogStoreImageResults = dogStore.imageResults;

  const fetchData = useCallback(async () => {
    await fetchDogData()
      .then((data) => {
        setBreedList(data?.message);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });

    if (dogStoreBreed !== "all") {
      await fetchDogsSubBreed(dogStoreBreed)
        .then((data) => {
          setSubBreedList(data?.message);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [dogStoreBreed]);

  useEffect(() => {
    fetchData();
  }, [dogStoreBreed, fetchData]);

  if (isLoading) return <Loader />;
  if (!breedList) return <p>No Dogs Found</p>;

  return (
    <Container>
      <Header />
      <h1>Dog app</h1>
      <Description>
        <ul>
          This is a Dog App built with React JS Using the Dog API. The app uses:
          <li>ReactJS & TypeScript</li>
          <li>Redux for State Management</li>
          <li>Axios for fetching Data</li>
          <li>Styled Components</li>
        </ul>
      </Description>
      <AppBody>
        <DogForm
          breedList={breedList}
          subBreedList={subBreedList}
          setImages={setImages}
          setIsLoading={setIsLoading}
        />
        {dogStoreImageResults > 0 && <Results images={images} />}
      </AppBody>
    </Container>
  );
}

export default App;
