//import Sceene from "./stolen shit/OriginalCode";
import { Sceene } from "./renderer.js";


const canvas = new Sceene();

function gameLoop() {
    canvas.drawBackground;
    console.log("Refreshing")
    requestAnimationFrame(gameLoop);
}

gameLoop();

