import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../../Redux/Reducer/LoginConfig';
import Logo from '../../../assets/pexels.png'

export default function PasswordReset() {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const { loading, error, successMessage } = useSelector((state) => state.auth);

    const handlePasswordReset = (e) => {
        e.preventDefault();
        dispatch(resetPassword(email));
    };

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className='flex justify-center m-4 '>
            <a href="/">
            <img src={Logo} className='rounded-[100%] h-20 ' alt="icon" />
            </a>
            </div>
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Reset your password</h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Enter your email address below, and we will send you a link to reset your password.
                </p>

                <form onSubmit={handlePasswordReset} className="mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <div className="relative">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter your email"
                                required
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white disabled:opacity-50"
                        disabled={loading}
                    >
                       
                        {loading ? 'Sending...' : 'Send Password Reset Email'}
                    </button>
                    <a href="/" className="text-center block w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white disabled:opacity-50">
                    Back Home</a>
                    <p className="text-center text-sm text-gray-500">
                        No account?
                        <a className="underline" href="/register">Sign up</a>
                    </p>
                </form>

                {successMessage && (
                    <p className="mt-4 text-green-600">{successMessage}</p>
                )}
                {error && (
                    <p className="mt-4 text-red-600">{error}</p>
                )}
            </div>
        </div>
    );
}
