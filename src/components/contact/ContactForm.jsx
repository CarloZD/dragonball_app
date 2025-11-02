import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Validaciones en tiempo real
  const validate = (name, value) => {
    let error = "";

    if (name === "nombre" && value.trim().length < 3) {
      error = "El nombre debe tener al menos 3 caracteres";
    } else if (
      name === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      error = "Correo electrónico no válido";
    } else if (name === "asunto" && !value.trim()) {
      error = "El asunto es requerido";
    } else if (name === "mensaje" && value.trim().length < 10) {
      error = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Actualizar formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  // Enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar todo antes de enviar
    let valid = true;
    Object.keys(form).forEach((key) => {
      validate(key, form[key]);
      if (form[key].trim() === "" || errors[key]) valid = false;
    });

    if (!valid) {
      setSuccess("");
      return;
    }

    // Simula envío exitoso
    setTimeout(() => {
      setSuccess("¡Tu mensaje ha sido enviado con éxito!");
      setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
      setErrors({});
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {success && (
        <div className="alert alert-success text-center">{success}</div>
      )}

      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          name="nombre"
          className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
          value={form.nombre}
          onChange={handleChange}
        />
        {errors.nombre && (
          <div className="invalid-feedback">{errors.nombre}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Correo electrónico</label>
        <input
          type="email"
          name="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Asunto</label>
        <input
          type="text"
          name="asunto"
          className={`form-control ${errors.asunto ? "is-invalid" : ""}`}
          value={form.asunto}
          onChange={handleChange}
        />
        {errors.asunto && (
          <div className="invalid-feedback">{errors.asunto}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Mensaje</label>
        <textarea
          name="mensaje"
          rows="4"
          className={`form-control ${errors.mensaje ? "is-invalid" : ""}`}
          value={form.mensaje}
          onChange={handleChange}
        ></textarea>
        {errors.mensaje && (
          <div className="invalid-feedback">{errors.mensaje}</div>
        )}
      </div>

      <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
            setErrors({});
            setSuccess("");
          }}
        >
          Limpiar
        </button>
      </div>
    </form>
  );
}
