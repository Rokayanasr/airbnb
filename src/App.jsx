
import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/indexPage'
import LoginPage from './pages/LoginPage'
import Layout from './components/Layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'

function App() {
  axios.defaults.baseURL = 'http://localhost:3300';

  return (
    <>
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<IndexPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
