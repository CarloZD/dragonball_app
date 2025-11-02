import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Cambia esta URL si tu backend usa otro puerto o endpoint
    fetch("https://dragonball-api.com/api/characters?limit=12")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.items || data); // Ajuste por si el JSON tiene .items
      })
      .catch((error) => console.error("Error al obtener personajes:", error));
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold text-primary">
        Personajes de Dragon Ball
      </h1>

      <div className="row g-4">
        {characters.length > 0 ? (
          characters.map((char) => (
            <div key={char.id} className="col-sm-6 col-md-4 col-lg-3">
              <div className="card shadow-sm border-0 h-100">
                <img
                  src={char.image}
                  alt={char.name}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-dark">
                    {char.name}
                  </h5>
                  <p className="text-muted mb-2">{char.race || "Desconocido"}</p>
                  <p className="text-muted small mb-0">
                    {char.originPlanet || "Planeta desconocido"}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-muted">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="mt-3">Cargando personajes...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
