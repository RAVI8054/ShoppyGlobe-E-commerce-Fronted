import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        // You could send this data to an API or backend here
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    }

    return (
        <div className="max-w-3xl mx-auto p-6 sm:p-10">
            <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

            {submitted && (
                <p className="mb-6 p-4 bg-green-100 text-green-700 rounded text-center">
                    Thank you for your message!
                </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block mb-2 font-semibold">
                        Name:
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-2 font-semibold">
                        Email:
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block mb-2 font-semibold">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded transition-colors duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact;
