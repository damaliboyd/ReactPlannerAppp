import { Link } from "react-router-dom";
import SideNav from "./SideNav";

function Header() {
    return (
        <header>
            <nav className="white" role="navigation">
                <SideNav />
                <div className="nav-wrapper container">
                    <Link to="/">
                        <a id="logo-container" className="brand-logo">Life Planner</a>
                    </Link>
                    <ul className="right">
                        <li><a href="#">Log In</a></li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default Header;