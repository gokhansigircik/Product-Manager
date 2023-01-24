import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./pages/Main";
import {Navigate, Routes, Route } from 'react-router-dom';
import ManagerDetail from './pages/ManagerDetail';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Navigate to='/managers' /> } />
        <Route path='/managers' element={<Main />} />
        <Route path='/managers/:id' element={<ManagerDetail /> } />
      </Routes>
    </div>
  )
}

export default App;