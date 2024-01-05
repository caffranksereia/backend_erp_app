import React from 'react';


interface Props {
  text: string;
}
export const CheckBoxComponent =({text}:Props)  =>{
  // const [check, setChecked] = React.useState(false);

  // function handleCheckBoxChange() {
  //   setChecked(!check);
  // }
  return (
    <Div>
        <CheckboxContainer>
            <HiddenCheckbox  />
            <StyledCheckbox/>
            <Text
            >{text} </Text>
         </CheckboxContainer>
    </Div>
  );
};
