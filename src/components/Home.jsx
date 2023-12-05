import styles from "./Home.module.css"

export const Home = () => {
  return (
    <div>
      {/* Masthead - className="masthead"*/}
      <section className="page-section bg-info bg-opacity-50" id="Home">
        {/*  - container px-4 px-lg-5 h-100 */}
        <div className="container px-4 px-lg-5 ">
          <div className="row gx-4 gx-lg-5  justify-content-center">
            {/* <div className="col-lg-8 align-self-end">
              <h1 className="text-blue font-weight-bold"></h1>
              <hr className="divider" />
            </div> */}

            {/* col-lg-8 align-self-baseline mt-20 */}
            <div className=" col-lg-8 text-center border border-2 border-info">
              {/* <p className="text-white-75 mb-5">Hi, I'm Rocío </p> */}
              <br />
              <h2 className="text-blue font-weight-bold ">Hi, I'm Rocío</h2>
              <p className="text-white-75 mb-5">Web FullStack Developer</p>
              {/* <a className="btn btn-primary btn-xl" href="#about">Find Out More</a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
