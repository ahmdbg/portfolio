// Add this function to initialize typing effect
function initTypeEffect() {
    const titles = document.querySelectorAll('.typing-effect');
    titles.forEach(title => {
      const text = title.textContent;
      title.textContent = '';
      
      new Typed(title, {
        strings: [text],
        typeSpeed: 1000, // typing speed in milliseconds
        backSpeed: 0,
        loop: false,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
        onComplete: (self) => {
          self.cursor.style.display = 'none';
        }
      });
    });
  }
  
  // Modify your existing navigation code to reinitialize typing effect
  const navigationLinks = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('[data-page]');
  
  // add event to all nav link
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function () {
  
      for (let i = 0; i < pages.length; i++) {
        if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
          pages[i].classList.add('active');
          navigationLinks[i].classList.add('active');
          window.scrollTo(0, 0);
          // Initialize typing effect when page changes
          initTypeEffect();
        } else {
          pages[i].classList.remove('active');
          navigationLinks[i].classList.remove('active');
        }
      }
  
    });
  }
  
  // Initialize typing effect on first load
  document.addEventListener('DOMContentLoaded', initTypeEffect);