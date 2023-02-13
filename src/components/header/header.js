import "./header.css"

const Header = () => {
    return(
        <header className="header--container">
            <input id="search" type="search" placeholder="Search..."/>
            <div className="img--container">
                <img alt="display"/>
                <img alt="notifs"/>
                <img alt="user"/>
            </div>
        </header>
    )
}

export default Header;