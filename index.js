
let cardes=[]
let sum = 0
let hasblackjack = false
let isAlive=false
let message=""
let player ={
    name:"priyanshu :",
    chip: 230
}

let amount=document.getElementById('chips')
amount.textContent=player.name + " "+"$"+player.chip
let messagA =document.getElementById("messagea")
let card=document.getElementById("add")
let twocards= document.getElementById("show")
let card1 = document.getElementById("back")
let card2 = document.getElementById("front")
function getrandomcard(){
    let randomNumber = Math.floor(Math.random()*13)+1

    if(randomNumber === 1){
        return 11
    }
    
    else if(randomNumber > 10){
        return 10
    }
    else{
        return randomNumber
    }
   
   
    
}

function startgame(){
     let firstcard=getrandomcard()
  let secondcard=getrandomcard()
  
 isAlive=true
 cardes=[firstcard,secondcard]
 sum = firstcard+secondcard
 if(firstcard===11){
    card1.src="ace.png"
}
else if(firstcard===10){
    card1.src="10sp.png"
}
else if(firstcard===9){
    card1.src="9sp.png"
}
else if(firstcard===8){
    card1.src="8.png"
}
else if(firstcard===7){
    card1.src="7sp.png"
}
else if(firstcard===6){
    card1.src="6sp.png"
}
else if(firstcard===5){
    card1.src="5sp.png"
}
else if(firstcard===4){
    card1.src="4sp.png"
}
else if(firstcard===3){
    card1.src="3sp.png"
}
else if(firstcard===2){
    card1.src="2sp.png"
}

else{
    card1.src="back.png"
   
}

if(secondcard===11){
    card2.src="king.png"
}
else if(secondcard===10){
    card2.src="10sp.png"
}
else if(secondcard===9){
    card2.src="9sp.png"
}
else if(secondcard===8){
    card2.src="8.png"
}
else if(secondcard===7){
    card2.src="7sp.png"
}
else if(secondcard===6){
    card2.src="6sp.png"
}
else if(secondcard===5){
    card2.src="5sp.png"
}
else if(secondcard===4){
    card2.src="4sp.png"
}
else if(secondcard===3){
    card2.src="3sp.png"
}
else if(secondcard===2){
    card2.src="2sp.png"
}
else{
        
    card2.src="back.png"
}  
    rendergame()

  
}
function rendergame(){
    card.textContent="sum"+":"+sum
    twocards.textContent="cards :"
    for( let i=0; i<cardes.length;i++){
        twocards.textContent+=cardes[i]+"   "
    }
    
    
if(sum<21){
  
    message="want pick pick another card"
}
else if(sum === 21){
  
    hasblackjack=true
    message="**$$$$$**black jack**$$$$$"
}
else{
 
isAlive=false
message="you lose : "
}
 
messagA.textContent=message
}
function newcard(){
    if(isAlive=== true && hasblackjack=== false){
     let card= getrandomcard()
     sum+=card
     cardes.push(card)
   
     rendergame()
    }

}

