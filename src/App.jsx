import { Formulario } from "./components/Formulario"
import Header from "./components/header"
import { ListadoPacientes } from "./components/ListadoPacientes"


function App() {

  return (
    <div className=" container mx-auto , mt-20">
    
      <Header />
      <Formulario />
      <ListadoPacientes/>
    </div>
  )
}

export default App
