import React from 'react';

function TodoComponent() {
  return (
    <div>
        <h1>To-do</h1>
      <div>
        <label>Titulo:</label>
          <input type="email" />
          <label>O que fazer?</label>
          <input type="text" />
          <label>Finalizado:</label>
          <input type="checkbox" />
      </div>
    </div>
  );
}

export default TodoComponent;
