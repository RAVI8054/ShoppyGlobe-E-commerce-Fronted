import React, { useState } from "react";

function SignIn() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Basic validation example
        if (!formData.email || !formData.password) {
            setError("Please fill in all fields.");
            setSuccess(false);
            return;
        }

        // Simulate sign-in logic (replace with real auth)
        if (formData.email === "user@example.com" && formData.password === "password123") {
            setError("");
            setSuccess(true);
            // Here you might redirect or update app state on success
        } else {
            setError("Invalid email or password.");
            setSuccess(false);
        }
    }

    return (
        <div className="max-w-md mx-auto p-6 sm:p-10 bg-white rounded shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>

            {/* Error message */}
            {error && (
                <p className="mb-4 text-center text-red-600 font-semibold">{error}</p>
            )}

            {/* Success message */}
            {success && (
                <p className="mb-4 text-center text-green-600 font-semibold">
                    Signed in successfully!
                </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
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
                    <label htmlFor="password" className="block mb-2 font-semibold">
                        Password:
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded transition-colors duration-300"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default SignIn;
