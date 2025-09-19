import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    const mapIcon = document.querySelector('.icon.map');
    if (mapIcon) {
      mapIcon.addEventListener('mouseenter', () => {
        mapIcon.src = mapIcon.dataset.gif;
      });
      mapIcon.addEventListener('mouseleave', () => {
        mapIcon.src = '/img/ubicacion1.png';
      });
    }
  }, []);

  return (
    <section id="inicio" className="hero">
      <div className="contenido-hero aparecer">
        
        <h2>Agencia especializada en diseño de webs corporativas</h2>
        <p>¡Haz que te conozcan y aumenta tu presencia y tu visibilidad online! Construye tu propia web a medida y muestra tu negocio y tu marca al mundo.
<br/>Nos sentamos contigo para conocer tus necesidades y las trasladamos a un proyecto adaptado que se ajuste a tu presupuesto y a tus expectativas.</p>
        <div className="ubicacion">
          <img
            src="/img/ubicacion1.png"
            className="icon map"
            width="88"
            height="88"
            data-gif="/img/ubicacion.gif"
            alt="Ubicación Icon"
          />
          <p>España, Almeria</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
