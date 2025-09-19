function Contacto() {
  return (
    <section>
      
      <form className="formulario aparecer">
        <h2 id="contacto" className="contacto">Contactános llenando todos los campos</h2><br />
        <fieldset>
          

          <div className="contenedor-campos">
            <div className="campo">
              <label>Nombre</label>
              <input className="input-text" type="text" placeholder="Tu Nombre" />
            </div>

            <div className="campo">
              <label>Teléfono</label>
              <input className="input-text" type="tel" placeholder="Tu Teléfono" />
            </div>

            <div className="campo">
              <label>Correo</label>
              <input className="input-text" type="email" placeholder="Tu Email" />
            </div>

            <div className="campo">
              <label>Mensaje</label>
              <textarea className="input-text"></textarea>
            </div>
          </div>

          <div className="alinear-derecha flex">
            <input className="boton w-sm-100" type="submit" value="Enviar" />
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default Contacto;
