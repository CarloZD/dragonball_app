import ContactForm from "../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contáctanos</h1>
      <p className="text-center mb-5">
        Si tienes alguna duda o sugerencia, envíanos un mensaje.
      </p>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
