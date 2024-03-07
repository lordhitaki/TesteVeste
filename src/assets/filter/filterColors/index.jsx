import React, { useState, useEffect } from 'react';
import * as Styled from './styles';

function FilterColor() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("SavedBreed");
    if (savedData) {
      setSaved(JSON.parse(savedData));
    }
  }, []);

  const normalizeColor = (color) => {
    return color.toLowerCase().trim(); 
  };

  const uniqueColors = new Set();
  const colorCounts = {};

  saved.forEach(item => {
    const colors = item.cor.split('/'); 
    colors.forEach(color => {
      const normalizedColor = normalizeColor(color);
      if (!uniqueColors.has(normalizedColor)) {
        uniqueColors.add(normalizedColor);
        colorCounts[normalizedColor] = 1;
        console.log(colorCounts);
      } else {
        colorCounts[normalizedColor]++;
      }
    });
  });

  const filteredColors = [...uniqueColors].filter(color => colorCounts[color] >= 1);

  return (
    <Styled.Box>
      <select id="breeds" name="breeds">
        <option value={''}>Selecione a cor</option>
        {filteredColors.map((color, index) => (
          <option key={index} value={color}>
            {color}
          </option>
        ))}
      </select>
    </Styled.Box>
  );
}

export default FilterColor;


