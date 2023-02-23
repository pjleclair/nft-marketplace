import "./settings.css"

const Settings = () => {
    return (
        <main className="collection--container">
            <div>
                <h1>Settings</h1>
                <div className="label--container">
                    <div>Welcome to your Settings</div>
                    <div id="label">
                        <div id="home">Home</div>
                        <div>{`>`}</div>
                        <div id="collections">Settings</div>
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
                        <div id="label">User profile</div>
                        <div className="user-info">
                            <div>
                                <div>Full name</div>
                                <input />
                                <div>
                                    <img alt="pfp"/>
                                    <div>
                                        <div>John Smith</div>
                                        <div>Welcome setting page</div>
                                    </div>
                                </div>
                                <button>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className="profile--container">
                        <div id="label">Update profile</div>
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
                    <div>Personal Information</div>
                    <div className="info--container">
                        <div>
                            <div>Info</div>
                            <input />
                        </div>
                        <div>
                            <div>Info</div>
                            <input />
                        </div>
                        <div>
                            <div>Info</div>
                            <input />
                        </div>
                        <div>
                            <div>Info</div>
                            <input />
                        </div>
                        <div>
                            <div>Info</div>
                            <input />
                        </div>
                        <div>
                            <div>Info</div>
                            <input />
                        </div>
                    </div>
                    <button>Save</button>
                </div>
            </div>
        </main>
)}

export default Settings;