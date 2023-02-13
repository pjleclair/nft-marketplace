import "./card.css"
import NFT from "./images/NFT.svg"

const Card = ({title}) => {
    
    return (
        <div className="card--container">
            <img src={NFT} alt="nft"/>
            <div id="title">{title}</div>
            <div className="info--container">
                <div className="info">
                    <div>Auction Time</div>
                    <div>Current Bid</div>
                </div>
                <div id="bid">0.05 ETH</div>
            </div>
            <div className="vals">
                <div>3h 1m 50s</div>
                <div>0.15 ETH</div>
            </div>
            <button id="bid--button">Place a Bid</button>
        </div>
    )
}

export default Card;