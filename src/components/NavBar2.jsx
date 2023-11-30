import React from "react";

export const NavBar2 = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a href="#" className="navbar-brand">
            Logotipo
          </a>
          {/* Botón con icono para celulares */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#contenidoMenu"
            aria-controls="contenidoMenu"
            aria-expanded="false"
            aria-label="Mostrar/Ocultar Navegacion"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="contenidoMenu">
            {/* Enlaces */}
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Inicio
                </a>
              </li>
              {/* Dropdown */}
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  id="SubmenuProductos"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </a>
                {/* Sub-elementos */}
                <ul
                  className="dropdown-menu"
                  aria-labelledby="SubmenuProductos"
                >
                  <li>
                    <a href="#" className="dropdown-item">
                      Computadoras
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Laptops
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Smartphones
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Drones
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Accesorios
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contacto
                </a>
              </li>
            </ul>
            {/* Formulario de búsqueda */}
            <form action className="d-flex">
              <input
                type="text"
                className="form-control me-2"
                aria-label="Buscar"
                placeholder="Buscar"
              />
              <button className="btn btn-primary" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
