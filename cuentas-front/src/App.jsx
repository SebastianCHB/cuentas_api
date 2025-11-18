import './App.css'
import {Router,Route,Routes} from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'

export default function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Login" eLement={<Login/>}/>
      </Routes>
    </Router>
    </>
  )
}