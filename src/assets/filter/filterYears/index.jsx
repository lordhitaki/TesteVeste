import React, { useState, useEffect } from 'react';
import * as Styled from './styles';

function FilterYears() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("SavedBreed");
    if (savedData) {
      setSaved(JSON.parse(savedData));
    }
  }, []);

  const normalizeidade = (idade) => {
    return idade.toLowerCase().trim(); 
  };

  const uniqueidades = new Set();
  const idadeCounts = {};

  saved.forEach(item => {
    const idades = item.idade.split('/'); 
    idades.forEach(idade => {
      const normalizedidade = normalizeidade(idade);
      if (!uniqueidades.has(normalizedidade)) {
        uniqueidades.add(normalizedidade);
        idadeCounts[normalizedidade] = 1;
      } else {
        idadeCounts[normalizedidade]++;
      }
    });
  });

  const filteredidades = [...uniqueidades].filter(idade => idadeCounts[idade] >= 1);

  return (
    <Styled.Box>
      <select id="breeds" idade="breeds">
        <option value={''}>Selecione a Idade</option>
        {filteredidades.map((idade, index) => (
          <option key={index} value={idade}>
            {idade}
          </option>
        ))}
      </select>
    </Styled.Box>
  );
}

export default FilterYears;
