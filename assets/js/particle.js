particlesJS('particles-js', {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ['#00f3ff', '#64ffda']
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    move: {
      enable: true,
      speed: 50,
      direction: 'none',
      random: true,
      out_mode: 'out'
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      }
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.5
        }
      }
    }
  }
});
