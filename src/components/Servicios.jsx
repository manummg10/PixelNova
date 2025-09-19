function Servicios() {
  return (
    <div className="servicios">
      <section className="servicio aparecer">
        <h3>Diseño Web</h3>
        <div className="iconos">
          <img src="/img/paleta.gif" width="40" height="40" alt="paleta Icon" />
        </div>
        <p>
          Creamos sitios web modernos, atractivos y totalmente responsivos,
          optimizados para ofrecer la mejor experiencia de usuario y potenciar la presencia online de tu marca.
        </p>
      </section>

      <section className="servicio aparecer">
        <h3>Aplicaciones Web</h3>
        <div className="iconos">
          <img src="/img/cellphone_19016624.gif" width="40" height="40" alt="cellphone Icon" />
          <img src="/img/ebook_19026279.gif" width="40" height="40" alt="ebook Icon" />
        </div>
        <p>
          Desarrollamos aplicaciones web escalables y seguras que mejoran la
          productividad de tu negocio y facilitan la interacción con tus clientes desde cualquier dispositivo.
        </p>
      </section>

      <section className="servicio aparecer">
        <h3>E-Commerce</h3>
        <div className="iconos">
          <img src="/img/buy_18873846.gif" width="40" height="40" alt="buy Icon" />
        </div>
        <p>
          Implementamos tiendas en línea completas, fáciles de administrar y diseñadas para maximizar tus
          ventas, con integración de pagos seguros y experiencias de compra intuitivas.
        </p>
      </section>
    </div>
  );
}

export default Servicios;
