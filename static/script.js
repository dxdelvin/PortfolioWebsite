


// NAVBAR



openBtn = document.querySelector(".open")
closeBtn = document.querySelector(".close")
navItem = document.querySelectorAll(".nav-items")

openBtn.addEventListener("click",()=>{
    navItem.forEach(el =>{
        el.classList.add("visible")
    })
})

closeBtn.addEventListener("click",()=>{
    navItem.forEach(el =>{
        el.classList.remove("visible")
    })
})


// Typed Animation
let typed = new Typed('#element', {
    strings: ['Programmer', 'Graphic Designer','Video Editor','Web Developer'],
    typeSpeed: 60,
    loop:true,
  });


AOS.init();


// scroll effect


window.addEventListener('scroll', function(e) {
  let section = document.querySelector('#work');
  let nav = document.querySelector('.navv');
  let sectionOffsetTop = section.offsetTop;
  let scrollPosition = window.pageYOffset;



  const scrollOffset = 2;
  if (scrollPosition >= sectionOffsetTop - scrollOffset) {
    section.classList.add('section-highlight');
    nav.classList.add('nav-highlight')
  } else {
    section.classList.remove('section-highlight');
    nav.classList.remove('nav-highlight')
  }
});
  

