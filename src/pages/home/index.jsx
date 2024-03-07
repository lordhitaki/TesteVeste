import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import FSelect from '../../assets/select';
import Input from '../../assets/input';
import * as Styled from './styles';

function Home() {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [img, setImg] = useState()
  const [ inputValue, setInputValue] = useState({
    cor:'',
    tamanho:'',
    idade:'',
    apelido:'',
    img:img
  })
  const handleBreedSelect = (breed, img) => {
    setSelectedBreed(breed);
    setImg(img);
  };
  
  const handleSaveBreed = () => {
    const existingData = localStorage.getItem("SavedBreed");
    const minLetters = 1;
    let savedBreeds = [];
    if (
      inputValue.cor.length < minLetters ||
      inputValue.tamanho.length < minLetters ||
      inputValue.idade.length < minLetters ||
      inputValue.apelido.length < minLetters
    ) {
      alert(`Por favor, preencha todos os campos`);
      return; 
    }
    
    if (existingData) {
      savedBreeds = JSON.parse(existingData);
    }
    
    const newBreedData = {
      name: selectedBreed,
      cor: inputValue.cor,
      tamanho: inputValue.tamanho,
      apelido: inputValue.apelido,
      idade: inputValue.idade,
      img: img,
    };
  
    savedBreeds.push(newBreedData);
  
    localStorage.setItem("SavedBreed", JSON.stringify(savedBreeds));
    console.log(newBreedData)
    window.location.reload();
  };
  
  const handleInputChange = (key, value) => {
    setInputValue({
      ...inputValue,
      [key]: value
    });
  };

  return (
  <Styled.Container>
    
      <Styled.Body>
        <FSelect onBreedSelect={handleBreedSelect} />
        <Styled.Title>Veja lista de pets disponiveis <Link to="/list">Clique aqui</Link></Styled.Title>
        <Styled.BoxForm>
              <Styled.SubTitle>{selectedBreed}</Styled.SubTitle>
              <Styled.Text>Defina as informações para ele!</Styled.Text>
              <Input placeholder={'Cor'} onChange={(value) => handleInputChange('cor', value)} />
              <Input placeholder={'Tamanho'} onChange={(value) => handleInputChange('tamanho', value)} />
              <Input placeholder={'Idade'} onChange={(value) => handleInputChange('idade', value)} />
              <Styled.Message>Se a idade do pet for meses digitar 0!</Styled.Message>
              <Input placeholder={'Apelido'} onChange={(value) => handleInputChange('apelido', value)} />
              <Styled.Button onClick={() => handleSaveBreed()}>Salvar</Styled.Button>
        </Styled.BoxForm>
      </Styled.Body>
  </Styled.Container>
  );
}

export default Home;
