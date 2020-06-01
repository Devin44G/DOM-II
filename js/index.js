// Your code goes here

/* DECLARED VARIABLES */
const BODY = document.querySelector('body');
const CONTAINER = document.querySelector('.container');
const BUS_LOGO = document.querySelector('.logo-heading');
const SECT_ONE_IMG = document.querySelector('.img-content img');

/* EVENT LISTENERS (AND STUFF) */
function navLinkStyle(child, text, text2) {
  let navLink = document.querySelector('.nav-link:nth-child(' +child+ ')');

// MOUSEOVER - 1
      navLink.addEventListener('mouseover', () => {
        navLink.style.fontSize = '2rem';
        navLink.textContent = text;
      });

// MOUSEUP - 2
      navLink.addEventListener('mouseup', () => {
        navLink.style.color = 'green';
        navLink.textContent = text2;
      });

      navLink.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault(); // preventDefault()
      });
}

let navLink1 = navLinkStyle('1', 'Click', 'Home');
let navLink2 = navLinkStyle('2', 'us', 'About');
let navLink3 = navLinkStyle('3', 'all', 'Blog');
let navLink4 = navLinkStyle('4', 'back!', 'Contact');

// CLICK - 3
CONTAINER.addEventListener('click', () => {
  CONTAINER.style.backgroundColor = 'orange';
});


// MOUSEMOVE - 4
BUS_LOGO.addEventListener('mousemove', (e) => {
  BUS_LOGO.style.color = 'rgb('+e.offsetX+','+e.offsetY+', 130)';
});
BUS_LOGO.addEventListener('click', (e) => e.stopPropagation()); // stopPropagation()

// DBLCLICK - 5
BUS_LOGO.addEventListener('dblclick', () => {
  BODY.style.display = 'none';
});

// RESIZE - 6
window.addEventListener('resize', () => {
  document.querySelector('html').style.fontSize = '10%';
});

// SCROLL - 7
window.addEventListener('scroll', (e) => {
  document.querySelector('html').style.color = 'blue';
});

// DRAG - 8
SECT_ONE_IMG.addEventListener('drag', () => {
  document.querySelector('html').style.fontSize = '62.5%';
// // GSAP - Green Sock
//   gsap.to('.img-content img', {
//     duration: 1,
//     rotate: 360,
//     y: -5,
//   });
});

// GSAP - Green Sock
SECT_ONE_IMG.addEventListener('mouseenter', () => {
  gsap.to('.img-content img', {
    duration: 1,
    rotate: 360,
    y: -20,
    yoyo: true,
    repeat: 1
  });
});

// MOUSEOUT - 9
SECT_ONE_IMG.addEventListener('mouseout', () => {
  document.querySelectorAll('.text-content').forEach(text => text.style.color = 'crimson');
  document.querySelector('.nav-container').style.flexDirection = 'column';
  document.querySelector('.nav-container .nav').style.flexDirection = 'column';
  document.querySelector('html').style.fontSize = '50%';
});

// KEYPRESS - 10
window.addEventListener('keypress', (e) => {
  if (e.which === 13) {
    BODY.style.display = 'inherit';
  }
});
