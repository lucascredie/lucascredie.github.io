
var params2 = {
    container: document.getElementById('machine-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'machine.json'
    // animationData: animationData
};

var anim2;

anim2 = lottie.loadAnimation(params2);
anim2.setSpeed(1.2);

setInterval(()=> {
    anim2.play();
}, 5000);

lottie.setQuality('low');