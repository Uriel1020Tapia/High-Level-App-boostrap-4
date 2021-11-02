
    const d = document;
    const w = window;
    const ls = localStorage;

document.addEventListener("DOMContentLoaded", function(event) {
    //código a ejecutar cuando el DOM está listo para recibir acciones

    console.log("DOMContentLoaded");
    // showVideoPopup('.video-play-btn','.video-popup-close','.video-popup');
    scrollNavBar('.navbar');


    // features carousel  
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });
    
        // screenshots carousel  
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    // testimonial carousel 
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    
});

darkTheme(".dark-theme-btn","dark");

function showVideoPopup(btnOpen,btnClose,videoPopup){

    // const d = document;
    // const w = window;

    const player1$ = d.getElementById("player-1");
    const videoSrc$ = player1$.src;
    const videoPopup$ = d.querySelector(videoPopup);

   d.addEventListener("click", (e) => {
    if (e.target.matches(`${btnOpen}`)  || e.target.matches(`${btnOpen } *`)  || e.target.matches(btnClose) || e.target.matches(videoPopup)) {
        
        videoPopup$.classList.toggle('open');

        console.log("contains open",videoPopup$.classList.contains('open'));
        if(videoPopup$.classList.contains('open')){
            player1$.src = videoSrc$;
           
        }else{
            player1$.src = '';
        }
    }
  });
}

function scrollNavBar(navbar){

    const $navBar = d.querySelector(navbar);
    w.addEventListener('scroll',(e)=> {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        // console.log("scrollTop",scrollTop);
        if (scrollTop > 90) {
            $navBar.classList.add('navbar-shrink');
        }else{
            $navBar.classList.remove('navbar-shrink');
        }

    });
}

function darkTheme(btn,classDark){
    console.log("theme")
    // const $themeBtn = d.querySelector(btn);
    const $iconBtn = d.querySelector(`${btn} i`);
    let moon = "fa-moon",
    sun = "fa-sun";

    const lightMode = () => {
        d.body.classList.remove(classDark);
        $iconBtn.classList.remove(sun);
        $iconBtn.classList.add(moon);
        ls.setItem("theme","light");
    };

    const darkMode = () => {
        d.body.classList.add(classDark);
        $iconBtn.classList.remove(moon);
        $iconBtn.classList.add(sun);
        ls.setItem("theme","dark");
      };

      d.addEventListener("click", (e) => {
        if (e.target.matches(`${btn } *`)) {
          if (d.body.classList.contains(classDark)) {
              lightMode();
        } else {
            darkMode();
          }
        }
      });

      d.addEventListener("DOMContentLoaded", (e) => {
        if(ls.getItem("theme") === null) ls.setItem("theme","light");
        if(ls.getItem("theme") === "light") lightMode();
        if(ls.getItem("theme") === "dark") darkMode();
        hidePreloader()
      });
}

function hidePreloader(){
    setTimeout(()=>{
        document.querySelector('.preloader').classList.add('fade');
    },2000)

}