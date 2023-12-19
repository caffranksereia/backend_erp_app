import React from 'react';
import { ButtonStyled } from '../styles/Button.style';
import { Div } from '../styles/Div.style';

interface Props {
    name:string;
    onClick: () => void;
}

const ButtonComponent:React.FC<Props>= ({name,onClick}) =>{
  return (
    <div>
    <Div>
      <ButtonStyled onClick={onClick}>{name}</ButtonStyled>
      </Div>
    </div>
  );
}

export default ButtonComponent;
