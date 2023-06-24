
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
function getrandomcard(){
    let randomNumber = Math.floor(Math.random()*10)+1

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
    message="black jack"
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

