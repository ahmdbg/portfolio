particlesJS('particles-js', {
  particles: {
    number: {
      value: 100,
      density: {
        enable: false,
        value_area: 100
      }
    },
    color: {
      value: ['#00f3ff', '#64ffda', '#f9f9f9']
    },
    shape: {
      type: 'star'
    },
    opacity: {
      value: 0,
      random: false
    },
    size: {
      value: 10,
      random: true
    },
    move: {
      enable: true,
      speed: 10,
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
