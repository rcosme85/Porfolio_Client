import React from "react";

export const Footer = () => {
  return (
    <div>
      {/* Footer*/}
      <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="row d-flex justify-content-around">
            <div className="col-3">
              <a
                href="#Home"
                className="mt-2 btn btn-secondary d-flex justify-content-center"
              >
                Home
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col">
              {/* Redes Sociales */}
              <div className="d-flex justify-content-center ">
                <a href="#">
                  <i className="bi bi-facebook px-2" />
                </a>
                <a href="#">
                  <i className="bi bi-github px-2" />
                </a>
                <a href="#">
                  <i className="bi bi-linkedin px-2" />
                </a>
              </div>
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
