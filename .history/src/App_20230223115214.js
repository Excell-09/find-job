import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='*' element={<Landing />} />

          <Route path='/landing' element={<Landing />} />

          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
