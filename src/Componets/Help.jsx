import React from "react";

function Help() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center sm:text-left">
                Help & Support
            </h1>

            <section className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 border-b border-gray-300 pb-2">
                    Frequently Asked Questions
                </h2>
                <ul className="space-y-8">
                    <li>
                        <strong className="block text-lg sm:text-xl mb-2 text-gray-900">
                            How do I place an order?
                        </strong>
                        <p className="text-gray-700 leading-relaxed">
                            You can browse products, add them to your cart, and checkout securely.
                        </p>
                    </li>
                    <li>
                        <strong className="block text-lg sm:text-xl mb-2 text-gray-900">
                            What payment methods do you accept?
                        </strong>
                        <p className="text-gray-700 leading-relaxed">
                            We accept credit cards, debit cards, and PayPal.
                        </p>
                    </li>
                    <li>
                        <strong className="block text-lg sm:text-xl mb-2 text-gray-900">
                            How do I track my order?
                        </strong>
                        <p className="text-gray-700 leading-relaxed">
                            After checkout, you'll receive a tracking number via email.
                        </p>
                    </li>
                    <li>
                        <strong className="block text-lg sm:text-xl mb-2 text-gray-900">
                            Can I return or exchange items?
                        </strong>
                        <p className="text-gray-700 leading-relaxed">
                            Yes! Please see our return policy for more details.
                        </p>
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 border-b border-gray-300 pb-2">
                    Contact Support
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    If you need more help, please{" "}
                    <a href="/contact" className="text-blue-600 hover:underline">
                        contact us
                    </a>
                    .
                </p>
            </section>
        </div>
    );
}

export default Help;
