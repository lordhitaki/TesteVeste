import React, { useState, useEffect } from 'react';

import { fetchData, fetchImage } from '../services/axios';
import Modal from '../../assets/modal';
import Input from '../../assets/input';
import * as Styled from './styles';
import Select from '../../assets/select';

function Home() {
  const [data, setData] = useState(null);

  // const [img, setImg] = useState()
  // const breedName = 'african'

  useEffect(() => {
    getData();
    // getImagem()
  }, []);


  const getData = async () => {
    try {
      const fetchedData = await fetchData();
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // const getImagem = async () => {
  //   try {
  //     const images = [];
  //     for (const i in data?.message) {
  //       const dataImg = await fetchImage(i);
  //       images.push(dataImg);
  //     }
  //     setImg(images);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  

 

  

  return (
    <Styled.Container>
     
      <Select/>
     
      
    </Styled.Container>
  );
}

export default Home;
