import React from "react";
import AnkitImage from "./AnkitBisen.png";

import "./Profile.css";
import TypeWriterEffect from "react-typewriter-effect";

export const Profile = () => {
  return (
    <div className="Profile-cover bg-primary">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="Profile-left">
              <h1>Ankit Bisen</h1>
              <div className="typewriter-section">
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "Red Hat Display",
                    color: "black",
                    fontWeight: 500,
                    fontSize: "1.5em",
                  }}
                  startDelay={2000}
                  cursorColor="#3F3D56"
                  multiText={[
                    "Hey there, This is Ankit",
                    "I'm a MERN Stack Developer",
                    "I can Make Awesome Websites for you",
                    "Anything can be customized.",
                    "If you need just contact me in Contact Form ",
                  ]}
                  multiTextDelay={1000}
                  typeSpeed={100}
                />
              </div>
              <div className="Profile-buttons my-3">
                <a href="#contact">
                  <div className="btn btn-dark mx-3">Contact Me</div>
                </a>
                {/* <div className="btn btn-dark">Resume</div> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="Profile-right">
              <div className="img">
                <img
                  className="rounded-circle Profile-image"
                  src={AnkitImage}
                  alt=""
                />
              </div>
              <div className="social-media-icons">
                <a target="_black" href="https://www.instagram.com/ankybisen/">
                  <i className="bi bi-instagram"></i>
                </a>
                <a target="_black" href="https://github.com/ankitbisen28">
                  <i className="bi bi-github"></i>
                </a>
                <a target="_black" href="https://twitter.com/ankitbisen28">
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  target="_black"
                  href="https://www.linkedin.com/in/ankit-bisen-0a4587208/"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
