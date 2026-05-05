document.addEventListener('DOMContentLoaded', function () {

  //JAVASCRIPT FUNCTIONS GO HERE
  console.log(' Javascript IS READY');




});

document.addEventListener("DOMContentLoaded", function () {

  //TOGGLE MENU NAV FOR MOBILE BUTTON
  const menubutton = document.querySelector('.menu-button');
  const menunav = document.querySelector('.toggle-nav');
  menubutton.addEventListener('click', function () {
    if (menunav.getAttribute('data-navstate') === 'open') {
      menunav.setAttribute('data-navstate', 'closed');
    } else {
      menunav.setAttribute('data-navstate', 'open');
    }
  });

});



document.addEventListener("DOMContentLoaded", () => {

  // ENABLE MOBILE MENU 
  const sitenav = document.querySelector(".site-nav");
  const menubutton = document.querySelector(".menubutton");

  menubutton.onclick = () => {
    // IF MENU IS CLOSED, OPEN IT, ELSE CLOSE IT
    if (sitenav.getAttribute("data-menustate") === "open") {
      sitenav.setAttribute("data-menustate", "closed");
    } else {
      sitenav.setAttribute("data-menustate", "open");
    };
  };

  // Remove the data-attribute on resize to fix drawer nav animation
  window.onresize = () => {
    sitenav.removeAttribute("data-menustate");
  };

  // SCROLL-TRIGGERED ANIMATION
  // CHANGE ACTIVE STATE FOR ALL TARGET ELEMENTS WITH INTERSECTION OBSERVER
  const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.setAttribute("data-viewstate", "active");
      } else {
        entry.target.setAttribute("data-viewstate", "inactive");
      };
    });
  });

  const mytargets = document.querySelectorAll('.observe-me');
  mytargets.forEach((el) => {
    myobserver.observe(el);
  });



});




// NAV MENU ICON
var iconMenu = document.querySelector('.icon-menu'),
  menu = document.querySelector('.menu'),
  menuLink = document.querySelectorAll('.menu-link.sub');

iconMenu.addEventListener('click', openMenu);

menuLink.forEach(function (el) {
  el.addEventListener('click', openSubmenu);
});

function openMenu() {

  if (menu.classList.contains('open')) {
    menu.classList.add('close');
    iconMenu.classList.remove('icon-closed');

    setTimeout(function () { menu.classList.remove('open'); }, 1300);

  } else {
    menu.classList.remove('close');
    menu.classList.add('open');
    iconMenu.classList.add('icon-closed');
  }
}

function openSubmenu(event) {

  if (event.currentTarget.classList.contains("active")) {
    event.currentTarget.classList.remove("active");
  } else {
    event.currentTarget.classList.add("active");
  }
}


/* ----------------------------
       ACCORDION CAROUSEL CODE
    ---------------------------- */

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  item.addEventListener("click", () => {

    accordionItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

  });
});

Fancybox.bind("[data-fancybox='gallery']", {
  on: {
    reveal: () => {
      document.querySelector('.carousel-track').style.animationPlayState = 'paused';
    },
    closing: () => {
      document.querySelector('.carousel-track').style.animationPlayState = 'running';
    }
  }
});

});