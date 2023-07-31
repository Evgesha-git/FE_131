import { Link, Outlet } from "react-router-dom";
import Widget from "./Widget";

const Nav = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"catalog"}>Catalog</Link>
                        </li>
                        <li>
                            <Link to={"about"}>About</Link>
                        </li>
                    </ul>
                </nav>

                <Widget />
            </header>
            <Outlet />
        </>
    );
};

export default Nav;
