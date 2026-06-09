import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await  fetch("http://localhost:8000/api/v1/users")

        if(!response.ok) {
          throw new Error('Failed to fetch users')
        }

        const data = await response.json();

        setUsers(data);
        
      } catch(error) {
        console.error(error);
      } 

    };

    getUsers();
   
  }, []);

  return (
    <>
    <div>
      <h1>Users List</h1>

      {users.map((user) => {
        <p key={user.id}>{user.name}</p>
      })}
    </div>
      
    </>
  )
}

export default App
