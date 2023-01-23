import { useState } from "react"
import { Formulario } from "./components/Formulario"
import { Header } from "./components/header"
import { ListadoPacientes } from "./components/ListadoPacientes"


function App() {

  const [pacientes, setPacientes] = useState([]);
  const toma1Valor = (valor) => {
    console.log(valor)
  }

return (
  <div className=" container mx-auto , mt-20">
    <Header
    toma1Valor={toma1Valor}

    />
    <div className=" mt-12 md:flex">

      <Formulario />
      <ListadoPacientes />

    </div>

  </div>
)
}

export default App
