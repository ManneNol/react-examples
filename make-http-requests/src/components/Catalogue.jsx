import { useState, useEffect } from "react";

function Catalogue() {
    const [items, setItems] = useState([])
    useEffect(() => {
        async function load() {
            const response = await fetch('/api/auctions')
            const items = await response.json()
            console.log(response)
            setItems(items)
        }
        load()
    }, [])

    return <section>
        <h2>Auction Catalogue</h2>
        <ul>
            {items.map(ItemCard)}
        </ul>
    </section>
}

function ItemCard(info) {
    const { name, price } = info
    return <li key={name}>{name}: ${price}</li>
}




export default Catalogue
