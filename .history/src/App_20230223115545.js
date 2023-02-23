import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Findjob from './pages/dashboard/findjob';
import History from './pages/dashboard/History';
import Layout from './pages/dashboard/Layout';
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

          <Route path='/' element={<Layout />}>
            <Route index element={<Findjob/> } />
            <Route index element={<Findjob/> } />
            <Route index element={<UpdatePofile/> } />
            <Route index element={<History/> } />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
