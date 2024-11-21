import { useEffect, useState } from "react";

const DarkMode = () => {
  const [dark, setDarkMode] = useState(() => {
    // Recupera el estado del modo oscuro de localStorage
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true'; // Devuelve true si el modo oscuro está activado
  });

  useEffect(() => {
    // Actualiza la clase en el documento HTML
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true'); // Guarda el estado en localStorage
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false'); // Guarda el estado en localStorage
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDarkMode(!dark)}
      className="mb-2 px-2 py-2 bg-gray-800 text-white rounded-[100%] dark:bg-gray-300 dark:text-black"
    >
       {dark ? (
      <span role="img" aria-label="Sun">☀️</span> // Ícono para modo claro
    ) : (
      <span role="img" aria-label="Moon">🌙</span> // Ícono para modo oscuro
    )}
      
    </button>
  );
};

export default DarkMode;
