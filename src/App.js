import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JobList from './pages/JobList';
import Success from './pages/Success';
import ApplicationForm from './pages/ApplicationForm';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/joblist" element={<JobList/>}/>
      <Route path="/success" element={<Success/>} />
      <Route path="/form" element={<ApplicationForm/>}/>
    </Routes>
    </div>
  );
}

export default App;
