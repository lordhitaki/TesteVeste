import React, { useState, useEffect } from 'react';
import * as Styled from './styles';

function FilterBreed() {
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

  const uniqueNames = new Set();
  const nameCounts = {};

  saved.forEach(item => {
    const names = item.name.split('/'); 
    names.forEach(name => {
      const normalizedName = normalizeName(name);
      if (!uniqueNames.has(normalizedName)) {
        uniqueNames.add(normalizedName);
        nameCounts[normalizedName] = 1;
      } else {
        nameCounts[normalizedName]++;
      }
    });
  });

  const filteredNames = [...uniqueNames].filter(name => nameCounts[name] >= 1);

  return (
    <Styled.Box>
      <select id="breeds" name="breeds">
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
