import React from 'react';
import FormDiv from '../../styles/Form.styled';
import { StyledLabel } from '../../styles/Label.style';
import { StyledInput } from '../../styles/Input.style';
import { Title } from '../../styles/title.styled';
import { ButtonStyled } from '../../styles/Button.style';
import { WrapperLogin } from '../../styles/WrapperLogin.style';
import { Div } from '../../styles/Div.style';

function SignInComponent() {
  return (
    <div>
      <Div>
      <WrapperLogin>
          <Title>
            Login
          </Title>
          <FormDiv >
            <StyledLabel>Email:</StyledLabel>
            <StyledInput type="email" />
            <StyledLabel>Password:</StyledLabel>
            <StyledInput type="password" />
          </FormDiv>
          <ButtonStyled>Save</ButtonStyled>
        </WrapperLogin>
      </Div>
        
    </div>
  );
}

export default SignInComponent;
