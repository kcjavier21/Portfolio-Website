function toggleSidebar(ref) {
    ref.classList.toggle('active');
    document.getElementById('sidebar').classList.toggle('active');
  }








  const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developer", "Web Designer", "Graphic Designer", "Digital Artist"];
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