import { BrowserRouter as router, Routes, Route, Router } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className='App'>
      <router>
        <Router>
          <Route path='*' element={<Landing />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Router>
      </router>
    </div>
  );
}

export default App;
