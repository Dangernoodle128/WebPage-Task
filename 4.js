function myFunction(x) {
    x.classList.toggle("change");
  }

  var isopen=false;
  function dropdown(i){
    if(isopen==false){
   document.getElementById("box"+i).style.display="block"
   document.getElementById("ico"+i).style.transform="rotate(180deg)"
   document.getElementsByClassName("blue")[i-3].style.color="blue";
   isopen=true;
    }else{
      document.getElementById("box"+i).style.display="none"
   document.getElementById("ico"+i).style.transform="rotate(0deg)" 
   document.getElementsByClassName("blue")[i-3].style.color="black";
   isopen=false;
    }
  }
 