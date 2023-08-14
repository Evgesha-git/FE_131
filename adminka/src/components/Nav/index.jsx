import { Link, Outlet } from "react-router-dom";
import { routes } from "../../utils/routes";

const Nav = () => {
    return (
        <>
            <div className="container_nav">
                <nav>
                    <ul>
                        <Link to={routes.main}>Главная страница</Link>
                    </ul>
                    <ul>
                        <Link to={routes.login}>Авторизация/Регистрация</Link>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    );
};

export default Nav;
