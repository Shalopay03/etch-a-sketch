//fills painting panel with white divs according to number of cells needed
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

//cleans painting panel of for it to be resized
function cleanPanel(){
    const panel = document.querySelector('#painting-space');
    const pixel = document.querySelector('.pixel');   
    panel.removeChild(pixel);
}

//returns random HEX color 
function randomColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}

//default values
let chosenColor='red';
let panelXSize = 10;
let panelFullSize = panelXSize**2;
let rainbowIsOn = false;

//fills painting panel with white divs according to number of cells needed
for(let i=0; i<panelFullSize; i++) fillPanel(panelXSize);

//event listener for painting when hover over painting pixels
const pixels = document.querySelectorAll('.pixel');
pixels.forEach((pixel) => {

    pixel.addEventListener('mouseover', () => {
        //check for rainbow option
        if (rainbowIsOn) chosenColor=`#${randomColor()}`;

        pixel.style.backgroundColor = chosenColor;        
    })

});

//event listener for color input
const color = document.querySelector('#color');   
color.addEventListener('input', () => {
    chosenColor=color.value;
    rainbowIsOn=false; //turns off rainbow
});

//event listener for eraser
const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', () =>{
    chosenColor='white';
    rainbowIsOn=false; //turns off rainbow
})

//event listener for turning on rainbow effect (random colors)
const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', () =>{  
    
    rainbowIsOn=true;
})

//event listener for size of painting zone input
const size = document.querySelector('#size');
size.addEventListener('input', () => {

    //cleans panel of divs with previous size
    for(let i=0; i<panelFullSize; i++) cleanPanel();

    //fills panel with divs according to current size
    panelXSize=size.value;
    panelFullSize = panelXSize**2;
    for(let i=0; i<panelFullSize; i++) fillPanel(panelXSize);

    //restarts event listener for painting
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {

        pixel.addEventListener('mouseover', () => {
            if (rainbowIsOn) chosenColor=`#${randomColor()}`;
            pixel.style.backgroundColor = chosenColor;        
        })
    
    });
});

//event listener for reset button which paints all pixels in white
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {        
            pixel.style.backgroundColor = 'white';     
    });

});