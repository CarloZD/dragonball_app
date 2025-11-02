import React from "react";

const PopularSection = () => {
  const personajes = [
    { id: 1, nombre: "Goku", raza: "Saiyan", poder: "Ultra Instinto" },
    { id: 2, nombre: "Vegeta", raza: "Saiyan", poder: "Blue Evolution" },
    { id: 3, nombre: "Gohan", raza: "Humano/Saiyan", poder: "Beast" },
    { id: 4, nombre: "Freezer", raza: "Alienígena", poder: "Golden" },
    { id: 5, nombre: "Piccolo", raza: "Namekuseijin", poder: "Orange Piccolo" },
    { id: 6, nombre: "Beerus", raza: "Dios", poder: "Destrucción" },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold text-danger">
        Personajes Populares
      </h2>
      <div className="row">
        {personajes.map((p) => (
          <div key={p.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{p.nombre}</h5>
                <p className="card-text mb-1">Raza: {p.raza}</p>
                <p className="card-text">Poder: {p.poder}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
