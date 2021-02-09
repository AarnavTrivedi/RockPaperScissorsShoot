let classname = document.getElementsByClassName("button")
let prock = document.getElementsByClassName("btn1")
let p2paper = document.getElementsByClassName("btn2")
let p2scissors = document.getElementsByClassName("btn3")
// let player3 = 1
// let player2 = 1
// let playerscore = document.getElementById("score1").innerText = player3
// let compscore = document.getElementById("score2").innerText = player2

  document.getElementById("btn4").addEventListener('click', Random)
  document.getElementById("btn5").addEventListener('click', Reset)
 document.getElementById("form").addEventListener('click', rock)
 document.getElementById("saveform1").addEventListener('click', Paper)
 document.getElementById("saveform2").addEventListener('click', Scissors)
 function rock(){
     let player = 0 
               let computer = Math.floor(Math.random() * 3)

  if(player === 0 && computer === 0){
     document.getElementById("win").textContent = "Rock"
      document.getElementById("lose").textContent = "Rock"
        document.getElementById("outcome").textContent = "Its A Tie!"
        document.getElementById("outcome").style.color = "#827b8a";
  }  

  if(player === 0 && computer === 1){
     document.getElementById("win").textContent = "Rock"
      document.getElementById("lose").textContent = "Paper"
        document.getElementById("outcome").textContent = "You Lost!"
             document.getElementById("outcome").style.color = "red";
  }  
  if(player === 0 && computer === 2){
     document.getElementById("win").textContent = "Rock"
      document.getElementById("lose").textContent = "Scissors"
        document.getElementById("outcome").textContent = "You Win!"
         document.getElementById("outcome").style.color = "green";
  }  


     }
 function Scissors(){
     
let player = 2 
let computer = Math.floor(Math.random() * 3)

  if(player === 2 && computer === 2){
     document.getElementById("win").textContent = "Scissors"
      document.getElementById("lose").textContent = "Scissors"
        document.getElementById("outcome").textContent = "Its A Tie!"
        document.getElementById("outcome").style.color = "#827b8a";
        
  }  

  if(player === 2 && computer === 1){
     document.getElementById("win").textContent = "Scissors"
      document.getElementById("lose").textContent = "Paper"
        document.getElementById("outcome").textContent = "You Lost!"
          document.getElementById("outcome").style.color = "red"; 
  }  
  if(player === 2 && computer === 0){
     document.getElementById("win").textContent = "Scissors"
      document.getElementById("lose").textContent = "Rock"
        document.getElementById("outcome").textContent = "You Win!"
          document.getElementById("outcome").style.color = "green";
  }  
 
 
 }    
 function Paper(){
     let player = 1
          let computer = Math.floor(Math.random() * 3)
   if(player === 1 && computer === 1){
     document.getElementById("win").textContent = "Paper"
      document.getElementById("lose").textContent = "Paper"
        document.getElementById("outcome").textContent = "Its A Tie!"
         document.getElementById("outcome").style.color = "#827b8a";
  }  

  if(player === 1 && computer === 0){
     document.getElementById("win").textContent = "Paper"
      document.getElementById("lose").textContent = "Rock"
        document.getElementById("outcome").textContent = "You Win!"
        document.getElementById("outcome").style.color = "green";
  }  
  if(player === 1 && computer === 2){
     document.getElementById("win").textContent = "Paper"
      document.getElementById("lose").textContent = "Scissors"
        document.getElementById("outcome").textContent = "You Lose!"
        document.getElementById("outcome").style.color = "red";
  }  

  
 
 }       
 
 
function Random() {
        
      let player =  Math.floor(Math.random() * 3)
          let computer = Math.floor(Math.random() * 3)
  if(player === 0 && computer === 0){
     document.getElementById("win").textContent = "Rock"
      document.getElementById("lose").textContent = "Rock"
        document.getElementById("outcome").textContent = "Its A Tie!"
         document.getElementById("outcome").style.color = "#827b8a";
  }  


    else if(player ===  0  && computer === 1){
      document.getElementById("win").textContent = "Rock"
      document.getElementById("lose").textContent = "Paper"
      document.getElementById("outcome").textContent = "You Lose!"
      document.getElementById("outcome").style.color = "red";
  }  
  
  
      else if(player === 1 && computer === 0){
       document.getElementById("win").textContent = "Paper"
       document.getElementById("lose").textContent = "Rock"
       document.getElementById("outcome").textContent = "You Win!"
       document.getElementById("outcome").style.color = "green";
  }  
    
    
        else if(player ===  1  && computer === 1){
        document.getElementById("win").textContent = "Paper"
        document.getElementById("lose").textContent = "Paper"
        document.getElementById("outcome").textContent = "Its A Tie!"
         document.getElementById("outcome").style.color = "#827b8a";
  }  
  
    
       else if(player ===  2  && computer === 2){
    
         document.getElementById("outcome").textContent = "Its a tie!"
         document.getElementById("win").textContent = "Scissors"
       document.getElementById("lose").textContent = "Scissors"
        document.getElementById("outcome").style.color = "#827b8a";
  }  
  
       else if(player ===  2  && computer === 1){

         document.getElementById("outcome").textContent = "You Win!"
         document.getElementById("win").textContent = "Scissors"
         document.getElementById("lose").textContent = "Paper"
          document.getElementById("outcome").style.color = "green";
         
  }  
  
       else if(player ===  1 && computer === 2){

         document.getElementById("outcome").textContent = "You Lose!"
         document.getElementById("win").textContent = "Paper"
       document.getElementById("lose").textContent = "Scissors"
       document.getElementById("outcome").style.color = "red";
  }  
  
       else if(player ===  2  && computer === 0){
 
         document.getElementById("outcome").textContent = "You Lose!"
         document.getElementById("win").textContent = "Scissors"
       document.getElementById("lose").textContent = "Rock"
       document.getElementById("outcome").style.color = "red";
  }  
  
  
  
     
  else if(player ===  0  && computer === 2){
      
         document.getElementById("outcome").textContent = "You Win!"
         document.getElementById("win").textContent = "Rock"
       document.getElementById("lose").textContent = "Scissors"
         document.getElementById("outcome").style.color = "green";
  }  
  
    
    



} 

// var hi = document.querySelector("#btn5")
// hi.addEventListener('click', function(){
                       
//       console.log("hi")
// })

function Reset() {

  document.querySelector(".body").style.color = "";

}