import './App.css';
import { Route, Routes } from 'react-router-dom';
import { routes } from './utils/routes';
import Nav from './components/Nav';
import MainPage from './pages/MainPage';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.main} element={<Nav />}>
          <Route index element={<MainPage />} />
          <Route path={routes.login} element={<Login />} />
          {/**Тут будет роут до админ страницы */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
