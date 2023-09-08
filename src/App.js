import React, { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
  };

  console.log(users)

  return (
    <div>
      <AddUser onEntry={addUserHandler} />
      {users.length > 0 && <UserList data={users} />}
    </div>
  );

}

export default App;
