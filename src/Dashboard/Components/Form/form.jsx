import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../Config/db';


const FormularioRegistro = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    ciudad: '',
    pais: '',
    correo: '',
    telefono: '',
    empresa: '',
    cargo: '',
    ciudadExp: '',
    paisExp: '',
    tareas: '',
    categoriasEmpresas: '',
    instituto: '',
    carrera: '',
    descripcion: '',
    ciudadEdu: '',
    paisEdu: '',
    añoFinalidad: '',
    habilidades: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, 'usuarios'), formData);
      alert('Formulario enviado con éxito');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div className='h-screen flex items-center justify-center' >
      {step === 1 && (
        <div className='flex flex-col w-fit  '>
          <h2 className='text-center text-2xl'>Datos Básicos</h2>
          <label> Nombre {" "}
          <input className='text-center' name="nombre" placeholder="Nombre" onChange={handleChange} />
          </label>
          <label> Apellido {" "} 
          <input className='text-center' name="apellido" placeholder="Apellido" onChange={handleChange} />
          </label>
          <label> Ciudad {" "} 
          <input className='ml-2 text-center' name="ciudad" placeholder="Ciudad" onChange={handleChange} />
          </label>
          <label> Pais {" "} 
          <input  className='ml-8 text-center' name="pais" placeholder="País" onChange={handleChange} />
          </label>
          <label> Correo {" "} 
          <input className='ml-3 text-center' name="correo" placeholder="Correo" onChange={handleChange} />
          </label>
          <label> Telefono {" "} 
            <input className='text-center' name="telefono" placeholder="Teléfono" onChange={handleChange} />
            </label>
          <button onClick={handleNext}>Siguiente</button>
        </div>
      )}

      {step === 2 && (
        <div className='flex flex-col w-fit  '>
          <h2 className='text-center text-2xl'>Experiencia Profesional</h2>
          <label> Empresa {" "} 
          <input className='ml-3 text-center' name="empresa" placeholder="Empresa" onChange={handleChange} /></label>
          <label> Cargo {" "} 
          <input className='ml-8 text-center' name="cargo" placeholder="Cargo" onChange={handleChange} /></label>
          <label> Ciudad  {" "} 
          <input className='ml-6 text-center' name="ciudadExp" placeholder="Ciudad" onChange={handleChange} /></label>
          <label> Pais  {" "} 
          <input className='ml-11 text-center' name="paisExp" placeholder="País" onChange={handleChange} /></label>
          <label> Tareas {" "} 
          <input className='ml-7 text-center' name="tareas" placeholder="Tareas" onChange={handleChange} /></label>
          <label> Categoria {" "} 
          <input className='ml-1 text-center' name="categoriasEmpresas" placeholder="Categorías" onChange={handleChange} />
          </label>
          <div className='flex justify-between'>
          <button onClick={handleBack}>Atrás</button>
          <button onClick={handleNext}>Siguiente</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className='flex flex-col w-fit  '>
          <h2 className='text-center text-2xl '>Experiencias Educacionales</h2>
          <label> Instituto {" "} 
          <input className='ml-7 text-center' name="instituto" placeholder="Instituto" onChange={handleChange} /></label>
          <label> Estudio {" "} 
          <input className='ml-8 text-center' name="carrera" placeholder="Carrera" onChange={handleChange} /></label>
          <label> Descripcion {" "} 
          <textarea
    id="OrderNotes"
    name="descripcion" 
    className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm border-2"
    rows="4"
    placeholder=" Descripción corta"
    onChange={handleChange}
    ></textarea>
    </label>
          <label> Ciudad {" "} 
          <input className='ml-9 text-center' name="ciudadEdu" placeholder="Ciudad" onChange={handleChange} /></label>
          <label className=''> Pais {" "} 
          <input className='ml-14 text-center' name="paisEdu" placeholder="País" onChange={handleChange} />
          </label>
          <label> Año {" "} 
          <input className='ml-14 text-center' name="añoFinalidad" placeholder="Año de Finalidad" onChange={handleChange} /></label>
          <div className='flex justify-between'>
          <button onClick={handleBack}>Atrás</button>
          <button onClick={handleNext}>Siguiente</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className='flex flex-col w-fit  '>
          <h2 className='text-center text-2xl'>Habilidades Adicionales</h2>
          <input name="habilidades" placeholder="Habilidades" onChange={handleChange} />
          <div className='flex justify-between'>
          <button onClick={handleBack}>Atrás</button>
          <button onClick={handleSubmit}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormularioRegistro;
