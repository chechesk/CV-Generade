import React from 'react';
import DarkMode from '../../../../Config/darkmode';
import Logo from '../../../../assets/images.png'

export default function SiteBar() {
  return (
<div className="flex bg-black dark:bg-white  text-gray-900 fixed ">
  <aside className="flex h-screen w-40 flex-col items-center border-r border-gray-200  ">
    <div className="flex h-[4.5rem] w-full items-center justify-center border-b border-gray-200 p-2">
      <img className='h-20 my-8' src={Logo} />
    </div>
    <nav className="flex flex-1 flex-col gap-y-4 pt-10 ">
      {/* <a href="#" className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50">
        <svg className="h-6 w-6 stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 9V15M9 12H15H9Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
          <div className="relative whitespace-nowrap rounded-md  px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
            <div className="absolute inset-0 -left-1 flex items-center">
              <div className="h-2 w-2 rotate-45 bg-white"></div>
            </div>
            Layouts <span className="text-gray-400">(Y)</span>
          </div>
        </div>
      </a> */}
      <ul className="mt-2 space-y-1 px-4">
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 text-nowrap"
              >
                Datos Basicos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 text-nowrap"
              >
                Cursos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 text-nowrap"
              >
                Experiencia Laboral
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 text-nowrap"
              >
                Visualizar CV
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 text-nowrap"
              >
                Generar CV
              </a>
            </li>
           
            </ul>
    </nav>

    <div className="flex flex-col items-center gap-y-4 py-10">
      <button className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
        <svg width="24" height="24" className="h-6 w-6 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 16H12.01M12 8V12V8Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    <div>

      <button className="mt-2 rounded-full bg-gray-100  ">
        <img className="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/35387401?v=4" alt="" /> 
      </button>
        <h3 className='text-white dark:text-black'>Nombre</h3>
    <DarkMode />
  </div>
    </div>
  </aside>
</div>
  );
}
