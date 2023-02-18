import "./profile.css"

const Profile = () => {
    const unverif = "Looks like you are not verified yet. Verify yourself to use the full potential of NFT Marketplace."

    const Following = () => {
        return(
            <div>
                <div>
                    <img alt="pfp"/>
                    <div>
                        <div>Papaya</div>
                        <div>60 items</div>
                    </div>
                </div>
                <button>Unfollow</button>
            </div>
        )
    }

    const Purchased = () => {
        return(
            <div>
                <img alt="purchased"/>
                <img alt="pfp"/>
                <div>Liquid Wave</div>
            </div>
        )
    }

    const Collection = () => {
        return(
            <div>
                <img alt="collection"/>
                <img alt="pfp"/>
                <div>Liquid Wave</div>
            </div>
        )
    }

    return (
        <main className="profile--container">
            <h1>Profile</h1>
            <div className="label--container">
                <div>Welcome to your Profile</div>
                <div id="label">
                    <div id="home">Home</div>
                    <div>{`>`}</div>
                    <div id="profile">Profile</div>
                </div>
            </div>
            <div className="account--info">
                <div>
                    <img />
                    <h1>Welcome, John Smith</h1>
                    <div>
                        {unverif}
                    </div>
                    <div>
                        <img />
                        <div>Verify account</div>
                    </div>
                    <div></div>
                    <div>
                        <img />
                        <div>Two-factor Authentication (2FA)</div>
                    </div>
                </div>
                <div>
                    <h1>Following</h1>
                    <div className="following--container">
                        <Following />
                        <Following />
                        <Following />
                        <Following />
                    </div>
                </div>
            </div>

            <div className="label--container">
                <div>Recently Purchased NFTs</div>
            </div>
            <div className="purchase--container">
                <Purchased />
                <Purchased />
                <Purchased />
                <Purchased />
            </div>
            <div className="label--container">
                <div>My Collections</div>
            </div>
            <div className="collection--container">
                <Collection />
                <Collection />
                <Collection />
                <Collection />
            </div>
        </main>
    )
}

export default Profile;