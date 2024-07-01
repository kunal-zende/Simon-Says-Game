let gamesql = [];
let usersql = [];
let color = ["green","blue","red","yellow"];
let p = document.querySelector("p");
let start = false;
let level = 0;

document.addEventListener("keypress",function(){
    if(start == false){
        // console.log("Game Started");
        p.innerText = "Game Started";
        start=true;
        levelUp();
    }
});

function levelUp(){
    usersql=[];
    level++;
    p.innerText=`level ${level}`;
    let randomnum = Math.floor(Math.random()*3);
    let colorinarray = color[randomnum];
    let colorbtn = document.querySelector(`.${colorinarray}`);
    // console.log(randomnum);
    // console.log(colorinarray);
    // console.log(colorbtn);
    gamesql.push(colorinarray);
    console.log(gamesql);
    blink(colorbtn);
};

function blink(change){
   change.classList.add("flash");
    setTimeout(function() {
        change.classList.remove("flash")},250);
};

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",buttonpress);
}


function buttonpress(){
    let btn = this;
    userblink(btn);
   
    let name = btn.getAttribute("id");
    usersql.push(name);
    // console.log(usersql);000

    checkans(usersql.length-1);
}


function userblink(change){
    change.classList.add("userflash");
     setTimeout(function() {
    change.classList.remove("userflash")},200);
};


function checkans(index){
    if(gamesql[index] === usersql[index]){
        if(usersql.length== gamesql.length){
           setTimeout(levelUp,1000);
        }
    }else{
        p.innerHTML=`<b>Game Over! <br>Score is ${level}<br>Press any key to start<b/>`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){document.querySelector("body").style.backgroundColor="white";},150);
        reset();
    }
};

function reset(){
    start = false;
    gamesql = [];
    usersql = [];
    level = 0;
}


// function highScore(){
//     let high = 0;    
//     if(level > high){
//         high = level;
//     }
//     p.innerHTML=`<b>Game Over! Press any key to start<b/><br>Heigh Score is ${high}`;
// }