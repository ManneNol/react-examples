import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HomePage from './HomePage.jsx'
import { RouterProvider, createBrowserRouter, useParams } from 'react-router-dom'
import SellerPage from './SellerPage.jsx'
import AuctionPage from "./AuctionPage"

const router = createBrowserRouter([
    {
        path: "/", element: <App />, children: [
            { index: true, element: <HomePage /> },
            { path: "seller", element: <SellerPage /> },
            { path: "auctions/:slug", element: <AuctionPage /> },
            { path: "demo/:name", element: <Demo /> },
        ]
    }
])

function Demo() {
    const { name } = useParams()
    return <p>{name}</p>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
