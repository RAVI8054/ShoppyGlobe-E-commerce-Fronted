import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-green-100 text-green-900 px-1 py-10 mt-6 shadow-inner">
            {/* Full width container centered */}
            <div className="w-full flex justify-center items-center text-lg font-semibold">
                {/* Copyright centered */}
                <p className="mb-2 md:mb-0 text-center">
                    © {new Date().getFullYear()} ShoppyGlobe. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
