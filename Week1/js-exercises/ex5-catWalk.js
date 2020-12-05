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

const imgCat = document.getElementsByTagName('img')[0];
imgCat.style.left = '0px';
let speed = 1;

const winScreen = window.innerWidth - imgCat.width;

const catMoves = setInterval(catWalk, 5);

function catWalk() {
  // eslint-disable-next-line radix
  const currentLeft = parseInt(imgCat.style.left);
  imgCat.style.left = currentLeft + speed + 'px';
  console.log(imgCat.style.left);

  if (currentLeft == winScreen / 2) {
    // clearInterval(catMoves);
    speed = 0;
    imgCat.src = 'https://media.giphy.com/media/Qd8Fwmm0PgTcc/giphy.gif';
    // imgCat.style.left = '0px';
    setTimeout(() => {
      imgCat.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      speed = 1;
      imgCat.style.left = currentLeft + speed + 'px';

    //   setInterval(catWalk, 5)
    }, 5000);
  } else if (currentLeft > winScreen) {
    imgCat.style.left = '0px';

    }
  //   else {
  //   imgCat.style.left = '0px';
  //   imgCat.style.left = (currentLeft + speed) + 'px';
  // }
};

