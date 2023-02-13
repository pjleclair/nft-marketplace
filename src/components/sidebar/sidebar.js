import "./sidebar.css"
import Logo from "./images/Logo.svg"
import Dashboard from "./images/DashBoard.svg"
import Bid from "./images/Bid.svg"
import Heart from "./images/Heart.svg"
import Collection from "./images/Collection.svg"
import Profile from "./images/Profile.svg"
import Settings from "./images/Settings.svg"
import Logout from "./images/Logout.svg"


const Sidebar = () => {
    return(
        <nav className="sb--container">
            <div className="sb--icon-container">
                <div id="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <div id="menu">
                    <img src={Dashboard} alt="icon"/>
                    <img src={Bid} alt="icon"/>
                    <img src={Heart} alt="icon"/>
                    <img src={Collection} alt="icon"/>
                    <img src={Profile} alt="icon"/>
                    <img src={Settings} alt="icon"/>
                </div>
                <div id="logout">
                    <img src={Logout} alt="icon"/>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar;