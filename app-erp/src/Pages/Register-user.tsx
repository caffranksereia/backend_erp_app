import React from 'react';
import FormDiv from '../styles/Form.styled';
import LabelComponent from '../components/Label.Component';
import InputLabelComponent from '../components/Input.Component';
import ButtonComponent from '../components/Button.Component';

function RegisterUser() {
  return (
    <div>
      
        <FormDiv>
          <LabelComponent name='Nome'/>
          <InputLabelComponent type='text'/>
          <LabelComponent name='Email'/>
          <InputLabelComponent type='text'/>
          <LabelComponent name='username'/>
          <InputLabelComponent type='text'/>
          <LabelComponent name='Password'/>
          <InputLabelComponent type='password'/>
          <LabelComponent name='Re Password'/>
          <InputLabelComponent type='password'/>
        </FormDiv>
        <ButtonComponent name='Clica me '  onClick={() =>console.log("clicou seu burro")}/>
    </div>
  );
}

export default RegisterUser;
