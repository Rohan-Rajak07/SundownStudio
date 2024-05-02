const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
})

gsap.from(".pg1 nav img",{
    x:-200,
    duration:1,

})
var leave=document.querySelector(".elemsec")
leave.addEventListener("mouseleave",()=>{
    fix.style.display="none";
    fix.innerHTML="";
})

var arr=[
    '<video autoplay loop muted src="assets/id0.mp4"></video>',
    '<video autoplay loop muted src="assets/id1.mp4"></video>',
    '<video autoplay loop muted src="assets/id2.mp4"></video>',
    '<video autoplay loop muted src="assets/video.mp4"></video>',
    '<img src="assets/id4.webp">',
    '<img src="assets/id5.webp">'

];
var fix=document.querySelector(".fiximg");
var elem=document.querySelectorAll(".elem");

elem.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        var get=e.getAttribute("id");
        fix.innerHTML=arr[get];
        fix.style.display="block";
        console.log(arr[get]);
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 60,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


var load=document.querySelector(".loader")
setTimeout(() => {
    // load.style.height=0;
    load.style.top="-100%"

  }, 3000);