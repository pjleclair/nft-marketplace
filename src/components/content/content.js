import "./content.css"
import Card from "../card/card.js"
import Featured from "./images/Featured.svg"
import Avatar from "./images/Avatar.svg"

const Content = () => {
    return(
        <main className="cont--container">
            <div className="discover--container">
                <div id="explore" className="discover">
                    <div className="disc--title">
                        Discover, Collect, Sell and Create your NFT
                    </div>
                    <div id="desc">
                        Digital marketplace for crypto collectibles and non-fungible tokens
                    </div>
                    <div className="button--container">
                        <button id="discover">Explore</button>
                        <button id="create">Create</button>
                    </div>
                </div>
                <div id="explore" className="featured">
                    <img id="featured" src={Featured} alt="featured"/>
                    <div className="ft--container">
                        <div className="ft--user-container">
                            <img src={Avatar} alt="avatar"/>
                            <div>John Abraham</div>
                            <div id="status"></div>
                        </div>
                        <div className="ft--title">Brighten LQ</div>
                        <div className="ft--auction">
                            <div>Auction time</div>
                            <div id="current-bid">
                                <div>Current Bid</div>
                                <div>:</div>
                                <div id="bid">0.05 ETH</div>
                            </div>
                        </div>
                        <div className="vals">
                            <div>3h 1m 50s</div>
                            <div>0.15 ETH</div>
                        </div>
                        <div className="button--container">
                            <button id="place-bid">Place a Bid</button>
                            <button id="details">Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="label">
                <div>Trending Bids</div>
                <div id="selector">
                    <div id="selected" className="selector--item">All</div>
                    <div className="selector--item">Artwork</div>
                    <div className="selector--item">Music</div>
                </div>
            </div>
            <div className="trending">
                <Card title="Liquid Wave"/>
                <Card title="Liquid Wave" />
                <Card title="Liquid Wave" />
                <Card title="Liquid Wave" />
                <Card title="Liquid Wave" />
                <Card title="Liquid Wave" />
                <Card title="Liquid Wave" />
                <Card title="Liquid Wave" />
            </div>
        </main>
    )
}

export default Content;