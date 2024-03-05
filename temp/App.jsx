import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function App() {
    const [auctions, setAuctions] = useState([])

    useEffect(() => {
        async function load() {
            let data = await fetch("/api/get_auctions")
            data = await data.json()
            setAuctions(data)
        }
        load()
    }, [])

    return <section>
        <h1>Ongoing Auctions</h1>
        <ul>
            {auctions.map(AuctionCard)}
        </ul>
    </section>
}

function AuctionCard(info) {
    const { title, slug, currentBid, totalBids, ends } = info
    let countdown = Date.parse(ends) - Date.now()
    let days = countdown / (3600 * 24 * 1000)

    return <li key={slug}>
        <Link to={`/auctions/${slug}`}>
            <h2>{title}</h2>
            <p>Latest bid: {currentBid}</p>
            <p>Activity: {totalBids}</p>
            <p>Time left: {Math.floor(days)}</p>
        </Link>
    </li>
}

export default App
