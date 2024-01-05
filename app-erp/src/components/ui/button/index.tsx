import React from 'react';
import { ButtonStyled } from '../../../styles/button';
import { DivFlex } from 'styles';

interface Props {
    name:string;
    onClick: () => void;
}

const ButtonComponent:React.FC<Props>= ({name,onClick}) =>{
  return (
    <DivFlex>
      <ButtonStyled onClick={onClick}>{name}</ButtonStyled>
      </DivFlex>
  );
}

export default ButtonComponent;
