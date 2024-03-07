import { Link, Outlet } from "react-router-dom"

function App() {
    return <>
        <header>
            <h1>Tiny Auction!</h1>
        </header>
        <nav>
            <Link to={"/"}>Home </Link>
            <Link to={"/seller"}>Seller</Link>
        </nav>
        <main>
            <Outlet />
        </main>
    </>
}

export default App
