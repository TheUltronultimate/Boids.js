
class Sceene  {
    constructor() {
        const canvas = document.createElement("canvas");
        this.canvas = canvas
        document.body.appendChild(canvas);
        window.onload = setup();
        //window.onresize = setup();

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



        


    }

    
    drawBackground() {
        console.log("drawing")
        let ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.width = window.innerWidth;
        ctx.height = window.innerHeight;
        ctx.fillRect(0,0,ctx.width, ctx.height);
        ctx.closePath();
        console.log("finished drawing")


}


     resize() {
        console.log("Resizing")
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
}


/*
     resize() {
        window.addEventListener('resize',init,false) 
        init();
        setup();
        //drawBackground();

     

    
}

    setup() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
}
*/

} 





export {Sceene}