import './App.css';
import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Nav from './components/Nav';
import Product from './pages/Product';
import Card from './pages/Card';

export const CardContext = createContext(null);

function App() {
  const [card, setCard] = useState(new Map());

  useEffect(() => {
    console.log(card);
  })

  return (
    <>
      {/* <Nav /> */}
      <CardContext.Provider value={{ card, setCard }}>
        <Routes>
          <Route path='/' element={<Nav />}>
            <Route index element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/about' element={<About />} />
            <Route path='/card' element={<Card />} />
          </Route>
        </Routes>
      </CardContext.Provider>
    </>
  );
}

export default App;
