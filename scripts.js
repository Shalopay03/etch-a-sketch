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

function cleanPanel(){
    const panel = document.querySelector('#painting-space');
    const pixel = document.querySelector('.pixel');   
    panel.removeChild(pixel);
}

function randomColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}

let chosenColor='red';
let panelXSize = 10;
let panelFullSize = panelXSize**2;
let rainbowIsOn = false;

for(let i=0; i<panelFullSize; i++) fillPanel(panelXSize);

const pixels = document.querySelectorAll('.pixel');

pixels.forEach((pixel) => {

    pixel.addEventListener('mouseover', () => {
        if (rainbowIsOn) chosenColor=`#${randomColor()}`;
        pixel.style.backgroundColor = chosenColor;        
    })

});

const color = document.querySelector('#color');
   
color.addEventListener('input', () => {
    chosenColor=color.value;
    rainbowIsOn=false;
});

const eraser = document.querySelector('#eraser');

eraser.addEventListener('click', () =>{
    chosenColor='white';
    rainbowIsOn=false;
})

const rainbow = document.querySelector('#rainbow');

rainbow.addEventListener('click', () =>{  
    
    rainbowIsOn=true;
})

//size
const size = document.querySelector('#size');

size.addEventListener('input', () => {
    for(let i=0; i<panelFullSize; i++) cleanPanel();
    panelXSize=size.value;
    panelFullSize = panelXSize**2;
    for(let i=0; i<panelFullSize; i++) fillPanel(panelXSize);

    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {

        pixel.addEventListener('mouseover', () => {
            if (rainbowIsOn) chosenColor=`#${randomColor()}`;
            pixel.style.backgroundColor = chosenColor;        
        })
    
    });
});