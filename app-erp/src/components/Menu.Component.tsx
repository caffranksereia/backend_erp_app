import React from 'react';
import UnorderedList from '../styles/ListView.styled';
import { Wrapper } from '../styles/Wrapper.styled';

function MenuComponent() {
  return (
    <div>
      <Wrapper>
        <UnorderedList>
          <li>Login</li>
          <li>Cadastrar</li>
          <li>About me</li>
          <li>
            To-do
        </li>
        <li>
           filmes
        </li>
        <li> usuarios
        </li>
          <li>Conhecer o nosso app!</li>
        </UnorderedList>
      </Wrapper>
    </div>
  );
}

export default MenuComponent
