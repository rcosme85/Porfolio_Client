import React from "react";
import styles from "./Home.module.css";

export const Home2 = () => {
  return (
    <div className={styles.home} id="Home">
      {/* className="row min-vh-100 p-0 d-flex justify-content-center align-content-center bg-primary" */}
      <div className="row d-flex justify-content-center">
        <div className="col-6  ">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="../assets/img/FOTO.jpg"
              className="card-img-top"
              alt="foto"
            />
            <div className="card-body ">
              <h5 className="text-center fs-2">Hi, I'm Rocío</h5>
              <h6 className="text-center mb-2">FullStack Developer</h6>

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
              {/* CTA */}
              <a
                href="#about"
                className="mt-2 btn btn-success d-flex justify-content-center"
              >
                Aboutme
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
