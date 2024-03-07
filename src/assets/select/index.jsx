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
  };
  
  const getImg = async (selectedBreed) => {
    try {
      if (selectedBreed) { 
        const fetchedData = await fetchImage(selectedBreed);
        setImg(fetchedData);
        if (fetchedData && fetchedData.message) {
          onBreedSelect(selectedBreed, fetchedData.message);
        }
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    <Styled.Box>
      {img?.message ? ( <Styled.Img src={img?.message}/>):(  <Styled.Img src={'https://images.vexels.com/media/users/3/326719/isolated/preview/252ca06ceef8087626de5d2e189a2aeb-cachorro-de-desenho-animado-sentado.png'}/>)}
     
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
