'use strict';




/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);




/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});




/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// persentase project
// Set progress bar width based on span value
document.querySelectorAll('.progress-item').forEach(function (item) {
  var percentSpan = item.querySelector('.label-wrapper .span');
  var progressFill = item.querySelector('.progress-fill');
  if (percentSpan && progressFill) {
    var percent = percentSpan.textContent.trim().replace('%', '');
    progressFill.style.width = percent + '%';
  }
});



/**
 * CONTACT FORM HANDLER - Send to WhatsApp
 */
document.addEventListener('DOMContentLoaded', function () {
  var contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = contactForm.querySelector('input[name="name"]').value.trim();
      // Cek apakah ada input WhatsApp, jika tidak fallback ke nomor default
      var waInput = contactForm.querySelector('input[name="whatsapp"]');
      var userWa = waInput ? waInput.value.trim() : '';
      var message = contactForm.querySelector('textarea[name="message"]').value.trim();
      var waNumber = '6285640054840';
      var waMessage =
        'Halo, saya ingin menghubungi Anda melalui website.\n' +
        'Nama: ' + name + '\n' +
        (userWa ? ('No. WhatsApp: ' + userWa + '\n') : '') +
        'Pesan: ' + message;
      var waUrl =
        'https://wa.me/' +
        waNumber +
        '?text=' +
        encodeURIComponent(waMessage);
      window.open(waUrl, '_blank');
    });
  }

});
