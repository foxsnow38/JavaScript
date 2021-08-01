// // val = document.getElementsByClassName("d-flex flex-wrap");
// // val = document.children;
// // // val = document.getElementsByClassName("card m-2 border-0 d-inline-block bg-dark")

// // val = 

// var val = document.querySelector("#cardlar").childNodes;
// var bool= true;
// val= document.getElementsByClassName("card m-2 border-0 d-inline-block bg-dark");
// for(let i=0  ;i<val.length; i++)
// {
//     if(val[i].nodeType===1){
//         console.log(val[i]);
//         if(bool==true){
//         val[i].addEventListener("mouseover",mouseshow);
//         bool=false;
//     }
//         if(bool==false){
//  val[i].addEventListener("mouseout",mouseclose);
//
// }
    
//     function mouseshow(){
//       val= document.getElementsByClassName("w-100  text-white card-img-overlay")[i].setAttribute("class","w-100  text-white card-img-overlay");
//         console.log(val);
//     }

//     function mouseclose(){
//         val= document[i].setAttribute("class","w-100  text-white card-img-overlay");
//         console.log(val);
        
//     }
    
// }

// //  for(let i=0;i<val.length;i++)
// //  {
// //      addEventListener("click",)
// //      function(e){

// //      }
// //  }

// var divcards = document.getElementById("cardlar").childNodes;
// var divcards_layer;


// console.log(divcards[1].childNodes);
// for(var i=0; i<divcards.length;i++){
// if(divcards[i].nodeType===1){
//     console.log(divcards[i])
// var a=i
//     divcards[i].addEventListener("mouseenter",mouseshow);
//     divcards[i].addEventListener("mouseout",mouseclose);
// }
// function mouseshow(){
//     divcards[dizi].childNodes[1].setAttribute("class","w-100  text-white card-img-overlay")
//     divcards[dizi].childNodes[3].setAttribute("style","opacity: 0.2;");
//     console.log("DAVAY")
         

// }
// function mouseclose(){
//     divcards[dizi].childNodes[1].setAttribute("class","d-none w-100  text-white card-img-overlay")
//     divcards[dizi].childNodes[3].setAttribute("style","opacity: 1;")
// }

// }






  var divcards = document.getElementById("cardlar").childNodes;
  var divcards_card =new Array();
  for (let i=0; i<divcards.length;i++){
if(divcards[i].nodeType==1)
  {
      divcards_card.unshift(divcards[i]);
    console.log(divcards_card);
}
}
for(let a=0; a<divcards_card.length;a++)
{
   divcards_card[a].addEventListener("mouseenter",mouseshow);
   divcards_card[a].addEventListener("mouseout",mouseclose);

 function mouseclose(){
    divcards_card[a].childNodes[1].setAttribute("class","d-none w-100  text-white card-img-overlay")
     divcards_card[a].childNodes[3].setAttribute("style","opacity: 1;")
      }


 function mouseshow(){
        divcards_card[a].childNodes[1].setAttribute("class","w-100  text-white card-img-overlay")
      divcards_card[a].childNodes[3].setAttribute("style","opacity: 0.2;");
 }

}









