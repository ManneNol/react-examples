import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HomePage from './HomePage.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SellerPage from './SellerPage.jsx'

const router = createBrowserRouter([
    {
        path: "/", element: <App />, children: [
            { index: true, element: <HomePage /> },
            { path: "seller", element: <SellerPage /> }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
