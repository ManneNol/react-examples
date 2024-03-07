import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function AuctionPage() {
    const { slug } = useParams()
    const [details, setDetails] = useState(null)

    useEffect(() => {
        async function load() {
            let data = await fetch("/api/get_auctions/" + slug)
            if (data.ok) {
                data = await data.json()
                setDetails(data)
            } else {
                setDetails(null)
            }
        }
        if (slug) {
            load()
        } else {
            setDetails(null)
        }
    }, [slug])


    if (!details) {
        return <section>
            <h2>Something went wrong</h2>
        </section>
    }

    return <section>
        <h2>{details.title}</h2>
        <p>{details.description}</p>
    </section>
}


export default AuctionPage
