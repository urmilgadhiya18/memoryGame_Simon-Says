let len=0;
let max=0;
let level=0;
let sys=new Array();
let user=new Array();

let s = document.getElementById("input");
s.addEventListener("keypress", function(event){
    event.preventDefault();
    if(sys.length==0) blinkRandom();
});

function hariGyo(){
sys=[];
user=[];
len=0;
if(max<level-1) max=level-1;
alert("Current Score : "+(level-1)+"\nMax. Score : "+(max));
level=0;
}

function red(){
document.getElementById("1").style.backgroundColor="#808080";
setTimeout(()=>{
    document.getElementById("1").style.backgroundColor="red";      
},100)
user.push(1);
if(user[len]!=sys[len]) hariGyo();
else len++;
if(len==sys.length) blinkRandom();
}

function green(){
document.getElementById("2").style.backgroundColor="#808080";
setTimeout(()=>{
    document.getElementById("2").style.backgroundColor="green";      
},100)
user.push(2);
if(user[len]!=sys[len]) hariGyo();
else len++;
if(len==sys.length) blinkRandom();
}

function blue(){
document.getElementById("3").style.backgroundColor="#808080";
setTimeout(()=>{
    document.getElementById("3").style.backgroundColor="blue";      
},100)
user.push(3);
if(user[len]!=sys[len]) hariGyo();
else len++;
if(len==sys.length) blinkRandom();
}

function yellow(){
document.getElementById("4").style.backgroundColor="#808080";
setTimeout(()=>{
    document.getElementById("4").style.backgroundColor="yellow";      
},100)
user.push(4);
if(user[len]!=sys[len]) hariGyo();
else len++;
if(len==sys.length) blinkRandom();
}

function blinkRandom(){
len=0;
user=[];
level++;
document.getElementById('level').innerText="Level : "+level;
let num=Math.floor(Math.random()*4)+1;
sys.push(num);

document.getElementById(num).style.backgroundColor="#fff";
setTimeout(()=>{
    if(num==1) document.getElementById(num).style.backgroundColor="red";
    else if(num==2) document.getElementById(num).style.backgroundColor="green";
    else if(num==3) document.getElementById(num).style.backgroundColor="blue";
    else if(num==4) document.getElementById(num).style.backgroundColor="yellow";            
},200)
}
