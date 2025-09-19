// Reset y utilidades generales
import "./assets/css/reset.css";
import "./assets/css/layout.css";

// Componentes
import "./assets/css/header.css";
import "./assets/css/hero.css";
import "./assets/css/servicios.css";
import "./assets/css/sobrenosotros.css"; 
import "./assets/css/clientes.css";
import "./assets/css/ChatWidget.css";
import "./assets/css/contacto.css";
import "./assets/css/footer.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import SobreNosotros from "./components/sobrenosotros";
import Clientes from "./components/clientes";
import ChatWidget from "./components/ChatWidget";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <Hero />
        <Servicios />
        <SobreNosotros />
        <Clientes />
        <Contacto />
        <ChatWidget />
      <Footer />
    </>
  );
}

export default App;
