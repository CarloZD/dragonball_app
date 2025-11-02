import React from "react";

const ErrorAlert = ({ message }) => {
  return (
    <div className="alert alert-danger text-center my-4" role="alert">
      <strong>Error:</strong> {message}
    </div>
  );
};

export default ErrorAlert;