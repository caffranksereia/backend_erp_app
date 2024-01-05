import React from 'react';
import { StyledLabel } from '../../styles/label';


interface Props {
    name:string
}
export const  LabelComponent =({name}: Props) => {
  return (
    <div>
      <StyledLabel>{name}</StyledLabel>
    </div>
  );
};
