import React, { useState, useEffect } from 'react';
import * as Styled from './styles';

function FilterYears({ onSelectAge }) {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("SavedBreed");
    if (savedData) {
      setSaved(JSON.parse(savedData));
    }
  }, []);

  const normalizeAge = (age) => {
    return age.toLowerCase().trim(); 
  };

  const uniqueAges = new Set();
  const ageCounts = {};

  saved.forEach(item => {
    const ages = item.idade.split('/'); 
    ages.forEach(age => {
      const normalizedAge = normalizeAge(age);
      if (!uniqueAges.has(normalizedAge)) {
        uniqueAges.add(normalizedAge);
        ageCounts[normalizedAge] = 1;
      } else {
        ageCounts[normalizedAge]++;
      }
    });
  });

  const filteredAges = [...uniqueAges].sort((a, b) => a - b).filter(age => ageCounts[age] >= 1);
  
  const handleAgeSelect = (event) => {
    const selectedAge = event.target.value;
    onSelectAge(selectedAge);
  };

  return (
    <Styled.Box>
      <select id="ages" name="ages" onChange={handleAgeSelect}>
        <option value={''}>Selecione a Idade</option>
        {filteredAges.map((age, index) => (
          <option key={index} value={age}>
            {age}
          </option>
        ))}
      </select>
    </Styled.Box>
  );
}

export default FilterYears;
