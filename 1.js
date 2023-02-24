function myFunction(x) {
    x.classList.toggle("change");
  }
  var text1=["Cool Fashion","New Design","Talk to us"];
  var text2=["Little Fashion template comes with total 8 html <br> pages provided by Tooplate website","Please share this little fashion template to your friends.<br>Thank you for supporting us.","Tooplate is one of the best HTML CSS template websites for everyone"];
  var btn=["LEARN MORE ABOUT US","EXPLORE PRODUCTS","WORK WITH US"];

  var img =document.getElementById("img");
  var i=0
  var p1=document.getElementById("p1");
  var p2=document.getElementById("p2");
  var but=document.getElementById("mb1");
  img.innerHTML=`<img src=${i}.jpg alt=${i} />`
      p1.innerText=text1[i];
      p2.innerHTM=text2[i];
      but.innerHTML=btn[i];
  setInterval(() => {
    i=i+1
    if(i>2){
      i=0
    }
      img.innerHTML=`<img src=${i}.jpg class="fade" alt=${i} />`
      p1.innerText=text1[i];
      p2.innerHTML=text2[i];
      but.innerHTML=btn[i];
  }, 3000);