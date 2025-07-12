import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Header() {

   const cartItems = useSelector((store)=>store.cart.items)
    return (
        <>
        <nav className="border-2 bg-amber-500">
            <div>
                <p>logo</p>
            </div>
            <ul>
                <li><Link to="/"> home</Link></li>
                <li>about</li>
                <li>contact us</li>
                <li>Cart:{cartItems.length}</li>
                <li><Link to="/cart">cart</Link> </li>
                <li>sign in</li>
            </ul>
        </nav>
         <h1 className="text-2xl font-bold text-center my-4">ShoppyGlobe</h1>
        </>
    )
}