import { NavLink } from "react-router-dom";
import SideNav from "./SideNav";

function Header() {
    return (
        <header>
            <nav className="white" role="navigation">
                <SideNav />
                <div className="nav-wrapper container">
                    <NavLink to="" id="logo-container" className="brand-logo">
                        Life Planner
                    </NavLink>
                    <ul className="right">
                        <li><a href="#">Log In</a></li>
                    </ul>
                </div>
            </nav>
        </header>

    );
}

export default Header;