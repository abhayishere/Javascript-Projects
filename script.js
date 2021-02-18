var ms=0,s=0,m=0;
var stopwatchel=document.querySelector('.stopwatch');
var lapscont=document.querySelector('.laps');
var timer;


function start(){
    if(!timer)
    timer=setInterval(run,10);
}

function run(){
    stopwatchel.textContent=(m<10 ? "0"+m:m)+":"+(s<10 ? "0"+s:s)+":"+(ms<10 ? "0"+ms:ms);
    ms++;
    if(ms==100){
        s++;
        ms=0;
    }
    if(s==60){
        s=0;
        m++;
    }
}

function pause(){
    clearInterval(timer);
    timer=false;
}

function restart(){
    clearInterval(timer);
    timer=false;
    ms=0;s=0;m=0;
    stopwatchel.textContent=(m<10 ? "0"+m:m)+":"+(s<10 ? "0"+s:s)+":"+(ms<10 ? "0"+ms:ms);
}

function lap(){
    if(timer){
        var li=document.createElement('li');
        li.innerText=(m<10 ? "0"+m:m)+":"+(s<10 ? "0"+s:s)+":"+(ms<10 ? "0"+ms:ms);
        lapscont.appendChild(li);
    }
}

function resetLaps(){
    lapscont.innerHTML='';
}


