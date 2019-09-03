window.onload = loaded;


function loaded() {
        var params = {
                container: document.getElementById('name-animation'),
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: '../animations/name.json'
                // animationData: animationData
        };
        
        var anim;
        
        anim = lottie.loadAnimation(params);
        
        // lottie.setQuality('low');
}
