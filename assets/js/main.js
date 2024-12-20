document.addEventListener("DOMContentLoaded", () => {

  const botones = document.querySelectorAll("button[data-seccion]");
  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const seccion = boton.getAttribute("data-seccion");
      mostrarSeccion(seccion);
    });
  });

  const navMenu = document.getElementById("navmenu");
  const navToggle = document.getElementById("navtoggle");
  const navClose = document.getElementById("navclose");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu?.classList.add("showmenu");
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu?.classList.remove("showmenu");
    });
  }

  const resumeBtns = document.querySelectorAll(".resume-btn");
  resumeBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      const resumeDetails = document.querySelectorAll(".resume-detail");
      resumeBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      btn.classList.add("active");
      resumeDetails.forEach((detail) => {
        detail.classList.remove("active");
      });
      resumeDetails[idx].classList.add("active");
    });
  });

  const nextButton = document.getElementById("arrow-next");
  const prevButton = document.getElementById("arrow-prev");
  let index = 0;

  const activeProyect = () => {
    const imgSlide = document.querySelector(".project-carousel .img-slide");
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    const projectDetails = document.querySelectorAll('.project-detail');
    projectDetails.forEach(detail =>{
      detail.classList.remove('active');
    })
    projectDetails[index].classList.add('active');
  };

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      if (index < 3) {
        index++;
        prevButton.classList.remove("disabled");
      } else {
        index = 3;
        nextButton.classList.add("disabled");
      }
      activeProyect();
    });
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      if (index > 0) {
        index--;
        nextButton.classList.remove("disabled");
      } else {
        index = 0;
        prevButton.classList.add("disabled");
      }
      activeProyect();
    });
  }

  const navLinks =document.querySelectorAll('header nav div ul li a');
  const logoLink = document.querySelector('.logo')
  const activePage = () =>{
    navLinks.forEach(link => {
      link.classList.remove('active');
      navMenu.classList.remove("showmenu");

    });
  }
  navLinks.forEach((link, idx) => {
    link.addEventListener('click', () =>{
      if (!link.classList.contains('active')){
          activePage();
          link.classList.add('active')
      }
    })
  })
  logoLink.addEventListener('click', () =>{
    if(!navLinks[0].classList.contains('active')){
      activePage();
      navLinks[0].classList.add('active');
    }
  })
});
