
class Sceene  {
    constructor() {
        let canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        window.onload = function() {
            window.addEventListener('resize',init,false);
            init();
            setup();
            
        }
        
        function setup() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        /*
        class init {
            constructor() {
                this.canvas = canvas;
                return canvas.getContext('2d');
            }
        }

        */
        function init () {
            return canvas.getContext("2d");
        }

        this.canvas = canvas


    }

    drawBackground(canvas) {
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.width = window.innerWidth;
        ctx.height = window.innerHeight;
        ctx.fillRect(0,0,ctx.width, ctx.height);
        ctx.closePath();

    }
} 





export {Sceene}