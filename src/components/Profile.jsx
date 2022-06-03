function Profile() {
    return (
        <li><div className="user-view">
            <div className="background">
                <img src="images/background3.jpg" />
            </div>
            <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
            <a href="#name"><span className="white-text name">John Doe</span></a>
            <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
        </div></li>
    );
}
export default Profile;