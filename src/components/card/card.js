import "./card.css"
import NFT from "./images/NFT.svg"

const Card = ({title}) => {
    
    return (
        <div className="card--container">
            <img src={NFT} alt="nft"/>
            <div>{title}</div>
            <div>
                <div>
                    <div>Auction Time</div>
                    <div>Current Bid</div>
                </div>
                <div>0.05 ETH</div>
            </div>
            <div>
                <div>3h 1m 50s</div>
                <div>0.15 ETH</div>
            </div>
            <button>Place a Bid</button>
        </div>
    )
}

export default Card;