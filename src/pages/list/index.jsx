import React, { useEffect, useState } from 'react';
import * as Styled from './styles';
import FilterColor from '../../assets/filter/filterColors';
import FilterBreed from '../../assets/filter/filterBreed'; 
import FilterYears from '../../assets/filter/filterYears';

function List() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("SavedBreed");
    if (savedData) {
      setSaved(JSON.parse(savedData));
    }
  }, []);

  

  return (
    <Styled.Container>
        <Styled.BoxFilters>
          <FilterColor/>
          <FilterBreed/>
          <FilterYears/>
        </Styled.BoxFilters>
      <Styled.BoxList>
        {saved.map((item, index) => (
          <Styled.Card key={index}>
            <Styled.CardImg src={item.img} />
            <Styled.Title>Raça: {item.name}</Styled.Title>
            <Styled.Title>Nome: {item.apelido}</Styled.Title>
            <Styled.Title>Idade: {item.idade}</Styled.Title>
            <Styled.Title>Tamanho: {item.tamanho}</Styled.Title>
            <Styled.Title>Cor: {item.cor}</Styled.Title>
          </Styled.Card>
        ))}
      </Styled.BoxList>
    </Styled.Container>
  );
}

export default List;