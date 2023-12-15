import React from 'react';
import Choice from './choice-user';

function MainHeader() {
  return (
    <div>
        <div>
            <h1>Bem vindo ao Aplicativo ERP App onde sua vida fica mais organizada!</h1>
        </div>
        <div>
            <Choice/>
        </div>
    </div>
  );
}

export default MainHeader;
