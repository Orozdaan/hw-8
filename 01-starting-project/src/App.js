import React, { Fragment } from 'react';
import  { useState } from 'react';
import AddUser from './components/Users/AddUser';
import Wrapper from './components/Users/Helpers';
import UserList from './components/Users/UserList';
// import { Fragment } from 'react';

function App() {
  const [users,setUsers]=useState([]);

  const addUserHandler =(name, age)=>{
    setUsers( [...users, {name , age, id:Math.random().toString()}])
  }


  const getData=(data)=>{
    setUsers(data)
  }

  return (
    <Fragment>
            <AddUser onAddUser ={addUserHandler}/>
            <UserList users={users} getData={getData}/>
    </Fragment>
  );
}

export default App;
