import React, { useEffect, useState } from 'react';

import { fetchData, fetchImage } from '../../pages/services/axios';
import * as Styled from './styles';


function FSelect({onBreedSelect }) {
  const [data, setData] = useState(null);
  const [img, setImg] = useState(null);
  const [breed, setBreed] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const fetchedData = await fetchData();
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const selectBreed = async (event) => {
    const selectedBreed = event.target.value;
    setBreed(selectedBreed);
    await getImg(selectedBreed);
    if (img) {
      console.log(img);
      onBreedSelect(selectedBreed, img);
    }
  };
  
  const getImg = async (selectedBreed) => {
    try {
      if (selectedBreed) { 
        const fetchedData = await fetchImage(selectedBreed);
        setImg(fetchedData);
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    <Styled.Box>
      {img?.message ? ( <Styled.Img src={img?.message}/>):(  <Styled.Img src={''}/>)}
     
      <Styled.Label >Escolha uma raça:</Styled.Label>
      <select id="breeds" name="breeds" onChange={selectBreed} value={breed}>
        <option value={''}>  </option>
        {data?.message &&
          Object.keys(data.message).map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
      </select>
    </Styled.Box>
  );
}

export default FSelect;
