function npc(){
    /*Random number between 0-2
    0 = Rock
    1 = Paper
    2 = Scissor */
    let rnd = Math.floor(Math.random() * (2-0+1))+0;
    return rnd;

}

function userInput(){
    let player = prompt("Enter your choice: ");

    if(player.toLowerCase() == "rock"){
        return 0;
    }
    else if(player.toLowerCase() == "paper") {
        return 1;
    }
    else if(player.toLowerCase() == "scissor") {
        return 2;
    }

}

function gameRound(){
    /*
    0 = Lose
    1 = Win
    2 = draw
        */
    let enemy = npc();

    let player = userInput();

    if(player == 0 & enemy == 0){
        alert("draw");
        return 2;
    }
    else if(player == 0 & enemy == 1){
        alert("You Lose");
        return 0;
    }
    else if(player == 0 & enemy == 2){
        alert("You Win");
        return 1;
    }
    else if(player == 1 & enemy == 0){
        alert("You Win");
        return 1;
    }
    else if(player == 1 & enemy == 1){
        alert("draw");
        return 2;
    }
    else if(player == 1 & enemy == 2){
        alert("You Lose");
        return 0;
    }
    else if(player == 2 & enemy == 0){
        alert("You Lose");
        return 0;
    }
    else if(player == 2 & enemy == 1){
        alert("You Win");
        return 1;
    }
    else if(player == 2 & enemy == 2){
        alert("draw");
        return 2;
    }
    else{
        alert("Wrong Input");
    }

}

function game(){

    let player = 0;
    let npc = 0;

    for(let i = 0;i<5;i++){

        let x = gameRound();
        if(x == 0){
            npc += 1;
        }
        else if(x == 1){
            player+=1;
        }
        
    }

    if(player > npc){
        alert("You Win");
    }
    else if(player < npc){
        alert("You Lose");
    }
    else{
        alert("draw");
    }
}

game();