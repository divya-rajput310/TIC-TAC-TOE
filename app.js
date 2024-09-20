let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let body=document.querySelector("body");

let turnO= true;
let count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () =>{ //4 => it reset the game
    turnO= true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes. forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turnO==true){
            box.innerText="O";    
            turnO=false;
        }else{
            box.innerText="X";   
            turnO=true;
        }
        box.disabled=true;
        count++;

        let isWin=checkWin();

        if(count==9 && !isWin){
            gameDraw();
        }
    });
}) ;//1=> click the buttons with O and X acc. to the turn

const gameDraw=()=>{
    msg.innerText='Game was Draw';
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = ()=>{ //5 => it disable the button when winner is announce
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = ()=>{ //6 => it start the new game
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{ //3 => print the winner
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}



const checkWin=()=>{ //2=> check that which player will win
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText; //positions of O and X
        let pos2Val = boxes[pattern[1]].innerText; //positions of O and X
        let pos3Val = boxes[pattern[2]].innerText;  //positions of O and X

        if(pos1Val !==""&& pos2Val !="" && pos3Val !==""){ //positions are not empty
            if(pos1Val === pos2Val && pos2Val === pos3Val){

                showWinner(pos1Val);
                return true;

            }
        }
    }
};
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

