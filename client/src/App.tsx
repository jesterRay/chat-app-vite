
import './App.css'
import Nav from './components/Nav';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import VerifyOtp from './components/VerifyOtp';
import Chat from './components/Chat';
function App() {

  return (
    <div className='bg-gradient min-h-screen'>
      <Nav/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/otp/verify" element={<VerifyOtp/>} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </div>
  )
}

export default App
