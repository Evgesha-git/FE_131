import './App.css';
import { Route, Routes } from 'react-router-dom';
import { routes } from './utils/routes';
import Nav from './components/Nav';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import AdminPage from './pages/AdminPage';
import { useAction } from './hooks/useAction';
import { useEffect } from 'react';

function App() {
  const { getData } = useAction();

  useEffect(() => {
    getData('test');
  });

  return (
    <div className="App">
      <Routes>
        <Route path={routes.main} element={<Nav />}>
          <Route index element={<MainPage />} />
          <Route path={routes.login} element={<Login />} />
          {/**Тут будет роут до админ страницы */}
          <Route path={routes.admin} element={<AdminPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
