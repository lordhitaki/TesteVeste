import React, {useState} from 'react';
import * as Styled from './styles';


const Input = ({ placeholder }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
        return (
            <div>
              <Styled.Inpt
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder={placeholder}
              />
              
            </div>
          );
        };
  
  export default Input;