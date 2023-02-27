import "./profile.css"
import pfp from "../header/images/Avatar.svg"
import Verify from "./images/Verify.svg"
import TWOFA from "./images/2FA.svg"
import Avatar from "./images/Avatar.svg"
import NFT from "../card/images/NFT.svg"

const Profile = ({displayMode}) => {
    const unverif = "Looks like you are not verified yet. Verify yourself to use the full potential of NFT Marketplace."

    const Following = () => {
        return(
            <div className={followingContainerClass}>
                <div className="following">
                    <img src={Avatar} alt="pfp"/>
                    <div>
                        <h1>Papaya</h1>
                        <div>60 items</div>
                    </div>
                </div>
                <button>Unfollow</button>
            </div>
        )
    }

    const Purchased = () => {
        return(
            <div id={purchasedId}>
                <img id="nft" src={NFT} alt="purchased"/>
                <img id="pfp" src={Avatar} alt="pfp"/>
                <h1>Liquid Wave</h1>
            </div>
        )
    }

    const Collection = () => {
        return(
            <div id={collectionId}>
                <img id="nft" src={NFT} alt="collection"/>
                <img id="pfp" src={Avatar} alt="pfp"/>
                <h1>Liquid Wave</h1>
            </div>
        )
    }

    let profileContainerClass, verifContainerClass, followingContainerClass, purchasedId, collectionId

    if (displayMode === 'dark') {
        profileContainerClass = "profile--container"
        verifContainerClass = "verif--container"
        followingContainerClass = "following--container"
        purchasedId = "purchased"
        collectionId = "collection"
    } else {
        profileContainerClass = "profile--container-lm"
        verifContainerClass = "verif--container-lm"
        followingContainerClass = "following--container-lm"
        purchasedId = "purchased-lm"
        collectionId = "collection-lm"
    }

    return (
        <main className={profileContainerClass}>
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
                <div className={verifContainerClass}>
                    <img src={pfp} alt="pfp"/>
                    <h1>Welcome, Jane Doe</h1>
                    <div className="verif--desc">
                        {unverif}
                    </div>
                    <div className="verif--action">
                        <img src={Verify} alt="verify"/>
                        <div>Verify account</div>
                    </div>
                    <div id="divider"></div>
                    <div className="verif--action">
                        <img src={TWOFA} alt="2fa"/>
                        <div>Two-factor Authentication (2FA)</div>
                    </div>
                </div>
                <div>
                    <h1>Following</h1>
                    <div className="following--element-container">
                        <Following />
                        <Following />
                        <Following />
                        <Following />
                    </div>
                </div>
            </div>

            <div id="profile-label" className="label--container">
                <h1>Recently Purchased NFTs</h1>
            </div>
            <div className="purchase--container">
                <Purchased />
                <Purchased />
                <Purchased />
                <Purchased />
            </div>
            <div id="profile-label" className="label--container">
                <h1>My Collections</h1>
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