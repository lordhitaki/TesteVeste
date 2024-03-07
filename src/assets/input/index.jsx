import React, {useState} from 'react';
import * as Styled from './styles';


const Input = ({ placeholder, onChange }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
      setInputValue(event.target.value);
      onChange(event.target.value);
    };
  
        return (
            <Styled.BoxInpt>
              <Styled.Inpt
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder={placeholder}
              />
              
            </Styled.BoxInpt>
          );
        };
  
  export default Input;