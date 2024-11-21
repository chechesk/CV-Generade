import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import App from "../App";
import NotFound from "../Dashboard/Components/404/notFound";
import SiteBar from '../Dashboard/Components/Nav/sideBar/SiteBar';
import Dasboard from '../Pages/Dasboard/dasboard';
import Login from '../Dashboard/Components/Login/login';
import SignUp from '../Dashboard/Components/Login/SignUp';
import FormularioRegistro from '../Dashboard/Components/Form/form';
import PasswordReset from '../Dashboard/Components/Login/missingPassword';
import Blog from '../Landing/Blog/Blog';
import ProtectedRoute from '../Dashboard/ProtectRouter/protector';
import NavLanding from '../Dashboard/Components/Nav/nav/Nav';
import Footer from '../Landing/Footer/Footer';

function Layout() {
    const location = useLocation();
    const isDashboardPage = location.pathname.startsWith('/dashboard');
    const isBlog = location.pathname.includes('/blog');
    const showFooter = ['/', '/about', '/blog'].includes(location.pathname);
    const showFooterDash = location.pathname.startsWith('/dashboard');

    return (
        <>
            {isDashboardPage && <SiteBar />}
            {isBlog && <NavLanding />}
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/login' element={<Login />} />
                <Route path='/missing' element={<PasswordReset />} />
                <Route path='/register' element={<SignUp />} />
                
                {/* Protected Routes */}
                <Route path='/dashboard' element={<ProtectedRoute element={Dasboard} />} />
                <Route path='/dashboard/registro' element={<ProtectedRoute element={<FormularioRegistro />} />} />
                <Route path='/blog' element={<Blog />} />

                <Route path='/about' element={<h1>About</h1>} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            {showFooter && <Footer />} {/* Coloca el Footer al final */}
            {showFooterDash && <Footer />} {/* Coloca el Footer al final */}
        </>
    );
}

function AppRouter() {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}

export default AppRouter;
