import "./content.css"
import Card from "../card/card.js"

const Content = () => {
    return(
        <main className="cont--container">
            <div className="discover--container">
                <div id="explore" className="discover"></div>
                <div id="explore" className="featured"></div>
            </div>
            <div className="label">
                <div>Trending Bids</div>
                <div id="selector">
                    <div>All</div>
                    <div>Artwork</div>
                    <div>Music</div>
                </div>
            </div>
            <div className="trending">
                <Card title="Liquid Wave"/>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </main>
    )
}

export default Content;