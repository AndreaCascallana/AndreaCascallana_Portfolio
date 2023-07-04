import React from "react";

const ProyectSingle = (props) => {
  return (
    <div className="card">
      <figure>
        <img src={props.picture} alt={props.alt} />
      </figure>
      <div className="card-body">
        <div className="card-text-content">
          <h2 className="card-title mb-2 lg:mb-0">{props.name}</h2>
          <p>{props.description}</p>
        </div>
        <div className="card-actions">
          <a href={props.url} className="btn btn-primary" target="_blank">
            Ver proyecto
            <span className="material-symbols-outlined">arrow_outward</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProyectSingle;
