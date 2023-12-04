import React from "react";

export const Porfolio = () => {
  return (
    <div>
      {/* Portfolio*/}
      <div id="portfolio">
        <div className="container ">
          {/* row gx-4 gx-lg-5 justify-content-center */}
          <div className="row gx-4 gx-lg-5 justify-content-around">
            <div className="col-12 text-center ">
              <h2 className="my-4">Portfolio</h2>
            </div>
            {/* primer Proyecto */}
            <div className="col-lg-5 col-sm-12 my-5">
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                  alt="Dogs"
                />
                <div className="card-body text-center">
                  <a href="#" className="btn btn-primary">
                    <h5 className="card-title">Dogs</h5>
                  </a>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                    <h5 className="card-title">Dogs</h5>
                  </a>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
