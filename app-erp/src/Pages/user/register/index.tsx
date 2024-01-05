import React from 'react';
import FormDiv from '../../../styles/form/form';
import LabelComponent from '../../../components/label';
import InputLabelComponent from '../../../components/form/input';
import ButtonComponent from '../../../components/ui/button';

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
