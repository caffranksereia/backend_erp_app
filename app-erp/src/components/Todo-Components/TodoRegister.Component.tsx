import React from 'react';
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Text } from './../../styles/Checkbox.style';

function TodoRegister({children, ...props}) {
  const [check, setChecked] = React.useState(false);

  function handleCheckBoxChange() {
    setChecked(!check);
  }
  return (
    <div>
        <CheckboxContainer 
        checked ={check}
        onClick= {handleCheckBoxChange}>
            <HiddenCheckbox 
            onChange={handleCheckBoxChange}
            checked={check}/>
            <StyledCheckbox
            checked = {check}/>
            <Text checked={check}>testes</Text>
         </CheckboxContainer>
    </div>
  );
}

export default TodoRegister;
