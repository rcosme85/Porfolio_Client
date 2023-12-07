import React from "react";
import styles from "./Home.module.css";


export const Home = () => {
  return (
    <div className={styles.home} id="Home">
      {/* className="row min-vh-100 p-0 d-flex justify-content-center align-content-center bg-primary" */}
      <div className="row d-flex justify-content-center">
        <div className="col-6  ">
          <div className="card" style={{ width: "16rem" }}>
            <img
              src="../assets/img/FOTO.jpg"
              className="card-img-top img-fluid"
              alt="foto"
            />
            <div className="card-body ">
              <h5 className="text-center fs-2">Hi, I'm Rocío</h5>
              <h6 className="text-center mb-2">Web FullStack Developer</h6>

              {/* Skills*/}
              <div className="d-flex justify-content-center ">
                

              </div>
              {/* CTA */}
              <a
                href="#contact"
                className="mt-2 btn btn-success d-flex justify-content-center"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
