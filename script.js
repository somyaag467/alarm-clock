function updateClock(){
    const date=new Date();
    document.getElementById("currdate").innerHTML=date.toLocaleDateString();
    document.getElementById("currtime").innerHTML=date.toLocaleTimeString();

}
updateClock();
setInterval(updateClock,1000);
 const timer=setInterval(updateClock,5000);
 //clearInterval(timer);
 function helper(seconds){
    const h=Math.floor( seconds/3600);
    const m= Math.floor(seconds%3600/60);
    const s= seconds%60;
    return String(h).padStart(2,"0")+":"+String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");
 }
  let swsecond=0;
 let swId=null;//for id
 function startstopwatch(){
    if(swId!==null)
        return;
    swId=setInterval(function(){
        swsecond++;
        document.getElementById("stopwatch").textContent=helper(swsecond);
    },1000);//hepler se hours mintue and scond me aayega

    }
    function stopStopwatch(){
        clearInterval(swId);
        swId=null;} 

        function resetStopwatch(){
            stopStopwatch();
            swsecond=0;
            document.getElementById("stopwatch").innerHTML=0;}
            
            
            
            let timerSeconds=0;
            let timerId=null;
            
            function startTimer(){
                clearInterval(timerId);
                timerSeconds=Number(document.getElementById("timerinput").value);
            document.getElementById("timer").innerHTML=helper(timerSeconds);
            timerId=setInterval(function(){
            timerSeconds--;
            document.getElementById("timer").innerHTML=helper(timerSeconds);
            if(timerSeconds<=0){
            clearInterval(timerId);
            alert("Time's Up");
        }
    },1000);
}

let alarmId=null;

function setAlarm(){
    const alarmTime=document.getElementById("alarminput").value;
    if(alarmTime===""){
        alert("pls enter alarm time");
        return;
    }
    clearInterval(alarmId);
    document.getElementById("alarmStatus").textContent="THE alarm is set for"+alarmTime;
    alarmId=setInterval(function(){
const curr=new Date();
const h=curr.getHours();
const m=curr.getMinutes();
const currtime=String(h)+":"+String(m);
if(currtime===alarmTime){
    document.getElementById("alarmSound").play();
    document.getElementById("alarmStatus").textContent="alarm is ringing";
    clearInterval(alarmId);
}
    },1000);
}
function stopAlarm(){
    clearInterval(alarmId);
    document.getElementById("alarmSound").pause();
     document.getElementById("alarmStatus").textContent="alarm is paused";

}

   const mode=document.getElementById("mode");
mode.addEventListener("click",()=>{
    if(document.body.style.backgroundColor==="white"){
        document.body.style.backgroundColor="black";
        document.body.style.color="white";

    }
    else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
    }
})