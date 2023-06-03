
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import { Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/ >} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/Navbar' element={<Navbar />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    
    </div>
  );
}

export default App;
