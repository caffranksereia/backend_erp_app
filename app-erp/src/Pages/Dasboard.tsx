import React from 'react';
import MenuUser from './../components/Menu.Component';
import ListViewTodo from './../components/Todo-Components/ListTodo.Component';

function Dashboard() {
  return (
    <div>
        <MenuUser/>
        <ListViewTodo/>
    </div>
  );
}

export default Dashboard;
