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