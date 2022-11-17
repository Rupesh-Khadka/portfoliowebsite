// JS FOR TOGGLE MENU

const hamburger = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
})


//  FOR PROGRESSBAR

const section = document.querySelector("section");
const progressBar = document.getElementById("progress-bar");

const animateProgressBar = ()=> {
    let scrollDistance = -section.getBoundingClientRect().top;
    let progressWidth = (scrollDistance/(section.getBoundingClientRect().height - document.documentElement.clientHeight ))* 100;
    let value = Math.floor(progressWidth);
    progressBar.style.width = value + "%";
}
window.addEventListener("scroll", animateProgressBar);

//  FOR HIDDEN ELEMENT FADE AND SHOW
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
       console.log(entry)
       entry.target.classList.toggle('show', entry.isIntersecting);
       
 
    });
 });
 
 const hiddenElements = document.querySelectorAll('.hidden');
 hiddenElements.forEach((el) => observer.observe(el));


const leftAbout = document.querySelector('.left-div');
const rightDiv = document.querySelector('.right-div-o')
window.addEventListener('scroll', ()=> {
    let offSetY = window.scrollY;
    
    leftAbout.style.transform = `translateX(calc(700px - ${offSetY}px))`
    rightDiv.style.transform = `translateX(calc(1600px - ${offSetY}px))`
})