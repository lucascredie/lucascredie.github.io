window.onload = loaded;

function loaded() {
        var params = {
                container: document.getElementById('name-animation'),
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: '../animations/name2.json',
                rendererSettings: {
                        preserveAspectRatio: 'xMinYMin meet', // Supports the same options as the svg element's preserveAspectRatio property
                        clearCanvas: false,
                        progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
                        hideOnTransparent: true, //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
                        className: 'name-animation'
                      }
                // animationData: animationData
        };
        
        var anim;
        
        anim = lottie.loadAnimation(params);

        anim.addEventListener('complete', function() {
               //make eye move
               let pupil = document.querySelector('.pupil');
               window.addEventListener("mousemove", function(e){
                console.log(e);
                
               });
        })


        // lottie.setQuality('low');
}
