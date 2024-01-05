import React from 'react';
import { Title } from '../../styles/text/title';
import UnorderedListContact from '../../styles/list/unordered_list_contact';
import { UnorderedListContactDiv } from '../../styles/div/unordered_div/UnorderedListDiv.styles';
import { WrapperContactUs } from '../../styles/div/wrapper/wrapper_contact';

export const FooterComponent= () => {
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
};
