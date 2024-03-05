function SellerPage() {
    return <form onSubmit={postAuction}>
        <input name="title" type="text" />
        <input name="starting_bid" type="number" />
        <input name="description" type="text" />
        <input name="ends" type="date" />
        <input type="submit" value="List Auction" />
    </form>
}

async function postAuction(e) {
    e.preventDefault()
    let data = new FormData(e.target)
    data = Object.fromEntries(data)

    await fetch("/api/post_auctions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}
export default SellerPage
