import React from 'react';
import { StyledInput } from '../../../styles/form/input';

interface Props {
  type:string
}

export const InputLabelComponent = ({type}:Props) => {
  return (
    <div>
         <StyledInput type={type} />
    </div>
  );
};
