export const particleOptions = {
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 300,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#D1D1D1",
      },
      links: {
        color: "#D1D1D1",
        distance: 50,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 50,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "edge",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: false,
  }
  