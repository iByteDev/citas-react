import { useState, useEffect } from 'react'

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const getPacientesLS = () => {
      const mPacienteLS = JSON.parse(localStorage.getItem('BytePacientes'));
      mPacienteLS?.length > 0 && setPacientes(mPacienteLS);
    }

    getPacientesLS();
  }, [])

  useEffect(() => {
    localStorage.setItem('BytePacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const delPaciente = (id) => {
    const mPacientes = pacientes.filter(i => i.id !== id);
    setPacientes(mPacientes);
  }

  return (
    <div>
      <Header
      />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          delPaciente={delPaciente}
        />
      </div>
    </div>
  )
}

export default App
