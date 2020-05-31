function toggleSidebar(ref) {
    ref.classList.toggle('active');
    document.getElementById('sidebar').classList.toggle('active');
  }

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