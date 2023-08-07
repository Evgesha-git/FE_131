import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { app } from './config/firebase';
import { BrowserRouter } from 'react-router-dom'

export const AppContext = createContext(null);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContext.Provider value={{ auth, firestore }}>
        <App />
      </AppContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

