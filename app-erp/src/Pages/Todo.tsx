import React from 'react';
import TodoRegister from '../components/Todo-Components/Todo.Component';
import ListViewTodo from '../components/Todo-Components/ListTodo.Component';

function Todo() {
  return (
    <div>
        <TodoRegister/>
      <div>
      <ListViewTodo/>
      </div>
    </div>
  );
}

export default Todo;
