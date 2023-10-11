import Task from './Components/Tasks';
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <div className="app">
     <h1>Welcome to skaalab task manager application </h1>
     <div className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/dashboard">dashboard</Link>
      <Link to="/login">Login</Link>
     </div>
     <Routes>
<Route path="/" element={<Task/>} />
<Route path="/dashboard" element={<Dashboard/>} />


     </Routes>

    </div>
  );
}

export default App;
