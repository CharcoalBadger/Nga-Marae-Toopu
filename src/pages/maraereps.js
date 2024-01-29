import React from "react";

export default function MaraeRepresentative({ maraeName, representatives }) {
  return (
    <div className="marae-rep-container">
      <h3 className="marae-name">{maraeName}</h3>
      {representatives.map((rep, index) => (
        <div key={index} className="rep-details">
          <p>
            <strong>Name:</strong> {rep.firstName} {rep.lastName}
          </p>
          <p>
            <strong>Email:</strong> {rep.email}
          </p>
          <p>
            <strong>Marae:</strong> {rep.marae || "Not Specified"}
          </p>
        </div>
      ))}
    </div>
  );
}
