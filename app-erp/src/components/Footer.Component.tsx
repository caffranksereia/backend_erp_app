import React from 'react';
import { Title } from './../styles/title.styled';
import UnorderedListContact from './../styles/UnorderedListContact';
import { UnorderedListContactDiv } from './../styles/UnorderedListDiv.styles';
import { WrapperContactUs } from '../styles/WrapperContactUs';

function FooterComponent() {
  return (
    <div>
      <WrapperContactUs>
      <Title>Contact Us</Title>
      <UnorderedListContactDiv>
        <UnorderedListContact>
          <li>Email: circuncisaofabio@icloud.com</li>
          <li>Whatsapp: +55 (16)997141195</li>
        </UnorderedListContact>
      </UnorderedListContactDiv>
      </WrapperContactUs>
     
    </div>
  );
}

export default FooterComponent;
