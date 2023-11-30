import React from "react";

export const About = () => {
  return (
    <div>
      {/* About*/}
      <section className=" bg-dark text-white" id="about">
        <div className="container  px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-4">About me</h2>
              <hr className="divider divider-light" />
              <p className="text-white text-start mb-4">
                Hi there 👋, my name is Rocío. I am a Systems Engineer with
                specialization in full Stack Developer. I am oriented towards
                the development of technological projects of both the FrontEnd
                and the BackEnd
              </p>
              <p className="text-start">
                I developed projects using: CSS, HTML, Bootstrap, JavaScript,
                Node, Express, PostgreSQL, Database, Sequelize, React Redux, SQL
                Server, among others.
              </p>
              <p className="text-start">
                However, my main focus is backend development, I have the skill
                to design, create and maintain a database.
              </p>
              <p className="text-start">
                Currently I am excited to join new projects, where I can
                contribute my knowledge and skills. I seek to contribute to the
                creation of innovative solutions and my professional growth.
              </p>
              <p className="text-start mb-5">
                I have experience working collaboratively using Gitflow and
                using tools for project management and administration such as
                Trello or Jira.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
