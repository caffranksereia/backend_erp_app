import { FooterComponent } from 'components';
import MenuComponent from 'components/ui/menu';
import React from 'react';
import { DivBlock, GlobalStyled } from 'styles';


const Home = () =>{
  return (
    <DivBlock>
      <GlobalStyled/>
      <MenuComponent/>
      <FooterComponent/>
    </DivBlock>
  );
}

export default Home;
