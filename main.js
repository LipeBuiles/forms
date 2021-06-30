  
function hideShow(){
  element = document.getElementById('hideDiv');
  element1 = document.getElementById('hideDivE');
  estado = element.style.display;
  estado1 = element1.style.display;
  if(estado == 'none'){
    element.style.display='block';
    element1.style.display = 'none'; 
    }
    if(estado == 'block'){
        element.style.display='block';
        element1.style.display = 'none'; 
        }
    

}//end function hideShow

function hideShowE(){
    element = document.getElementById('hideDiv');
    element1 = document.getElementById('hideDivE');
    estado = element.style.display;
    estado1 = element1.style.display;
    if(estado1 == 'none'){
      element1.style.display='block';
      element.style.display = 'none'; 
      }
      if(estado1 == 'block'){
          element1.style.display='block';
          element.style.display = 'none'; 
          }
      
  
  }//end function hideShow
  