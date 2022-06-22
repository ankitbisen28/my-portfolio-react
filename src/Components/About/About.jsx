import React from "react";
import "./About.css";
import me from "./ankit.png";

export const About = () => {
  return (
    <div>
      {/* <!-- About Start --> */}
      <div className="container-fluid py-5" id="about">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" id="about">
              About
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              About Me
            </h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <img
                className="img-fluid rounded w-75"
                style={{}}
                src={me}
                alt=""
              />
            </div>
            <div className="col-lg-7">
              <h3 className="mb-4">Web Developer</h3>
              <p>
                Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit
                amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd
                sed ea lorem diam ea lorem eirmod duo sit ipsum. Amet dolor stet
                lorem diam dolor justo et dolor dolor dolor
              </p>
              <div className="row mb-3">
                <div className="col-sm-6 py-2">
                  <h6>
                    Name: <span className="text-primary">Ankit Bisen</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Birthday:{" "}
                    <span className="text-primary">28 August 2002</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Degree: <span className="text-primary">Bvoc Software Development</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Experience: <span className="text-primary">1 Years</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Email:{" "}
                    <span className="text-primary" typeof="email">bisenankit80@gmail.com</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Address:{" "}
                    <span className="text-primary">
                      Gondia, Maharashtra, India.
                    </span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Freelance: <span className="text-primary">Available</span>
                  </h6>
                </div>
              </div>
              <a href="/" className="btn btn-outline-primary mr-4">
                Hire Me
              </a>
              <a href="/" className="btn btn-outline-primary mx-2">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
      {/* <!-- Skill Start --> */}
    <div className="container-fluid py-5" id="skill">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white">Skills</h1>
                <h1 className="position-absolute text-uppercase text-primary">My Skills</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">HTML</h6>
                            <h6 className="font-weight-bold">95%</h6>
                        </div>
                        <div className="progress">
                          <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">CSS</h6>
                            <h6 className="font-weight-bold">85%</h6>
                        </div>
                        <div className="progress">
                          <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "85%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">Bootstrap</h6>
                            <h6 className="font-weight-bold">90%</h6>
                        </div>
                        <div className="progress">
                          <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "90%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">Javascript</h6>
                            <h6 className="font-weight-bold">80%</h6>
                        </div>
                        <div className="progress">
                          <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "80%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">React JS</h6>
                            <h6 className="font-weight-bold">85%</h6>
                        </div>
                        <div className="progress">
                          <div className="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "85%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">Node Js</h6>
                            <h6 className="font-weight-bold">70%</h6>
                        </div>
                        <div className="progress">
                          <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{width: "70%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* // <!-- Skill End --> */}
    </div>
  );
};
