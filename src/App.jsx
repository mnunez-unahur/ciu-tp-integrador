import { BrowserRouter, Routes, Route } from 'react-router-dom';


import NavBar from './components/NavBar'
import Inicio from './views/Inicio'
import Catalogo from './views/Catalogo'
import Componentes from './views/Componentes'
import Fabricantes from './views/Fabricantes'

function App() {
  return (
    <div>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/componentes" element={<Componentes />} />
                <Route path="/fabricantes" element={<Fabricantes />} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;