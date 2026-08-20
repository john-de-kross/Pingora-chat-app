
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import ChatLayout from './COMPONENT/chatLayout'
import EmailVerification from './COMPONENT/emailVerification'
import Login from './COMPONENT/login'
import Sidebar from './COMPONENT/sidebar'
import CreatAccount from './COMPONENT/signup'

function App() {
 

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<CreatAccount />} />
      <Route path="/email-verification" element={<EmailVerification />} />
      <Route path="/" element={<Navigate to="/login" />} />

    </Routes>
  //  <div className='flex'>
  //   <Sidebar />
  //   <ChatLayout />

  // //  </div>
  // <Login />
  // <CreatAccount />
  // <EmailVerification />
  )
}

export default App
