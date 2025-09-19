import { useEffect } from "react";

export default function Clientes() {
  useEffect(() => {
    const cards = document.querySelectorAll('.cliente-card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
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
    <section id="clientes" className="clientes">
      <div className="container">
        <h2 className="title">Nuestros Clientes</h2>
        <p className="intro">
          Hemos tenido el privilegio de trabajar con clientes de diferentes sectores, 
          ayudándolos a potenciar su presencia digital y alcanzar sus objetivos en línea.
        </p>

        <div className="clientes-grid">
          <div className="cliente-card">
            <img src="/img/cliente1.jpg" alt="Cliente 1" />
            <h3>TechNova Solutions</h3>
            <p>Desarrollo de sitio web corporativo con diseño responsivo y optimización SEO.</p>
          </div>

          <div className="cliente-card">
            <img src="/img/cliente2.jpg" alt="Cliente 2" />
            <h3>EcoMarket Online</h3>
            <p>Implementación de tienda online con pasarela de pagos segura e intuitiva.</p>
          </div>

          <div className="cliente-card">
            <img src="/img/cliente3.jpg" alt="Cliente 3" />
            <h3>GlobalLogix</h3>
            <p>Aplicación web personalizada para la gestión de procesos internos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

