//  function toggleColor() 
//     {
//     document.body.style.backgroundColor =
//       (document.body.style.backgroundColor === "black") ? "white" : "black";
//     document.body.style.color =
//       (document.body.style.color === "white") ? "black" : "white";
//     var text = document.getElementsByTagName("p")[0];
//     text.style.color = (text.style.color === "white") ? "black" : "white";
//     }
//   function reverseColor() 
//     {
//     document.body.style.backgroundColor =
//       (document.body.style.backgroundColor === "black") ? "white" : "black";
//     document.body.style.color =
//       (document.body.style.color === "white") ? "black" : "white";
//     }
  
//   function reverseColor()
//     {
//     document.body.style.backgroundColor =
//       (document.body.style.backgroundColor === "black") ? "white" : "black";
//     document.body.style.color =
//       (document.body.style.color === "white") ? "black" : "white";
//     }

document.getElementById('id-sun').onclick = function()
{
  document.getElementById('page').classList.remove('dark-mode')
  document.getElementById('id-moon').classList.remove('active')
  this.classList.add('active')
}

document.getElementById('id-moon').onclick = function(){
  document.getElementById('page').classList.add('dark-mode')
  document.getElementById('id-sun').classList.remove('active')
  this.classList.add('active')
}
