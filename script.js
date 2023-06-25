const guess=Math.round((Math.random()*20)+1);
let score=20;
function music(flag){
    if(flag===1){
        var play=new Audio("./music/aplause.wav");
        play.play();
    }
}
function wrong(){
    var p=new Audio("./music/beeps.mp3");
    p.play();
}
function hello(){
    var again=new Audio("./music/twitter_space.mp3");
    again.play();
}
document.querySelector(".check").addEventListener("click",function(){
    const a=Number(document.querySelector(".guess").value);
    if(!a){
        document.querySelector(".message").textContent="No number";
    }
    else if(a===guess){
        document.querySelector(".message").textContent=" 🎉 Correct number";
        document.querySelector(".number").style.width="30rem";
        document.getElementsByTagName("body")[0].style.backgroundColor="#60b347";
        document.querySelector(".number").innerHTML=guess;
        music(1);
    }
    else if(a>guess){
    document.querySelector(".message").textContent=" 📈 To high"; 
    wrong();
    score--;
    document.querySelector(".score").textContent=score;
    
    }
    else if(a<guess){
        document.querySelector(".message").textContent="📉 To less";
        wrong();
        score--;
        document.querySelector(".score").textContent=score;
    }
})
document.querySelector(".again").addEventListener("click",function(){
    hello();
    document.querySelector(".message").textContent="Start guessing...";
    document.getElementsByTagName("body")[0].style.backgroundColor="#222";
    document.querySelector(".number").style.width="15rem";
    document.querySelector(".number").textContent='?';
    document.querySelector(".guess").value='';
    document.querySelector(".score").textContent=0;
    document.querySelector(".highscore").textContent=score;
})