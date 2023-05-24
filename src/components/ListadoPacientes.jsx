import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, delPaciente }) => {

    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-auto">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>

                    {
                        pacientes.map((paciente) => {
                            return (
                                <Paciente
                                    key={paciente.id}
                                    paciente={paciente}
                                    setPaciente={setPaciente}
                                    delPaciente={delPaciente}
                                />
                            )
                        })
                    }
                </>
            ) :
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacientes {''}
                        <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            }



        </div>
    )
}

export default ListadoPacientes