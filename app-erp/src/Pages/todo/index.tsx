import React from 'react';
import { iText } from '../../_interfaces/iText';



const Todo = ({text}: iText)  =>{
  return (
    <DivBlockTodo>
      <Div>
       <CheckBoxComponent text= {text}/>
      </Div>
      <DivAdjustSizeComponent>
        <DivTodo>
          <CheckBoxComponent text={text}/>
        </DivTodo>
      </DivAdjustSizeComponent>
    </DivBlockTodo>
  );
}

export default Todo;
