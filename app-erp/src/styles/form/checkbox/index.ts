import styled from "styled-components";

export const StyledCheckbox = styled.label`
 width: 50px ;
 height: 50px ;
   margin-right: 6px;
   border-radius: 50%;
 background: # F6F6F6 ;
 display: flex ;
 justify-content: center ;
 align-items: center ;
`;

export const CheckboxContainer = styled.div`
 width: 400px ;
 height: 50px ;
 padding-left: 5px ;
 margin: 0px 4px ;
 border-radius: 5px ;
 background:purple;
 display: flex ;
 align-items: center ;
`;

export const Text = styled.label`
  width: 400px ;
    font-size:1.5em;
    color: #BF4F74;
    font-weight: bold;
`;

export const HiddenCheckbox = styled.input.attrs ({type: 'checkbox'}) `
 white-space: nowrap; 
 padding: 0 ;
`;