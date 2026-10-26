feat
import { useState } from "react";

export default function ActividadItem({
  titulo,
  tiempo,
  tipo,
  descripcion,
}) {
  const [expandido, setExpandido] = useState(false);

  return (
    <article
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "18px",
        padding: "24px",
        margin: "18px 0",
        boxShadow: "0 8px 24px rgba(15, 76, 129, 0.07)",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Línea decorativa superior */}
      <div
        style={{
          height: "5px",
          background:
            "linear-gradient(90deg, #2563eb, #06b6d4)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      />

      {/* Información de la actividad */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "5px",
        }}
      >
        <span
          style={{
            background: "#eff6ff",
            color: "#1d4ed8",
            padding: "7px 12px",
            borderRadius: "30px",
            fontSize: "12px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          📚 {tipo}
        </span>

        <span
          style={{
            background: "#f0fdf4",
            color: "#15803d",
            padding: "7px 12px",
            borderRadius: "30px",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          ⏱️ {tiempo}
        </span>
      </div>

      {/* Título */}
      <h3
        style={{
          color: "#0f172a",
          fontSize: "21px",
          fontWeight: "800",
          lineHeight: "1.4",
          margin: "20px 0 10px",
        }}
      >
        {titulo}
      </h3>

      <p
        style={{
          color: "#64748b",
          fontSize: "14px",
          margin: "0 0 20px",
          lineHeight: "1.7",
        }}
      >
        Actividad de aprendizaje diseñada para fortalecer
        los conocimientos y habilidades de los estudiantes.
      </p>

      {/* Botón interactivo */}
      <button
        type="button"
        onClick={() => setExpandido(!expandido)}
        aria-expanded={expandido}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          background: expandido
            ? "#e2e8f0"
            : "linear-gradient(135deg, #1d4ed8, #0f766e)",
          color: expandido ? "#334155" : "#ffffff",
          border: "none",
          padding: "12px 18px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "700",
          transition: "all 0.25s ease",
        }}
      >
        {expandido
          ? "Ocultar descripción ↑"
          : "Ver detalle pedagógico →"}
      </button>

      {/* Descripción desplegable */}
      {expandido && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "#f8fafc",
            borderRadius: "12px",
            borderLeft: "4px solid #2563eb",
            animation: "aparecer 0.3s ease",
          }}
        >
          <h4
            style={{
              margin: "0 0 10px",
              color: "#1e40af",
              fontSize: "16px",
            }}
          >
            🎯 Detalle pedagógico
          </h4>

          <p
            style={{
              margin: 0,
              color: "#334155",
              fontSize: "14px",
              lineHeight: "1.8",
              whiteSpace: "pre-line",
            }}
          >
            {descripcion}
          </p>
        </div>
      )}

      <style>
        {`
          @keyframes aparecer {
            from {
              opacity: 0;
              transform: translateY(-8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </article>
  );
}
