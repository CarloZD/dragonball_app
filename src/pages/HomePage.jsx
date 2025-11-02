import React, { useEffect, useState } from "react";
import { getCharacters } from "../services/entityService";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters(1);
        setCharacters(data.items ? data.items.slice(0, 6) : []);
      } catch (err) {
        setError("Error al cargar los personajes.");
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  if (loading)
    return <div className="text-center mt-5">Cargando personajes...</div>;

  if (error) return <div className="text-danger text-center mt-5">{error}</div>;

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Personajes Destacados de Dragon Ball</h1>
      <div className="row justify-content-center">
        {characters.map((char) => (
          <div key={char.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card shadow-lg border-0">
              <img
                src={char.image}
                alt={char.name}
                className="card-img-top img-fluid"
                style={{
                  height: "350px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{char.name}</h5>
                <p className="card-text text-muted mb-1">{char.race}</p>
                <p className="card-text">
                  {char.originPlanet || "Planeta desconocido"}
                </p>
                <button className="btn btn-primary btn-sm mt-2">
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
