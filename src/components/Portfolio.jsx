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
                src="assets/img/portfolio/ToDo-F.jpg"
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
                src="assets/img/portfolio/HotelOasis-2.jpg"
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
                  online reservation. Technologies: React, Redux, Css, Tailwind,
                  JavaScript, NodeJs, Express and PostgreSQL
                </p>
              </div>
            </div>
            {/* Tercer Proyecto */}
            <div className={styles.proyecto}>
              <img
                src="assets/img/portfolio/SoulMusic-2.png"
                alt
              />
              <div className={styles.overlay}>
                <h3>Link - Soul Music</h3>
                {/* <p>Fotografía</p> */}
              </div>
              <div>
                <h4 className="text-center text-success">Soul Music</h4>
                <p className="fw-light fs-6">
                  Music and vinyl sales web application. You can register to use
                  the service to choose and create your own playList of your
                  favorite music. The following technologies were used: React,
                  CSS, Bootstrap, Node, Express and PostgreSQL
                </p>
              </div>
            </div>
            {/* Cuarto Proyecto */}
            <div className={styles.proyecto}>
              <img
                src="assets/img/portfolio/1-Dogs-650x350.jpg"
                alt
              />
              <div className={styles.overlay}>
                <h3>Link - Dogs</h3>
                {/* <p>Fotografía</p> */}
              </div>
              <div>
                <h4 className="text-center text-success">Dogs</h4>
                <p className="fw-light fs-6">
                  Construction of a Single Page Application from the API
                  (TheDogApi) in which you can: Search, filter, order and create
                  new dogs. The technologies of: React, Redux, CSS, Node,
                  JavaScript, Express, PostgreSQL and Sequelize were used.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
