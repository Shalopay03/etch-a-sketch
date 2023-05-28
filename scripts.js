function fillPanel(panelSize){
    const panel = document.querySelector('#painting-space');
    const pixel = document.createElement('div');

    pixel.setAttribute('class', 'pixel');
    pixel.style.color = 'white';

    let size = 500/panelSize;
    pixel.style.width=`${size}px`;
    pixel.style.height=`${size}px`;

    panel.appendChild(pixel);
}

let chosenColor='red';
let panelXSize = 10;
let panelFullSize = panelXSize**2;

for(let i=0; i<panelFullSize; i++) fillPanel(panelXSize);

const pixels = document.querySelectorAll('.pixel');

console.log(pixels);
pixels.forEach((pixel) => {

    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = chosenColor;
        
    })

});