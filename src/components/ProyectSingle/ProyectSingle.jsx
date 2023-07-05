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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#f8fafc"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProyectSingle;
