let pushup=document.getElementById("pushup");
let pushdown=document.getElementById("pushdown");
let up=true;
let Myinterval=setInterval;
let Myinterval2=setInterval;
let pushtime=60;
let outputpush=document.getElementById("sec");



function push(){
    if (up){
        pushup.style.display="none";
        pushdown.style.display="block";
    }else{
        pushup.style.display="block";
        pushdown.style.display="none";
    }
    up=!up;
}
function timing(){
    pushtime--;
    if (pushtime>0){
    outputpush.innerHTML=pushtime;
    }
    else if (pushtime<=0){
        outputpush.innerHTML=0;
    }
}

document.getElementById("pushupplay").addEventListener("click",function(){
    clearInterval(Myinterval2);
    clearInterval(Myinterval);
    Myinterval=setInterval(push,500);
    Myinterval2=setInterval(timing,1000);
})
document.getElementById("pushupstop").addEventListener("click",function(){
    clearInterval(Myinterval);
    clearInterval(Myinterval2);
})
document.getElementById("pushupreset").addEventListener("click",function(){
    clearInterval(Myinterval);
    clearInterval(Myinterval2);
    pushtime=60;
    outputpush.innerHTML=pushtime;
})

let weighted=document.getElementById("weighted");
let weighted2=document.getElementById("weighted2");
let up1=true;
let Myinterval3=setInterval;
let Myinterval4=setInterval;
let weighttime=60;
let outputweight=document.getElementById("sec1");



function weighty(){
    if (up1){
        weighted.style.display="none";
        weighted2.style.display="block";
    }else{
        weighted.style.display="block";
        weighted2.style.display="none";
    }
    up1=!up1;
}
function timing1(){
    weighttime--;
    if (weighttime>0){
    outputweight.innerHTML=weighttime;
    }
    else if (weighttime<=0){
        outputweight.innerHTML=0;
    }
}

document.getElementById("weightplay").addEventListener("click",function(){
    clearInterval(Myinterval4);
    clearInterval(Myinterval3);
    Myinterval3=setInterval(weighty,500);
    Myinterval4=setInterval(timing1,1000);
})
document.getElementById("weightstop").addEventListener("click",function(){
    clearInterval(Myinterval3);
    clearInterval(Myinterval4);
})
document.getElementById("weightreset").addEventListener("click",function(){
    clearInterval(Myinterval3);
    clearInterval(Myinterval4);
    weighttime=60;
    outputweight.innerHTML=weighttime;
})


let squats=document.getElementById("squats");
let squats2=document.getElementById("squats2");
let up2=true;
let Myinterval5=setInterval;
let Myinterval6=setInterval;
let squattime=60;
let outputsquat=document.getElementById("sec2");



function squaty(){
    if (up2){
        squats.style.display="none";
        squats2.style.display="block";
    }else{
        squats.style.display="block";
        squats2.style.display="none";
    }
    up2=!up2;
}
function timing3(){
    squattime--;
    if (squattime>0){
    outputsquat.innerHTML=squattime;
    }
    else if (squattime<=0){
        outputsquat.innerHTML=0;
    }
}

document.getElementById("squatplay").addEventListener("click",function(){
    clearInterval(Myinterval5);
    clearInterval(Myinterval6);
    Myinterval5=setInterval(squaty,500);
    Myinterval6=setInterval(timing3,1000);
})
document.getElementById("squatstop").addEventListener("click",function(){
    clearInterval(Myinterval5);
    clearInterval(Myinterval6);
})
document.getElementById("squatreset").addEventListener("click",function(){
    clearInterval(Myinterval5);
    clearInterval(Myinterval6);
    squattime=60;
    outputsquat.innerHTML=squattime;
})

window.addEventListener("load",function(){
    document.getElementById("preloader").style.display="none";
})

let light=false;

document.getElementById("dark").addEventListener("click",function(){
    if (light){
        document.body.style.background="white";
        document.body.style.color="rgb(62, 57, 57)";
        document.getElementById("planh2").style.color="rgb(62, 57, 57)";
        document.getElementById("trainh2").style.color="rgb(62, 57, 57)";
        document.getElementById("moveh2").style.color="rgb(62, 57, 57)";
        document.getElementById("memberh2").style.color="rgb(62, 57, 57)";
        document.getElementById("contacth2").style.color="rgb(62, 57, 57)";
        document.getElementById("feedtitly").style.color="rgb(62, 57, 57)";
    }else{
        document.body.style.background="#181C14";
        document.getElementById("planh2").style.color="white";
        document.getElementById("trainh2").style.color="white";
        document.getElementById("moveh2").style.color="white";
        document.getElementById("memberh2").style.color="white";
        document.getElementById("contacth2").style.color="white";
        document.getElementById("feedtitly").style.color="white";

}
    light=!light
})


let beginner=document.getElementById("Beginnery");
let basic=document.getElementById("basicy");
let expert=document.getElementById("experty");
beginner.addEventListener("click",function(){
    alert("you have subscribed to our beginner pack.");
    this.style.background="grey";
    this.style.border="1px solid black";
    this.style.color="black";
    this.style.cursor="not-allowed"
    this.innerHTML="Subscribed";
    basic.innerHTML="Upgrade to beast";
    expert.innerHTML="Upgrade to legend";

})



basic.addEventListener("click",function(){
    alert("you have subscribed to our beast pack.");
    this.style.background="grey";
    this.style.border="1px solid black";
    this.style.color="black";
    this.style.cursor="not-allowed"
    this.innerHTML="Subscribed";
    beginner.style.background="grey";
    beginner.style.border="1px solid black";
    beginner.style.color="black";
    beginner.style.cursor="not-allowed";
    beginner.innerHTML="can't downgrade";
    expert.innerHTML="Upgrade to legend";
})


expert.addEventListener("click",function(){
    alert("you have subscribed to our legend pack.");
    this.style.background="grey";
    this.style.border="1px solid black";
    this.style.color="black";
    this.style.cursor="not-allowed"
    this.innerHTML="Subscribed";
    basic.style.background="grey";
    basic.style.border="1px solid black";
    basic.style.color="black";
    basic.style.cursor="not-allowed";
    basic.innerHTML="can't downgrade";
    beginner.style.background="grey";
    beginner.style.border="1px solid black";
    beginner.style.color="black";
    beginner.style.cursor="not-allowed";
    beginner.innerHTML="can't downgrade";
})


const track=document.querySelector(".carouseltr");
const cards= Array.from(track.children);

let place=0;
 const cardwidth=cards[0].offsetWidth;
//i used some help on this part cuz i tried doing it in a different way but it didn't work out

setInterval(()=>{
    place++;
    if (place>=cards.length) {
        place=0;
    }
    track.style.transform=`translateX(-${place * cardwidth}px)`
},5000)