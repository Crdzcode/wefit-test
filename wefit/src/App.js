import './App.css';
import Header from './components/header';
import Home from './pages/home';
import ShoppingCart from './pages/shopping-cart';
import Finished from './pages/finished';
import Empty from './pages/empty';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<ShoppingCart/>} />
          <Route path='/finished' element={<Finished/>} />
          <Route path='/empty' element={<Empty/>} />
        </Routes>
      
    </div>
  );
}

export default App;
