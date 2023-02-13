import "./header.css"

import Display from "./images/lightDisplay.svg"
import Notifications from "./images/Notifications.svg"
import Avatar from "./images/Avatar.svg"

const Header = () => {
    return(
        <header className="header--container">
            <input id="search" type="search" placeholder="Search..."/>
            <div className="img--container">
                <img src={Display} alt="display"/>
                <img src={Notifications} alt="notifs"/>
                <img src={Avatar} alt="user"/>
            </div>
        </header>
    )
}

export default Header;