import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import AddTaskForm from './Addtaskform';
import SignIn from './Components/Signin';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div>
        <Routes>
            <Route exact path="/" element={<SignIn/>} />
            <Route exact path="/SignUp" element={<SignUp/>} />
            <Route exact path="/Home" element={<Home/>} />
            <Route exact path="/AddTaskForm" element={<AddTaskForm/>} />
        </Routes>
    </div>
  );
}

export default App;
