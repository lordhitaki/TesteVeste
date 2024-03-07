import React, { useState, useEffect } from 'react';
import * as Styled from './styles';

function FilterBreed({ onSelectBreed }) {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("SavedBreed");
    if (savedData) {
      setSaved(JSON.parse(savedData));
    }
  }, []);

  const normalizeName = (name) => {
    return name.toLowerCase().trim(); 
  };

  const nameCounts = {};

  saved.forEach(item => {
    const names = item.name.split('/'); 
    names.forEach(name => {
      const normalizedName = normalizeName(name);
      if (!nameCounts[normalizedName]) {
        nameCounts[normalizedName] = 1;
      } else {
        nameCounts[normalizedName]++;
      }
    });
  });

  const filteredNames = Object.keys(nameCounts).sort((a, b) => a.localeCompare(b)).filter(name => nameCounts[name] >= 1);

  const handleBreedSelect = (event) => {
    const selectedBreed = event.target.value;
    onSelectBreed(selectedBreed);
  };

  return (
    <Styled.Box>
      <select id="breeds" name="breeds" onChange={handleBreedSelect}>
        <option value={''}>Selecione a Raça</option>
        {filteredNames.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
    </Styled.Box>
  );
}

export default FilterBreed;
