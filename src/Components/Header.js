import React, { Component } from "react";
/* import ParticlesBg from "particles-bg"; */
import ParticleComponent from "../ParticleComponent";

class Header extends Component {
  render() {
    if (this.props.data) {
      var project = this.props.data.project;
      var github = this.props.data.github;
      var name = this.props.data.name;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank">
              <i className={network.className}></i>
            </a>
          </li>
          /*  <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li> */
        );
      });
    }

    return (
      <header id="home">
        <ParticleComponent />
        {/*   <ParticlesBg type="circle" bg={true} /> */}
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <ParticleComponent />
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            {/*    <ul className="social">
              <a href={project} className="button btn project-btn">
                <i className="fa fa-book"></i>Project
              </a>
              <a href={github} className="button btn github-btn">
                <i className="fa fa-github"></i>Github
              </a>
            </ul> */}
            <div className="row">
              <div className="twelve columns social">
                <ul className="social-links">{networks}</ul>
              </div>
              <div id="go-top">
                <a className="smoothscroll" title="Back to Top" href="#home">
                  <i className="icon-up-open"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
