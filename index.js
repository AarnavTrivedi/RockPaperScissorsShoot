let classname = document.getElementsByClassName("button")
let prock = document.getElementsByClassName("btn1")
let p2paper = document.getElementsByClassName("btn2")
let p2scissors = document.getElementsByClassName("btn3")


  document.getElementById("btn4").addEventListener('click', Random)
  document.getElementById("btn5").addEventListener('click', Reset)
 document.getElementById("form").addEventListener('click', rock)
 document.getElementById("saveform1").addEventListener('click', Paper)
 document.getElementById("saveform2").addEventListener('click', Scissors)

  
 let player3 = 0
 let player2 = 0
 let playerscore = document.getElementById("score1").innerText = player3
 let compscore = document.getElementById("score2").innerText = player2  



 // When Rock Butto Is Hit
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
             player2 += 1 
  compscore = document.getElementById("score2").innerText = player2  

            
  }  

  if(player === 0 && computer === 2){
     document.getElementById("win").textContent = "Rock"
      document.getElementById("lose").textContent = "Scissors"
        document.getElementById("outcome").textContent = "You Win!"
         document.getElementById("outcome").style.color = "green";
         player3 += 1 
         playerscore = document.getElementById("score1").innerText = player3
         
        
 
  }  


  
  if(player2 >= 25 && player3 < 25 ){
    document.querySelector(".wintag").textContent = "Haha Loser Your Trash Kid!"
    document.querySelector(".wintag").style.color = "#7d1616"
    setTimeout(score, 4000);

} 


if(player3 >= 25 && player2 < 25 ){
 document.querySelector(".wintag").textContent = "Winner Winner Chicken Dinner!"
 document.querySelector(".wintag").style.color = "#7ddb96"
 setTimeout(score, 4000);

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
          player2 += 1 
  compscore = document.getElementById("score2").innerText = player2  


  }  
  if(player === 2 && computer === 0){
     document.getElementById("win").textContent = "Scissors"
      document.getElementById("lose").textContent = "Rock"
        document.getElementById("outcome").textContent = "You Win!"

     
          player3 += 1 
         playerscore = document.getElementById("score1").innerText = player3

        

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
        player3 += 1 
         playerscore = document.getElementById("score1").innerText = player3

       
  }
   
   (player === 1 && computer === 2){  
   
  document.getElementById("win").textContent = "Paper"
      document.getElementById("lose").textContent = "Scissors"
        document.getElementById("outcome").textContent = "You Lost!"
             document.getElementById("outcome").style.color = "red";
             player2 += 1 
  compscore = document.getElementById("score2").innerText = player2      
   
   
   }

   
  
  if(player2 >= 25 && player3 < 25 ){
    document.querySelector(".wintag").textContent = "You Lost!"
    document.querySelector(".wintag").style.color = "#7d1616"
    setTimeout(score, 4000);

} 


if(player3 >= 25 && player2 < 25 ){
 document.querySelector(".wintag").textContent = "Winner Winner Chicken Dinner!"
 document.querySelector(".wintag").style.color = "#7ddb96"
 setTimeout(score, 4000);

} 



   }

  
 
      
















































 
 // When Random Button Is Hit. It randomizes the option for you so you don't choose rock paper or scissors
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
      player2 += 1 
      compscore = document.getElementById("score2").innerText = player2  
  }  
  
  
      else if(player === 1 && computer === 0){
       document.getElementById("win").textContent = "Paper"
       document.getElementById("lose").textContent = "Rock"
       document.getElementById("outcome").textContent = "You Win!"
       document.getElementById("outcome").style.color = "green";
       player3 += 1 
       playerscore = document.getElementById("score1").innerText = player3
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
       player2 += 1 
  compscore = document.getElementById("score2").innerText = player2  
  }  
  
       else if(player ===  2  && computer === 0){
 
         document.getElementById("outcome").textContent = "You Lose!"
         document.getElementById("win").textContent = "Scissors"
       document.getElementById("lose").textContent = "Rock"
       document.getElementById("outcome").style.color = "red";
       player2 += 1 
  compscore = document.getElementById("score2").innerText = player2  
  }  
  
  
  
     
  else if(player ===  0  && computer === 2){
      
         document.getElementById("outcome").textContent = "You Win!"
         document.getElementById("win").textContent = "Rock"
       document.getElementById("lose").textContent = "Scissors"
         document.getElementById("outcome").style.color = "green";
         player3 += 1 
         playerscore = document.getElementById("score1").innerText = player3
        }  
  
    
    

        if(player2 >= 25 && player3 < 25 ){
          document.querySelector(".wintag").textContent = "Haha Loser Your Trash Kid!"
          document.querySelector(".wintag").style.color = "#7d1616"
          setTimeout(score, 4000);
      
      } 
     
    
      if(player3 >= 25 && player2 < 25 ){
       document.querySelector(".wintag").textContent = "Winner Winner Chicken Dinner!"
       document.querySelector(".wintag").style.color = "#7ddb96"
       setTimeout(score, 4000);
   
   } 
   
  

} 



function Reset() {

  document.querySelector(".body").style.color = "";

}

function score() {
  window.location.href=window.location.href
}


