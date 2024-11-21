import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Asegúrate de importar useDispatch
import { registerUser } from '../../../Redux/Reducer/LoginConfig';
import Logo from '../../../assets/pexels.png'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const resultAction = await dispatch(registerUser({ email, password, name, lastname }));
            if (registerUser.fulfilled.match(resultAction)) {
                navigate('/dashboard');
            } else {
                console.error('Error during registration:', resultAction.payload || 'Unknown error');
            }
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src="https://images.pexels.com/photos/783737/pexels-photo-783737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>

                <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="max-w-xl lg:max-w-3xl">
                        <a className="block text-blue-600" href="/">
                            <span className="sr-only">Home</span>
                            <img src={Logo}className='rounded-[100%] h-20' alt="icon" />
                        </a>

                        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Welcome to Squid 🦑
                        </h1>

                        <p className="mt-4 leading-relaxed text-gray-500">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                            quibusdam aperiam voluptatum.
                        </p>

                        <form onSubmit={handleRegister} className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    name="FirstName"
                                    id="FirstName"
                                    onChange={(e) => setName(e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="First Name"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    name="LastName"
                                    id="LastName"
                                    onChange={(e) => setLastname(e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="Last Name"
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="************"
                                />
                            </div>

                            <div className="col-span-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    {loading ? "Loading..." : "Create account"}
                                </button>
                             <a className=' ml-4 w-32 inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'   href="/login"> Back Login</a>
                            </div>

                            {error && (
                                <div className="col-span-6 text-red-600">
                                    {error}
                                </div>
                            )}
                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
}
