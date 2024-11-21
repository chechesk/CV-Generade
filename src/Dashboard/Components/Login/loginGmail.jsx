import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { setUser } from '../../../Redux/Slice/LoginConfig'; // Asegúrate de tener esta acción en tu Redux

export default function GoogleLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Guarda la información del usuario en tu store de Redux
            dispatch(setUser({
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                uid: user.uid
            }));

            navigate('/dashboard'); // Redirige a la página de inicio
        } catch (error) {
            console.error('Error al iniciar sesión con Google:', error.message);
        }
    };

    return (
        <div className="text-center">
            <button
                onClick={handleGoogleLogin}
                className="inline-flex items-center rounded-lg bg-red-600 px-4 py-2 text-white font-medium hover:bg-red-700"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 12.275c0-.81-.073-1.593-.198-2.348H12v4.443h6.523c-.278 1.5-1.098 2.77-2.326 3.62v3.018h3.758c2.198-2.028 3.444-5.022 3.444-8.733z" />
                    <path d="M12 24c3.24 0 5.953-1.06 7.937-2.875l-3.758-3.018c-1.045.7-2.383 1.113-4.18 1.113-3.208 0-5.935-2.167-6.907-5.081H1.23v3.15C3.195 21.33 7.274 24 12 24z" />
                    <path d="M5.093 14.139c-.243-.7-.38-1.44-.38-2.139s.137-1.44.38-2.139V7.511H1.23C.446 9.032 0 10.752 0 12.5c0 1.748.446 3.468 1.23 4.989l3.863-3.35z" />
                    <path d="M12 4.8c1.759 0 3.33.606 4.572 1.793l3.429-3.429C17.947 1.606 15.24 0 12 0 7.274 0 3.195 2.67 1.23 6.511l3.863 3.35C6.065 6.967 8.792 4.8 12 4.8z" />
                </svg>
                Sign in with Google
            </button>
        </div>
    );
}
