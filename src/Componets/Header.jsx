import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Icons
import { IoHomeOutline } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaCartPlus, FaSignInAlt } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
    const cartItems = useSelector((store) => store.cart.items);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            {/* Header Navigation */}
            <nav className="bg-green-100 px-4 py-9 shadow-md"> 
                <div className="flex justify-between items-center md:justify-between">
                    {/* Brand and Hamburger Wrapper */}
                    <div className="flex w-full justify-between items-center md:w-auto">

                        <div className="md:hidden order-1">
                            <button onClick={toggleMenu} className="text-3xl text-gray-800 hover:text-gray-600">
                                {isMenuOpen ? (
                                    <AiOutlineClose className="w-7 h-7" />
                                ) : (
                                    <AiOutlineMenu className="w-7 h-7" />
                                )}
                            </button>
                        </div>

                        <div className="text-xl font-bold text-green-900 order-2 md:order-1">
                            <Link to="/">ShoppyGlobe</Link>
                        </div>
                    </div>

                    {/* Nav links (hidden on mobile, visible on md+) */}
                    <ul
                        className={`md:flex md:items-center gap-6 text-lg font-semibold text-gray-800
            ${isMenuOpen ? "block mt-4" : "hidden"} md:mt-0 md:ml-auto`} // increased text-lg and font-semibold for items
                    >
                        <li>
                            <Link to="/" className="flex items-center gap-1 hover:text-green-600">
                                <IoHomeOutline /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="flex items-center gap-1 hover:text-green-600">
                                <MdConnectWithoutContact /> Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/help" className="flex items-center gap-1 hover:text-green-600">
                                <IoMdHelpCircleOutline /> Help
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" className="flex items-center gap-1 hover:text-green-600">
                                <FaCartPlus /> Cart: {cartItems.length}
                            </Link>
                        </li>
                        <li>
                            <Link to="/signin" className="flex items-center gap-1 hover:text-green-600">
                                <FaSignInAlt /> Sign In
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Slogan below header */}
            <p className="text-center text-green-800 text-xl italic mt-4 font-semibold">
                Your one-stop shop for everything you love!
            </p>
        </>
    );
}
