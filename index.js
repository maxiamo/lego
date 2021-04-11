"use strict";

  function Preload() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }

setTimeout(Preload, 3000);

      const links = document.querySelectorAll("a");
      const series=links[0];
      const about=links[1];
      const request=links[2];
      const createOwn=links[3];
      let order = document.getElementById("order");
      order.style.opacity = 0;


document.addEventListener("scroll", function(){

   if( window.pageYOffset>  2000/4){
         document.getElementById("buttonUP").style.opacity = 1;
      } 
          else{
              document.getElementById("buttonUP").style.opacity = 0;
          }
            if(window.pageYOffset >= 0 && window.pageYOffset < 500)
            {
                 series.style.color = "red";
                 series.style.textDecoration = "underline";
                 series.style.width="100" + "%";
            }
                else {
                      series.style.color = "black";
                      series.style.textDecoration = "none";
                }
                    if(window.pageYOffset >= 500 && window.pageYOffset < 1200)
                    {
                        about.style.color = "red";
                        about.style.textDecoration = "underline";
                    }
                        else 
                            {
                             about.style.color = "black";
                             about.style.textDecoration = "none";
                            }   
                  if(window.pageYOffset >= 1200 && window.pageYOffset < 1600)
                  {
                    request.style.color = "red";
                    request.style.textDecoration = "underline";
                  }
            else 
                {
                 request.style.color = "black";
                 request.style.textDecoration = "none";
                }
        if(window.pageYOffset >= 1600)
        {
            createOwn.style.color = "red";
            createOwn.style.textDecoration = "underline";
        }
    else 
        {
         createOwn.style.color = "black";
         createOwn.style.textDecoration = "none"; 
        }
})
      let constUp;
      let myInterval;
      function Up(){
          
           constUp = window.pageYOffset;
           constUp-=100;
           window.scrollTo(0,constUp);
          
           if(window.pageYOffset==0)
            {             
               clearInterval(myInterval);
            }
      }
    document.getElementById("buttonUP").addEventListener('click', function(){  
     myInterval = setInterval(Up,20);
    })

      document.getElementById("myBar").style.width = 0+'%';
      document.addEventListener("scroll", function(){
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

      })
let sndBtn = document.getElementById("sendDataButton");
let strongTxt = document.querySelectorAll("strong");
let name = document.getElementById("firstname_field");
let surname = document.getElementById("lastname_field");
let phone = document.getElementById("phone_field");

sndBtn.addEventListener('click', function(){
if(name.value != '' && surname.value != '' && phone.value != '')
{
    let sur = surname.value.split('');
    strongTxt[1].innerHTML = name.value + " " + sur[0]+'.';
    strongTxt[2].innerHTML = phone.value;
    order.style.opacity = 1;
}
    else{
alert("Введите данные для оставления заявки");
    }
})

let leftslider = document.getElementById("leftSlide");
let rightslider = document.getElementById("rightSlide");



leftslider.addEventListener("click", function(){

    plusSlides(-1);
    
})
rightslider.addEventListener("click", function(){
    
    plusSlides(1);

})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
    
  if (n > slides.length) 
  {
      slideIndex = 1
  }    
      if (n < 1) 
      {
          slideIndex = slides.length
      }
          for (i = 0; i < slides.length; i++) 
          {
              slides[i].style.display = "none";  
          }
  slides[slideIndex-1].style.display = "block";  
}

let countingProducts = 1;

document.addEventListener("scroll", function(){
    
      if(window.scrollY+1 >= document.documentElement.scrollHeight-document.documentElement.clientHeight) 
      {

          for(let i =1; i<7; i++){

            var elem = document.querySelector('#product' + i);
            var clone = elem.cloneNode(true);

                    clone.id = 'product' + countingProducts;
                    clone.classList.add("fadeFromZero");
                    countingProducts++;

            let secta = document.querySelector(".goods-wrapper");
            secta.appendChild(clone);
          }
      }
})

    let countingStuff = 0;
    let arr =[];

    function addingStuff(parameter){
        
        let parametr = parameter;
        arr.push(parametr);
        countingStuff++;
        let stuff = document.getElementById("stuff");
        stuff.innerHTML = " "+countingStuff;
        
    }

 
          let seriesLet;
          let companyLet;
          let leaveLet;
          let constructorLet;

          let sharpCoord;
          let javaCoord;
          let jsCoord;
          let conclusionCoord;

          let topLinks = document.querySelectorAll("a");
          let coordsLinks = document.querySelectorAll("h2");
          let goodsNames = document.querySelectorAll("h4");

           seriesLet = coordsLinks[0].getBoundingClientRect();
           companyLet = coordsLinks[1].getBoundingClientRect();
           leaveLet = coordsLinks[2].getBoundingClientRect();
           constructorLet = coordsLinks[3].getBoundingClientRect();

      let header = document.querySelector(".mainheader");

      let toMove;
      let toMoveChanging;

      function linksMove(){
          
          if(toMove >toMoveChanging)
          {
             toMoveChanging+=70;
             window.scrollTo(0,toMoveChanging-65);
             
                   if(toMoveChanging>=toMove)
                   {
                    clearInterval(myInterval);
                   }
          }
          
          else{
                toMoveChanging-=70;
                window.scrollTo(0,toMoveChanging-70);
          
               if(toMoveChanging<=0)
               {
                clearInterval(myInterval);
               }
          }

      
    
      }
 topLinks[0].addEventListener('click', function(){
     
     toMoveChanging = window.pageYOffset;
     toMove = window.pageYOffset + coordsLinks[0].getBoundingClientRect().top-header.getBoundingClientRect().bottom ;
      myInterval = setInterval(linksMove,10);

 })
      topLinks[1].addEventListener('click', function(){
          toMoveChanging = window.pageYOffset;
          toMove = window.pageYOffset + coordsLinks[1].getBoundingClientRect().top-header.getBoundingClientRect().bottom ;
           myInterval = setInterval(linksMove,10);

 })
           topLinks[2].addEventListener('click', function(){
               toMoveChanging = window.pageYOffset;
                 toMove = window.pageYOffset + coordsLinks[2].getBoundingClientRect().top-header.getBoundingClientRect().bottom ;
                myInterval = setInterval(linksMove,10);

 })
                topLinks[3].addEventListener('click', function(){
                    toMoveChanging = window.pageYOffset;
                    toMove = window.pageYOffset + coordsLinks[3].getBoundingClientRect().top-header.getBoundingClientRect().bottom ;
                     myInterval = setInterval(linksMove,10);
 })

function modalChange(parameter){
    let modal = document.querySelector(".modal-body");
    let modalName = document.querySelector(".modal-title");
    if(parameter ==1){
    modal.innerHTML = "<img src=\'img/goods/1.png\' width=\'420px\' height=\'420px\'>";
    }
       else if(parameter ==2){
        modal.innerHTML = "<img src=\'img/goods/2.jpg\' width=\'430px\' height=\'430px\'>";
        }
             else if(parameter ==3){
            modal.innerHTML = "<img src=\'img/goods/3.jpg\' width=\'430px\' height=\'430px\'>";
            }
             else if(parameter ==4){
            modal.innerHTML = "<img src=\'img/goods/4.jpg\' width=\'430px\' height=\'430px\'>";
            }
         else if(parameter ==5){
        modal.innerHTML = "<img src=\'img/goods/5.jpg\' width=\'430px\' height=\'430px\'>";
        }
     else if(parameter ==6){
    modal.innerHTML = "<img src=\'img/goods/6.jpg\' width=\'430px\' height=\'430px\'>";
    }
 
    modalName.innerHTML = goodsNames[parameter-1].innerHTML;

}

function showGoodsInBag(){
    
    let modal = document.querySelector(".modal-body");
    let modalName = document.querySelector(".modal-title");
    modal.innerHTML ="";
    modal.style.display = "block";
    modal.style.textAlign = "left";
    modal.style.margin = "20" + "px";
    modal.style.verticalAlign ="top";
    modal.style.height ="auto";
    
        if(arr.length==0) modal.innerHTML ="";
    
    modalName.innerHTML = "Корзина";
    let price = 0;
    
    for(let i =0; i<arr.length; i++){
        
        modal.innerHTML += goodsNames[arr[i]-1].innerHTML +" - "+
        document.querySelector("#goodPriceNum"+arr[i]).innerHTML+" руб."+"<br>" ;
        price += Number(document.querySelector("#goodPriceNum"+arr[i]).innerHTML);
        
    }
        modal.innerHTML += "<hr>";
        modal.innerHTML +="<strong>"+"Итог"+" : "+ price+" руб."+"</strong>";

}