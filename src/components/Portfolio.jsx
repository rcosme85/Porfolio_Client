import React from "react";
import styles from "./Porfolio.module.css"

export const Portfolio = () => {
  return (
    <div>
      <section id="porfolio" className={styles.portfolio}>
        <div className={styles.contenidoSeccion}>
          <h2>PORTFOLIO</h2>
          <div className={styles.galeria}>
            {/* Primer Proyecto */}
            <div className={styles.proyecto}>
              <img
                src="assets/img/portfolio/thumbnails/1-Dogs-650x350.jpg"
                alt
              />
              <div className={styles.overlay}>
                <h3>Link - ToDo App</h3>
                {/* <p>Fotografía</p> */}
              </div>
              <div>
                <h4 className="text-center text-success">ToDo App</h4>
                <p className="fw-light fs-6">
                  Web application that allows users to create and categorize
                  tasks to be performed.The technologies used were: Bootstrap,
                  CSS, React, Redux, JavaScript, NodeJs, Express and PostgreSQL
                </p>
              </div>
            </div>
            {/* Segundo Proyecto */}
            <div className={styles.proyecto}>
              <img
                src="assets/img/portfolio/thumbnails/1-Dogs-650x350.jpg"
                alt
              />
              <div className={styles.overlay}>
                <h3>Link - Oasis Hotel</h3>
                {/* <p>Fotografía</p> */}
              </div>
              <div>
                <h4 className="text-center text-success">Oasis Hotel</h4>
                <p className="fw-light fs-6">
                  Hotel web application, the objective of this application is to
                  search for available rooms in a period of time to make an
                  online reservation. Technologies: React, Redux,
                  Css, Tailwind, JavaScript, NodeJs, Express and PostgreSQL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
