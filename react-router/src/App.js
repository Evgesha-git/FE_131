import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Nav from './components/Nav';
import Product from './pages/Product';


function App() {
  return (
    <>
      {/* <Nav /> */}
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
