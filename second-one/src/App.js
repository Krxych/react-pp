import React, { useState, Fragment } from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';

const dataArr = [];

function App() {
  const [formData, setFormInput] = useState(dataArr);
  
  const addUserHandler = (data) => {
    setFormInput((prevData) => {
      return [data, ...prevData];
    });
  }

  return (
    <Fragment>
      <AddUser onSumbitForm={addUserHandler} />
      <UsersList data={formData} />
    </Fragment>
  );
}

export default App;


// AddUser

// UsersList

// Button

// Card

// ErrorModal