import React from "react";
import { GitHubIcon } from "./Icons/GitHubIcon";
import { LinkedlnIcon } from "./Icons/LinkedlnIcon";
import { UpIcon } from "./Icons/UpIcon";


export const Footer = () => {
  return (
    <div>
      {/* Footer*/}
      <footer className="bg-light py-3">
        <div className="container px-4 px-lg-5">
          <div className="row d-flex justify-content-around">
            {/* col-1 bg-secondary rounded mb-2 */}
            <div className="col-1 mb-4">
              <a
                href="#Home"
                className="mt-1 mb-1 d-flex justify-content-center"
              >
 
                <img src="assets/img/Flecha-10x10.png" alt="flechaArriba"/>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              {/* Redes Sociales */}
              <div className="d-flex justify-content-center ">
                <a href="#">{/* <i className="bi bi-facebook px-2" /> */}</a>
                <a href="#" className="me-5">
                  {/* <i className="bi bi-github px-2" /> */}
                  <GitHubIcon />
                </a>
                <a href="#">
                  {/* <i className="bi bi-linkedin px-2" /> */}
                  <LinkedlnIcon />
                </a>
              </div>
            </div>
            <div className="col-12 text-center mt-2">
              <p>Creado por: RC - FullStack</p>
            </div>
          </div>
          {/* <div className="small text-center text-muted">
            Copyright © 2023 - Company Name
          </div> */}
        </div>
      </footer>
    </div>
  );
};
