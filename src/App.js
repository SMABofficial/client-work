
import './App.css';
import { useEffect, useState } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import { Route , Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Graph from './pages/Graph';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
      fetch("https://mocki.io/v1/6ec0ac80-3d9e-4366-ba1b-a23690c168b7").then((data) => {
          return (data.json());
      }).then((store) => {
          setData(store)
      }).catch((error) => {
          console.log(error)
      })
  }, [])
  console.log(data)



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/ >} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
       
        <Route path='/Dashboard' element={<Dashboard data = {data} />} />
        <Route path='/Graph:graphlink' element={<Graph  />} />
      </Routes>
    
    </div>
  );
}

export default App;
