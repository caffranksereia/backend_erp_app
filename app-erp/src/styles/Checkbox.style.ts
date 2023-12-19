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
 width: 500px ;
 height: 50px ;
 padding-left: 5px ;
 margin: 0px 4px ;
 border-radius: 5px ;
   
 background-color: $ {props => props.checked ? '# 97C160': '# E5E5E5'} ;
   
 display: flex ;
 align-items: center ;
`;

export const Text = styled.label`
    font-size:2em;
    color: #BF4F74;
    font-weight: bold;
   color: $ {props => props.checked ? ‘# FFF’: ‘# 555’} ;
`;

export const HiddenCheckbox = styled.input.attrs ({type: 'checkbox'}) `
 overflow: hidden ;
 white-space: nowrap; width: 1px ;
 height: 1px ;
 margin: -1px ;
 padding: 0 ;
`;