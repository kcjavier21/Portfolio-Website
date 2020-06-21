function toggleSidebar(ref) {
    ref.classList.toggle('active');
    document.getElementById('sidebar').classList.toggle('active');
  }



/*
====================================================
===============SMOOTH SCROLLING=====================
=====================================================
*/

  var links = document.getElementsByTagName("a");

//Browse the previously created array
Array.prototype.forEach.call(links, function(elem, index) {
  //Get the hyperlink target and if it refers to an id go inside condition
  var elemAttr = elem.getAttribute("href");
  if(elemAttr && elemAttr.includes("#")) {
    //Replace the regular action with a scrolling to target on click
    elem.addEventListener("click", function(ev) {
      ev.preventDefault();
      //Scroll to the target element using replace() and regex to find the href's target id
      document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
          });
    });
  }
});




/*
======================================================
===================== TYPING EFFECT ==================
======================================================
*/


const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Front-end Developer", "Web Designer", "Logo Designer", "Illustrator"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

  /*

  function webDevOnly(){

    for(i=4; i<=9; i++) {
    //document.querySelector('.proj-all .proj-all-item:nth-child('+ i +')').style.transition = '500ms';
    document.querySelector('.proj-all .proj-all-item:nth-child('+ i +')').style.visibility = 'hidden';
    }

    var btnWeb = document.querySelector('#nav-proj button:nth-child(2)');

    btnWeb.style.backgroundColor =  '#3498db'; 
    btnWeb.style.color = 'white'; 
    btnWeb.style.borderColor = '#3498db'; 

  }

  function graphicDesOnly(){

    for(i=1; i<=9; i++) {
      if((i != 4) && (i != 5) && (i != 6)){
    //document.querySelector('.proj-all .proj-all-item:nth-child('+ i +')').style.transition = '500ms';
      document.querySelector('.proj-all .proj-all-item:nth-child('+ i +')').style.visibility = 'hidden';
      }
    }


    var btnGraphicDes = document.querySelector('#nav-proj button:nth-child(3)');

    btnWeb.style.backgroundColor =  '#3498db'; 
    btnWeb.style.color = 'white'; 
    btnWeb.style.borderColor = '#3498db'; 

  }

*/