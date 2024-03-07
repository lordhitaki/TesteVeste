import React, { useState, useEffect } from 'react';
import * as Styled from './styles';
import FilterColor from '../../assets/filter/filterColors';
import FilterBreed from '../../assets/filter/filterBreed';
import FilterYears from '../../assets/filter/filterYears';

function normalizeColor(color) {
  return color.toLowerCase().trim();
}

function normalizeName(name) {
  return name.toLowerCase().trim();
}

function normalizeAge(age) {
  return age.toLowerCase().trim();
}

function List() {
  const [saved, setSaved] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedAge, setSelectedAge] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem("SavedBreed");
    if (savedData) {
      setSaved(JSON.parse(savedData));
    }
  }, []);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleBreedSelect = (breed) => {
    setSelectedBreed(breed);
  };

  const handleAgeSelect = (age) => {
    setSelectedAge(age);
  };

  const filteredPets = saved.filter(item => {
    const colorMatch = selectedColor === '' || item.cor.split('/').some(color => normalizeColor(color) === normalizeColor(selectedColor));
    const breedMatch = selectedBreed === '' || item.name.split('/').some(name => normalizeName(name) === normalizeName(selectedBreed));
    const ageMatch = selectedAge === '' || item.idade.split('/').some(age => normalizeAge(age) === normalizeAge(selectedAge));
    return colorMatch && breedMatch && ageMatch;
  });

  return (
    <Styled.Container>
      <Styled.BoxFilters>
        <FilterColor onSelectColor={handleColorSelect} />
        <FilterBreed onSelectBreed={handleBreedSelect} />
        <FilterYears onSelectAge={handleAgeSelect} />
      </Styled.BoxFilters>
      <Styled.BoxList>
        {filteredPets.map((item, index) => (
          <Styled.Card key={index}>
            <Styled.CardImg src={item.img} />
            <Styled.Title>Raça: {item.name}</Styled.Title>
            <Styled.Title>Nome: {item.apelido}</Styled.Title>
            <Styled.Title>Idade: {item.idade} {item.idade > 1 ? 'anos' : 'ano'}</Styled.Title>
            <Styled.Title>Tamanho: {item.tamanho} cm</Styled.Title>
            <Styled.Title>Cor: {item.cor}</Styled.Title>
          </Styled.Card>
        ))}
      </Styled.BoxList>
    </Styled.Container>
  );
}

export default List;
