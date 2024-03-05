import React from 'react';

function Select() {
  return (
    <div>
      <label htmlFor="fruits">Escolha uma fruta:</label>
      <select id="fruits" name="fruits">
        <option value="apple">Maçã</option>
        <option value="banana">Banana</option>
        <option value="orange">Laranja</option>
        <option value="grape">Uva</option>
      </select>
    </div>
  );
}

export default Select;
