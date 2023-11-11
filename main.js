let level = 1;
let sec=0;
let min= 0 ;
let interval = null;

//-----------------------------------
const selectElement = document.getElementById("level-select");


//-----------------------------------
selectElement.addEventListener("change",function(){
    console.log(selectElement.value)
});


//-----------------------------------
const start =()=>{
    manageTime();
}



const manageTime= ()=>{
    min= 0;
    sec =0;
    clearInterval(interval)
    interval=setInterval(()=>{
       sec++;
       if(sec<10){
        // set time with 0
       }
       if(sec==60){
        sec=0;
        min++;
        //set min
       }
         
       if (condition) {
        
       }
       if(min==3){
            min=0
       }


    },1000)
}




//----------------------------------