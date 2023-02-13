import "./sidebar.css"
import Logo from "./images/Logo.svg"
import Dashboard from "./images/DashBoard.svg"
import Bid from "./images/Bid.svg"
import Collection from "./images/Collection.svg"
import Profile from "./images/Profile.svg"
import Settings from "./images/Settings.svg"
import Logout from "./images/Logout.svg"
import selectedDashboard from "./images/selectedDashBoard.svg"
import selectedBid from "./images/selectedBid.svg"
import selectedCollection from "./images/selectedCollection.svg"
import selectedProfile from "./images/selectedProfile.svg"


const Sidebar = ({selectedComponent, changeComponent}) => {
    
    const handleClick = (component) => {
        console.log(component)
        changeComponent(component)
    }

    return(
        <nav className="sb--container">
            <div className="sb--icon-container">
                <div id="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <div id="menu">
                    <img onClick={()=>handleClick('Dashboard')} src={selectedComponent==='Dashboard' ? selectedDashboard : Dashboard} alt="icon"/>
                    <img onClick={()=>handleClick('Bid')} src={selectedComponent==='Bid' ? selectedBid : Bid} alt="icon"/>
                    <img onClick={()=>handleClick('Collection')} src={selectedComponent==='Collection' ? selectedCollection : Collection} alt="icon"/>
                    <img onClick={()=>handleClick('Profile')} src={selectedComponent==='Profile' ? selectedProfile : Profile} alt="icon"/>
                    <img onClick={()=>handleClick('Settings')} src={Settings} alt="icon"/>
                </div>
                <div id="logout">
                    <img src={Logout} alt="icon"/>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar;