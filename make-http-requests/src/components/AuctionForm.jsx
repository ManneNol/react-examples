
function AuctionForm() {
    return <form onSubmit={PostAuction}>
        <input name="name" type="text" />
        <input name="price" type="number" />
        <input type="submit" />
    </form>

}

async function PostAuction(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const info = Object.fromEntries(data)
    await fetch("/api/auctions", {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
    });
}

export default AuctionForm
