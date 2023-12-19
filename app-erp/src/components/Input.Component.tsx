import React from 'react';
import { StyledInput } from '../styles/Input.style';

interface Props {
  type:string
}

const InputLabelComponent = ({type}:Props) => {
  return (
    <div>
         <StyledInput type={type} />
    </div>
  );
}

export default InputLabelComponent;
