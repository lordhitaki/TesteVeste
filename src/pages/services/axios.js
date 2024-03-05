import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchImage = async (breedName) => { 
    try {
      const response = await axios.get(`https://dog.ceo/api/breed/${breedName}/images/random`); 
      return response.data;
    } catch (error) {
      console.error('Error fetching image data:', error);
      throw error;
    }
  };