import Profile from './Profile'

function SideNav() {
    return (
        <>
            <ul id="slide-out" className="sidenav">
                <Profile />
                <li><a href="#!"><i className="material-icons">home</i>Home</a></li>
                <li><a href="#!"><i className="material-icons">info</i>About</a></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Planner</a></li>
                <li><a className="waves-effect" href="#!">Calendar</a></li>
                <li><a className="waves-effect" href="#!">Journal</a></li>
                <li><a className="waves-effect" href="#!">Tasks</a></li>
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>

        </>
    )
}

export default SideNav;