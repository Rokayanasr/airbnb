
import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/indexPage'
import LoginPage from './pages/LoginPage'
import Layout from './components/Layout'
import RegisterPage from './pages/RegisterPage'
import Test from './components/Test'

function App() {

  return (
    <>
        <Test/>
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
