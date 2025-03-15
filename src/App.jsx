import Navbar from './components/navbar/navbar';
import Bienvenida from './components/bienvenida/bienvenida';
import Productos from './components/productos/productos';
import Contacto from './components/contacto/contacto';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Bienvenida />
      <Productos />
      <Contacto />
    </>
  );
}

export default App;
