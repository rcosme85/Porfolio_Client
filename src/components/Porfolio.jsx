import React from "react";
import styles from "./Porfolio.module.css";

export const Porfolio = () => {
  return (
    <div>
      {/* Portfolio*/}
      <div id="portfolio" className={styles.portfolio}>
        {/* "container mt-5 " */}
        <div className={styles.contenidoSeccion}>
          {/* row gx-4 gx-lg-5 justify-content-center */}
          <div className="row gx-4 gx-lg-5 justify-content-around">
            <div className="col-12 text-center ">
              {/* my-4 */}
              <h2 className="">Portfolio</h2>
            </div>
            {/* Primer Proyecto - Otro Formato */}
            <div className={styles.proyecto}>
              <img
                src="assets/img/portfolio/thumbnails/1-Dogs-650x350.jpg"
                alt
              />
              <div className={styles.overlay}>
                <h3>Diseño Creativo</h3>
                <p>Fotografía</p>
              </div>
            </div>

            {/* primer Proyecto */}
            <div className="col-lg-5 col-sm-12 my-5">
              {/* style={{ width: "24rem" }} */}
              <div className="card">
                <img
                  src="assets/img/portfolio/thumbnails/1-Dogs-650x350.jpg"
                  className="card-img-top"
                  alt="toDo"
                />
                {/*   <div className={styles.overlay}>
                  <h3>ToDo App</h3>
                  <p>Link</p>
                </div> */}
                <div className="card-body text-center">
                  <a href="#" className="btn btn-primary">
                    <h5 className="card-title">ToDo App</h5>
                  </a>
                  <p className="card-text">
                    Web application that allows users to create and categorize
                    tasks to be performed. It has the functionality of:
                    Registration and Login of a user, a user can see the list of
                    their tasks to be performed, add an element (title,
                    description and category), edit an element, mark as
                    completed or incomplete, filter by category, delete an item
                    and create new categories. The technologies used were:
                    Bootstrap, CSS, React, Redux, JavaScript, NodeJs, Express,
                    PostgreSQL and Sequelize
                  </p>
                  {/* <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </div>

            {/* Segundo Proyecto */}
            <div className="col-lg-5 col-sm-12 my-5">
              {/* style={{ width: "24rem" }} */}
              <div className="card">
                <img
                  src="assets/img/portfolio/thumbnails/1-Dogs-650x350.jpg"
                  className="card-img-top"
                  alt="HotelOasis"
                />
                <div className="card-body text-center">
                  <a
                    href="https://hotel-oasis-wfkz.onrender.com/"
                    className="btn btn-primary"
                  >
                    <h5 className="card-title">Oasis Hotel</h5>
                  </a>
                  <p className="card-text">
                    Hotel web application, the objective of this application is
                    to search for available rooms in a period of time to make an
                    online reservation. The technologies used were: React,
                    Redux, Css, Tailwind, JavaScript, NodeJs, Express,
                    PostgreSQL and Sequelize
                  </p>
                  {/* <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </div>
            {/* Tercer Proyecto */}
            <div className="col-lg-5 col-sm-12">
              {/* style={{ width: "24rem" }} */}
              <div className="card">
                <img
                  src="assets/img/portfolio/thumbnails/1-Dogs-650x350.jpg"
                  className="card-img-top"
                  alt="Dogs"
                />
                <div className="card-body text-center">
                  <a href="#" className="btn btn-primary">
                    <h5 className="card-title">Soul Music</h5>
                  </a>
                  <p className="card-text">
                    Music and vinyl sales web application. On this page you can
                    register with different memberships to use the service to
                    listen, choose and create your own playList of your favorite
                    music. The technologies of: React, Redux, CSS, Bootstrap,
                    Node, Express, PostgreSQL and Sequelize were used.
                  </p>
                  {/* <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </div>
            {/* Cuarto Proyecto */}
            <div className="col-lg-5 col-sm-12">
              {/* style={{ width: "24rem" }} */}
              <div className="card">
                <img
                  src="assets/img/portfolio/thumbnails/1-Dogs-650x350.jpg"
                  className="card-img-top"
                  alt="Dogs"
                />
                <div className="card-body text-center">
                  <a href="#" className="btn btn-primary">
                    <h5 className="card-title">Dogs</h5>
                  </a>
                  <p className="card-text">
                    Construction of a Single Page Application from the API
                    (TheDogApi) in which you can: Search for dogs, view dog
                    information, filter them, sort them and create new dogs.
                    Additionally, you can obtain the existing temperaments of
                    each dog by fetching them from the API, then saving them to
                    the database for later consumption from there. The
                    technologies of: React, Redux, Node, JavaScript, Express,
                    PostgreSQL and Sequelize were used.
                  </p>
                  {/* <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </div>
            {/* Otro Proyecto */}
            {/*  <div className="col-lg-6 col-sm-12">
              <a
                className="portfolio-box"
                href="assets/img/portfolio/fullsize/1-Dogs.jpg"
                title="Project Dogs"
              >
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/thumbnails/1-Dogs-650x350.jpg"
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
