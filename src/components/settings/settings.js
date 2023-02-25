import "./settings.css"
import pfp from "../header/images/Avatar.svg"

const Settings = () => {
    return (
        <main className="settings--container">
            <div className="page-header">
                <h4>Settings</h4>
                <div className="label--container">
                    <div>Welcome to your Settings</div>
                    <div id="label">
                        <div id="home">Home</div>
                        <div>{`>`}</div>
                        <div id="collections">Settings</div>
                    </div>
                </div>
            </div>
            <div className="settings" id="selector">
                <div id="selected" className="selector--item">Profile</div>
                <div className="selector--item">Application</div>
                <div className="selector--item">Security</div>
                <div className="selector--item">Activity</div>
                <div className="selector--item">Payment Method</div>
                <div className="selector--item">API</div>
            </div>
            <div className="user-update--container">
                <div className="user--container">
                    <h4 id="label">User profile</h4>
                    <div className="user-info">
                        <div>
                            <div>Full name</div>
                            <input />
                            <div className="pfp-container">
                                <img src={pfp} alt="pfp"/>
                                <div id="user">
                                    <h5>Jane Doe</h5>
                                    <div>Welcome to the settings page</div>
                                </div>
                            </div>
                            <button>Save</button>
                        </div>
                    </div>
                </div>
                <div className="profile--container">
                    <h4 id="label">Update profile</h4>
                    <div className="update-profile">
                        <div>
                            <div>Email</div>
                            <input />
                            <div>Password</div>
                            <input />
                        </div>
                        <button>Save</button>
                    </div>
                </div>
            </div>
            <div className="personal--info">
                <h4>Personal Information</h4>
                <div className="info--container">
                    <div id="info">
                        <div>Info</div>
                        <input />
                    </div>
                    <div id="info">
                        <div>Info</div>
                        <input />
                    </div>
                    <div id="info">
                        <div>Info</div>
                        <input />
                    </div>
                    <div id="info">
                        <div>Info</div>
                        <input />
                    </div>
                    <div id="info">
                        <div>Info</div>
                        <input />
                    </div>
                    <div id="info">
                        <div>Info</div>
                        <input />
                    </div>
                </div>
                <button>Save</button>
            </div>
        </main>
)}

export default Settings;