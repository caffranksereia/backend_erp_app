import React from 'react';
import UnorderedList from '../../../styles/list/list_view';
import { Wrapper } from '../../../styles/div/wrapper/wrapper_styled';
import { Div } from '../../../styles/div/div_flex';

function MenuComponent() {
  return (
    <Div>
      <Wrapper>
        <UnorderedList>
          <li>
            To-do
        </li>
        </UnorderedList>
      </Wrapper>
    </Div>
  );
}

export default MenuComponent
