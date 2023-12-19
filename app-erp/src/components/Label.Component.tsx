import React from 'react';
import { StyledLabel } from '../styles/Label.style';


interface Props {
    name:string
}
const  LabelComponent =({name}: Props) => {
  return (
    <div>
      <StyledLabel>{name}</StyledLabel>
    </div>
  );
}

export default LabelComponent;
