import { useState } from "react";
import ChatBot from "react-simple-chatbot";
import "../assets/css/ChatWidget.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

const steps = [
    {
      id: "intro",
      message: "¡Hola! Soy el asistente de PixelNova es una prueba en la parte frontend",
      end: true, 
    },
  ];

  return (
    <div>
      {/* Botón flotante */}
      <button
        className="chat-toggle-btn"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
      >
        {open ? "✖️" : "💬"}
      </button>

      {/* Ventana del chat */}
      <div className={`chat-widget-container ${open ? "visible" : "hidden"}`}>
        <ChatBot steps={steps} />
      </div>
    </div>
  );
}



