let sb=document.querySelector('#sbutton');
let vidbtn=document.querySelectorAll('.vid-btn');
let list=document.querySelectorAll(".nav-link");


//video slider
vidbtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.vid-con .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('video').src=src;
    });
    
});
///

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

list.forEach((li)=>{
  li.addEventListener('click',remove_active);
  
  });
  
  function remove_active(){
      list.forEach((li)=>{
          li.classList.remove('active');
          this.classList.add('active');
      });
  }

//function that enables dark mode and disable light mode:
var dark=document.querySelector('#dark');
var light=document.querySelector('#light');
var darkMode=localStorage.getItem('darkMode');


const darkOn=()=>{
  document.documentElement.style.setProperty('--dark','#fefbfd');
  document.documentElement.style.setProperty('--text','#300717');
  dark.style.display="none";
  light.style.display="block";
  dark.classList.add('active');
  light.classList.remove('active');
  localStorage.setItem('darkMode','work');
}

//function that disables dark mode and enables light mode:
const darkOff=()=>{
  document.documentElement.style.setProperty('--dark','#300717');
  document.documentElement.style.setProperty('--text','#fefbfd');
  light.style.display="none";
  dark.style.display="block";
  dark.classList.remove('active');
  light.classList.add('active');
  localStorage.setItem('darkMode',null);
}

//keeping dark mode even if we reload
if (darkMode==='work'){
  darkOn();
}

//calling the dark mode enabling function when we click on dark mode icon
dark.addEventListener('click',()=>{
  mode=localStorage.getItem('darkMode');
  darkOn();
});

//calling the light mode enabling function when we click on light mode icon
light.addEventListener('click',()=>{
  mode=localStorage.getItem('darkMode');
  darkOff();
})