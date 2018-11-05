//animations that need to be chained

// ==================================================
//  Toolbar
// ==================================================
var topBar = document.getElementsByClassName("top-bar");

TweenMax.to(topBar, 2.8, {
    width:"100%", 
    ease:Power2.easeOut,
    delay: 2.3
});

// ===================================================
//  Logos
// ===================================================
var logos = document.getElementsByClassName("logo");

let initialDelay = 4;
let duration = 1.5;
let Offset = 0.2;

for (let index = 0; index < logos.length; index++) {

    TweenMax.to(logos[index], duration, {
        opacity:"1", 
        ease:Power2.ease,
        delay: initialDelay + Offset
    });
    Offset += 0.2;
}


// ===================================================
//  Social Links
// ===================================================
var links = document.getElementsByClassName("logo-link");
Offset = 0.2;

for (let index = 0; index < links.length; index++) {
   
    TweenMax.fromTo(links[index], 0.5, {
        y:-380,
        ease:  Elastic.easeOut.config(1, 0.3)
    },
    {
        y:0, 
        delay:1.2 + Offset,
        
        
    })
    Offset += 0.2;
}