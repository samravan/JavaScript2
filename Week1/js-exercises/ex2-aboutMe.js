/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

 document.body.style.fontFamily = "Arial, sans-serif";
 document.getElementById('nickname').textContent = 'Masoud';
 document.getElementById('fav-food').textContent = 'Pasta';
 document.getElementById('hometown').textContent = 'Kerman';

 selectList = document.querySelectorAll('li');
for(let i = 0 ; i < selectList.length ; i++) {
  selectList[i].className = 'list-item';
}

const imgElement = document.createElement('img');
imgElement.src = 'https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png';
imgElement.alt = 'avatar';
document.body.appendChild(imgElement);