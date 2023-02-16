import "./bid.css"
import NFT from "./images/NFT.svg"
import Avatar from "./images/Avatar.svg"

const Bid = () => {
    return (
        <main className="bids--container">
            <div>
                <h1>Bids</h1>
                <div className="label--container">
                    <div>Welcome to Bids</div>
                    <div id="label">
                        <div id="home">Home</div>
                        <div>{`>`}</div>
                        <div id="bids">Bids</div>
                    </div>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="activity--container-label">
                <h1>Active Bids</h1>
                <button>Place a Bid</button>
            </div>
            <div className="activity--container">
                <div className="activity--label">
                    <div></div>
                    <div>Item List</div>
                    <div>Open Price</div>
                    <div>Your Offer</div>
                    <div>Recent Offer</div>
                    <div>Time Left</div>
                    <div>Action</div>
                </div>
                <div className="activity--panel">
                    <div></div>
                    <div className="nft--container">
                        <img id="nft" src={NFT} alt="nft"/>
                        <div className="nft--details">
                            <div id="name">Cute Cube Cool</div>
                            <div>John Abraham</div>
                        </div>
                    </div>
                    <div>0.0025 ETH</div>
                    <div>0.0025 ETH</div>
                    <div className="offer-container">
                        <img src={Avatar} alt="user"/>
                        <div>0.0025 ETH</div>
                    </div>
                    <div>2 Hours 1 Min 30s</div>
                    <div>X</div>
                </div>
            </div>
        </main>
    )
}

export default Bid;