const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'gothicvania patreon collection/Gothic-hero-Files/PNG/gothic-hero-run.png';
const spriteWidth = 66;
const spriteHeight = 48;

let framex = 0;
let gameFrame = 0;
const staggerFrames = 11; // Adjust the staggerFrames for desired speed

function animate() 

{
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrames) % 11;

    // Set value given spriteWdith = 66
    framex = position * spriteWidth;

    // Adjust destination width and height for scaling
    ctx.drawImage(playerImage, framex, 0, spriteWidth, spriteHeight, 0, 156, spriteWidth * 10, spriteHeight * 9);

    gameFrame++;

    requestAnimationFrame(animate);
}

animate();
