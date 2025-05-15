import './App.css'
import User from './Components/User';

const usersPromise = fetch('http://localhost:3000/users').then(res => res.json());

function App() {

  return (
    <>
      <h1>Users Management Client</h1>
      <User usersPromise={usersPromise}></User>
    </>
  )
}

export default App