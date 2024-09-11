let boxes=document.querySelectorAll(".box")
let newbtn =document.querySelector("#newBtn")
let resetbtn=document.querySelector("#resetBtn")
let container=document.querySelector(".winContainer")
let winner=document.querySelector("#winner")
let turn0 = true
const wingame =[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
  ];
  const resetgame = () => {
      turn0=true
      enablebox();
      container.classList.add ("hide")
  }
  boxes.forEach((box)=>{
  box.addEventListener("click",() => {
     if (turn0) {
       box.textContent='X'
       turn0=false
     } else {
       box.textContent='O'
       turn0=true
     }
     box.disabled=true
     checkWinner();
  })
  } )
  const enablebox= () => {
      for (let box of boxes) {
        box.disabled=false;
        box.textContent="";
      }
  }
  const disabledbox = () => {
      for (let box of boxes) {
        box.disabled=true;
      
      }
  }
 
  const showwin = (post1) => {
      
      container.classList.remove("hide")
     winner.textContent='Congratulation ,winner is. ' +(post1)
      disabledbox();
  }
  
  const checkWinner =() =>{
   for ( let pattern of wingame) {
let post1=boxes[pattern[0]].textContent;
let post2=boxes[pattern[1]].textContent;
let post3=boxes[pattern[2]].textContent;
if (post1!=""&&post2!=""&&post3!="") {
  if (post1===post2&& post2===post3) {
    showwin(post1);
  }
}
   }
  }
  newbtn.addEventListener("click",resetgame)
    resetbtn.addEventListener("click",resetgame)