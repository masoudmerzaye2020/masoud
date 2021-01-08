import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      color: "black",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
  >
    <Particles
      params={{
        particles: {
          number: {
            value: 6,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#3143c8",
          },
          shape: {
            type: "polygon",
            stroke: {
              width: 1,
              color: "#000",
            },
            polygon: {
              nb_sides: 4,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.03206824121731046,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 176.3753266952075,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 40,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 1218.5931662577973,
            color: "#e1cdcd",
            opacity: 0.2725800503471389,
            width: 1.603412060865523,
          },
          move: {
            enable: true,
            speed: 14.430708547789706,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 7375.695479981405,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "grab",
            },
            onclick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  </div>
);
