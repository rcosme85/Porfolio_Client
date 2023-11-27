import React from "react";

export const Porfolio = () => {
  return (
    <div>
      {/* Portfolio*/}
      <div id="portfolio">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-6 col-sm-12">
              <a
                className="portfolio-box"
                href="assets/img/portfolio/fullsize/1.jpg"
                title="Project Name"
              >
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/thumbnails/1.jpg"
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-sm-12">
              <a
                className="portfolio-box"
                href="assets/img/portfolio/fullsize/2.jpg"
                title="Project Name"
              >
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/thumbnails/2.jpg"
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-sm-12">
              <a
                className="portfolio-box"
                href="assets/img/portfolio/fullsize/3.jpg"
                title="Project Name"
              >
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/thumbnails/3.jpg"
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-sm-12">
              <a
                className="portfolio-box"
                href="assets/img/portfolio/fullsize/4.jpg"
                title="Project Name"
              >
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/thumbnails/4.jpg"
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
