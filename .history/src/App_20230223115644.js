import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateJob from './pages/dashboard/CreateJob';
import Findjob from './pages/dashboard/findjob';
import History from './pages/dashboard/History';
import Layout from './pages/dashboard/Layout';
import Updateprofile from './pages/dashboard/UpdateProfile';
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
            <Route index element={<Findjob />} />
            <Route path='/create' element={<CreateJob />} />
            <Route path='/update' element={<Updateprofile />} />
            <Route path='/history' element={<History />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
