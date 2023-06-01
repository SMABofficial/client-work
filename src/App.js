
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import { Route , Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/ >} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
        
      </Routes>
    
    </div>
  );
}

export default App;
