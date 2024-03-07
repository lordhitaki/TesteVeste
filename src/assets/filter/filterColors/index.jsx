import React, { useState, useEffect } from 'react';
import * as Styled from './styles';

function FilterColor({ onSelectColor }) {
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

  const colorCounts = {};

  saved.forEach(item => {
    const colors = item.cor.split('/');
    colors.forEach(color => {
      const normalizedColor = normalizeColor(color);
      if (!colorCounts[normalizedColor]) {
        colorCounts[normalizedColor] = 1;
      } else {
        colorCounts[normalizedColor]++;
      }
    });
  });

  const filteredColors = Object.keys(colorCounts)
  .sort((a, b) => a.localeCompare(b))
  .filter(color => colorCounts[color] >= 1);

  const handleColorSelect = (event) => {
    const selectedColor = event.target.value;
    onSelectColor(selectedColor);
  };

  return (
    <Styled.Box>
      <select id="breeds" name="breeds" onChange={handleColorSelect}>
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
