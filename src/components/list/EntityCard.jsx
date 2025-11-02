import React from "react";

const EntityCard = ({ entity }) => {
  return (
    <div className="card h-100 shadow-sm">
      <div style={{ height: "300px", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
        <img
          src={entity.image}
          alt={entity.name}
          className="card-img-top"
          style={{ 
            height: "100%", 
            width: "100%",
            objectFit: "contain",
            objectPosition: "center"
          }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title fw-bold">{entity.name}</h5>
        <p className="card-text mb-1">
          <strong>Raza:</strong> {entity.race || "Desconocida"}
        </p>
        <p className="card-text mb-1">
          <strong>Ki:</strong> {entity.ki || "No disponible"}
        </p>
        {entity.affiliation && (
          <p className="card-text">
            <strong>Afiliación:</strong> {entity.affiliation}
          </p>
        )}
      </div>
    </div>
  );
};

export default EntityCard;