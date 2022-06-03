import Profile from './Profile';
import { NavLink } from "react-router-dom";

function SideNav() {
    return (
        <>
            <ul id="slide-out" className="sidenav">
                <Profile />
                <li><NavLink to="/"><i className="material-icons">home</i>Home</NavLink></li>
                <li><NavLink to="about"><i className="material-icons">info</i>About</NavLink></li>
                <li><div className="divider"></div></li>
                <li><NavLink className="subheader" to="planner">Planner</NavLink></li>
                <li><NavLink className="waves-effect" to="calendar">Calendar</NavLink></li>
                <li><NavLink className="waves-effect" to="journal">Journal</NavLink></li>
                <li><NavLink className="waves-effect" to="tasks">Tasks</NavLink></li>
            </ul>
            <a href="#!" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>

        </>
    );
}

export default SideNav;