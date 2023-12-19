import React from 'react';
import HeaderComponent from '../components/Header.Component';
import GlobalStyled from '../styles/global/GlobalStyled';
import FooterComponent from '../components/Footer.Component';
import MenuComponent from '../components/Menu.Component';
import TodoRegister from '../components/Todo-Components/TodoRegister.Component';

function Home() {
  return (
    <div>
      <GlobalStyled/>
      <HeaderComponent/>
      <MenuComponent/>
      <TodoRegister/>
      <FooterComponent/>
    </div>
  );
}

export default Home;
