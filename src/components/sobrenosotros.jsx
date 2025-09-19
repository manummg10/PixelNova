import { useEffect } from "react";

export default function SobreNosotros() {
  useEffect(() => {
    const cards = document.querySelectorAll('.inner-card');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-visible');
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="sobre-nosotros" className="sobre-nosotros">
      <div className="container">
        <div className="sobre-nosotros-card">
          <h2 className="title">Sobre Nosotros</h2>
          <p className="intro">
            En <span className="highlight">PixelNova</span> creemos que un buen 
            diseño y desarrollo web no solo se trata de crear páginas bonitas, sino de 
            construir experiencias digitales que conecten con las personas y generen 
            resultados para los negocios.
          </p>

          <div className="inner-cards">
            <div className="inner-card">
              <h3>Nuestra misión</h3>
              <p>
                Ayudar a emprendedores, pequeñas empresas y marcas a crecer en el mundo digital 
                mediante sitios web modernos, aplicaciones web seguras y tiendas online efectivas.
              </p>
            </div>

            <div className="inner-card">
              <h3>¿Por qué elegirnos?</h3>
              <ul>
                <li>🎨 <span>Diseño atractivo y funcional</span>: Cada detalle cuenta para que tu web sea única.</li>
                <li>⚡ <span>Rendimiento y seguridad</span>: Desarrollamos proyectos rápidos, estables y seguros.</li>
                <li>📱 <span>Adaptabilidad total</span>: Tu web lista para cualquier dispositivo.</li>
                <li>🤝 <span>Atención personalizada</span>: Te acompañamos en todo el proceso.</li>
              </ul>
            </div>

            <div className="inner-card">
              <h3>Nuestra visión</h3>
              <p>
                Ser tu aliado digital de confianza, creando proyectos que no solo cumplan con tus 
                expectativas, sino que las superen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

