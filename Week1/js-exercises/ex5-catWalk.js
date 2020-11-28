/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
 
*/
// const catImage = document.querySelector('img');
// const pageBody = document.querySelector('body');


// catImage.style.left = "0px";

// let point = 0;
// function catWalk(){
//     const currentLeft = catImage.style.left;
//     catImage.style.left = point + "px";
//     point++
//     if (currentLeft > (window.innerWidth-catImage.width)){
//         catImage.style.left = '0px'
//     }
    
// };

const imgCat = document.getElementsByTagName('img')[0];
imgCat.style.left = '0px';
let speed = 10;
let time; 
const winScreen = window.innerWidth-imgCat.width;
const catMoves = setInterval(catWalk, 50)

function catWalk() {
  let currentLeft = parseInt(imgCat.style.left);
  imgCat.style.left = (currentLeft + speed) + 'px';

  function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   } 
  }


  if (currentLeft >= (winScreen/2)) {
     clearInterval(catMoves)
    imgCat.src = 'https://media.giphy.com/media/Qd8Fwmm0PgTcc/giphy.gif'; // imgCat.style.left = '0px';
    wait(5000);
    
  } else if(currentLeft > winScreen) {
    console.log("hello")
  }
}
  // if(currentLeft == winScreen/2) {
    // console.log("hello")  
    // clearInterval(catMoves)
    // imgCat.src = 'https://media.giphy.com/media/Qd8Fwmm0PgTcc/giphy.gif';

    // if(wait(5000) == true){
    // imgCat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif"
    // } else {
    //   imgCat.style.left = '0px';
    // }
    
   
 

  
  

   

    
    //  else if (currentLeft > (winScreen)) {
    
      
    // }
  
    

