import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  // URL base de la API pública de Dragon Ball
  const API_URL = "https://dragonball-api.com/api/characters?limit=9";

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(API_URL);
        setCharacters(response.data.items || []); // algunos endpoints usan .items
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-warning fw-bold">
        Personajes de Dragon Ball
      </h1>

      <div className="row justify-content-center g-4">
        {characters.map((character) => (
          <div className="col-12 col-md-6 col-lg-4" key={character.id}>
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <img
                src={character.image}
                alt={character.name}
                className="card-img-top"
                style={{
                  height: "400px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
              <div className="card-body text-center bg-light">
                <h4 className="card-title text-dark fw-bold mb-2">
                  {character.name}
                </h4>
                <p className="card-text text-secondary mb-1">
                  <strong>Raza:</strong> {character.race || "Desconocida"}
                </p>
                <p className="card-text text-secondary mb-2">
                  <strong>Planeta:</strong>{" "}
                  {character.originPlanet?.name || "Desconocido"}
                </p>
                <button className="btn btn-warning btn-sm">
                  Ver más detalles
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
