import React from "react";

const EntityCard = ({ entity }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition">
      <img
        src={entity.image}
        alt={entity.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{entity.name}</h3>
        <p className="text-sm text-gray-600">
          <strong>Raza:</strong> {entity.race || "Desconocida"}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Ki:</strong> {entity.ki || "No disponible"}
        </p>
      </div>
    </div>
  );
};

export default EntityCard;
