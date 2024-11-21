import React, { useState } from 'react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('form')
  const [cvData, setCvData] = useState({
    personalInfo: { name: '', lasthname: '', email: '', phone: '', address: '' },
    education: [{ institution: '', degree: '', date: '' }],
    experience: [{ company: '', position: '', date: '', description: '' }],
    skills: '',
    awards: '',
    publications: ''
  })

  const handleInputChange = (section, field, value, index = 0) => {
    setCvData(prevData => ({
      ...prevData,
      [section]: Array.isArray(prevData[section])
        ? prevData[section].map((item, i) => i === index ? { ...item, [field]: value } : item)
        : { ...prevData[section], [field]: value }
    }))
  }

  const addEntry = (section) => {
    setCvData(prevData => ({
      ...prevData,
      [section]: [...prevData[section], section === 'education' 
        ? { institution: '', degree: '', date: '' }
        : { company: '', position: '', date: '', description: '' }
      ]
    }))
  }

  const deleteEntry = (section, index) => {
    setCvData(prevData => ({
      ...prevData,
      [section]: prevData[section].filter((_, i) => i !== index)
    }));
  };

  return (
    <div className='pt-4 ml-44 bg-black dark:bg-white text-white dark:text-black'>
      <h1 className="text-2xl font-bold mb-4">Generador de CV Harvard</h1>
      <div className="mb-4">
        <div className="flex border-b border-gray-200">
          <button
            className={`py-2 px-4 ${activeTab === 'form' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('form')}
          >
            Formulario
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'preview' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('preview')}
          >
            Vista Previa
          </button>
        </div>
      </div>
      
      {activeTab === 'form' ? (
        <div className="space-y-6">
          {/* Personal Info */}
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">Información Personal</h2>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Nombres"
                value={cvData.personalInfo.name}
                onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Apellidos"
                value={cvData.personalInfo.lastname}
                onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                value={cvData.personalInfo.email}
                onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="tel"
                placeholder="Teléfono"
                value={cvData.personalInfo.phone}
                onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Dirección"
                value={cvData.personalInfo.address}
                onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
              />
            </div>
            {/* Other personal info inputs... */}
          </div>

          {/* Education Section */}
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">Educación</h2>
            {cvData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                  type="text"
                  placeholder="Institución"
                  value={edu.institution}
                  onChange={(e) => handleInputChange('education', 'institution', e.target.value, index)}
                />
                
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                  type="text"
                  placeholder="Título"
                  value={edu.degree}
                  onChange={(e) => handleInputChange('education', 'degree', e.target.value, index)}
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Fecha"
                  value={edu.date}
                  onChange={(e) => handleInputChange('education', 'date', e.target.value, index)}
                />
                {/* Other education fields... */}
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => deleteEntry('education', index)}
                >
                  Eliminar
                </button>
              </div>
            ))}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => addEntry('education')}
            >
              Agregar Educación
            </button>
          </div>

          {/* Experience Section */}
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">Experiencia Profesional</h2>
            {cvData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                  type="text"
                  placeholder="Empresa"
                  value={exp.company}
                  onChange={(e) => handleInputChange('experience', 'company', e.target.value, index)}
                />
                
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                  type="text"
                  placeholder="Puesto"
                  value={exp.position}
                  onChange={(e) => handleInputChange('experience', 'position', e.target.value, index)}
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                  type="text"
                  placeholder="Fecha"
                  value={exp.date}
                  onChange={(e) => handleInputChange('experience', 'date', e.target.value, index)}
                />
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Descripción"
                  value={exp.description}
                  onChange={(e) => handleInputChange('experience', 'description', e.target.value, index)}
                />
                {/* Other experience fields... */}
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => deleteEntry('experience', index)}
                >
                  Eliminar
                </button>
              </div>
            ))}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => addEntry('experience')}
            >
              Agregar Experiencia
            </button>
          </div>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">Habilidades</h2>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Lista de habilidades"
              value={cvData.skills}
              onChange={(e) => handleInputChange('skills', '', e.target.value)}
            />
          </div>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">Premios y Reconocimientos</h2>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Lista de premios y reconocimientos"
              value={cvData.awards}
              onChange={(e) => handleInputChange('awards', '', e.target.value)}
            />
          </div>

          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">Publicaciones</h2>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Lista de publicaciones"
              value={cvData.publications}
              onChange={(e) => handleInputChange('publications', '', e.target.value)}
            />
          </div>
          {/* Other sections for skills, awards, and publications... */}
        </div>
      ) : (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Preview content */}
          
        </div>
      )}
    </div>
  )
}
