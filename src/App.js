import './App.css';
import {Route, Routes} from "react-router-dom"
import { Home } from './components/Home';
import { Register } from './components/Register';
import { Login } from './components/Login';
import {AuthProvider} from './context/authContext'
import { ProtecterRoutes } from './components/ProtecterRoutes';
import Switch from './components/Switch';

function App() {
  return (
    <div className='bg-neutral-100 h-screen text-black flex dark:bg-slate-900 dark:text-white transition duration-500'>
      <Switch />
      <AuthProvider>
        <Routes>
          <Route 
            path="/" 
            element={
              <ProtecterRoutes>
                <Home/>
              </ProtecterRoutes>
            } 
          />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App;
