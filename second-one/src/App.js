import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import ErrorModal from './components/ErrorModal';

const dataArr = [];

function App() {
  const [formData, setFormInput] = useState(dataArr);
  
  const addUserHandler = (data) => {
    setFormInput((prevData) => {
      return [data, ...prevData];
    });
  }

  return (
    <div>
      <AddUser onSumbitForm={addUserHandler} />
      <UsersList data={formData} />
      <ErrorModal/>
    </div>
  );
}

export default App;


// AddUser

// UsersList

// Button

// Card

// ErrorModal