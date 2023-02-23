import { BrowserRouter as router, Routes, Route, Router } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <div className='App'>
      <router>
        <Router>
          <Route path='*' element={<Landing />} />

          <Route path='/landing' element={<Landing />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='/landing' element={<Log />} />
        </Router>
      </router>
    </div>
  );
}

export default App;
