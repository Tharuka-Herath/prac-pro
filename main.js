let level = 1;
let sec=0;
let min= 0 ;
let interval = null;
let operators = ['+','-','*','/','%'];
let fNumber;
let lNumber;
let selectedOperator;
let answerData=[];
let correctAnswer;
let insertedAnswer;
let qNumber=0;

//-----------------------------------
const selectElement = document.getElementById("level-select");
const secElement = document.getElementById("sec");
const minElement = document.getElementById("min");
const fNumElement = document.getElementById("f-number");
const lNumElement = document.getElementById("l-number");
const opElement = document.getElementById("op");
const answerElement = document.getElementById("answer");
const qNumberElement = document.getElementById("qNumber");



//-----------------------------------
selectElement.addEventListener("change",function(){
    level = parseInt(selectElement.value)
});


//-----------------------------------
const start =()=>{
    manageTime();
}



const manageTime= ()=>{

    qNumber++;

    if(qNumber>10){
        //finalize
    }else{

        qNumberElement.textContent=qNumber;
        min= 0;
        sec =0;
    
    
        secElement.textContent='00';
        minElement.textContent = '00';
        
        generateQuestion(level);
    
        clearInterval(interval)
        interval=setInterval(()=>{
           sec++;
           if(sec<10){
            secElement.textContent = '0'+sec;
           }else{
            secElement.textContent = sec+'';
           }
           if(sec==60){
            sec=0;
            min++;
            minElement.textContent = '0'+min;
           }
             
         
           if(min==3){
                min=0
    
                
           }
    
    
    
        },1000)

    }


}



const generateQuestion=(selectedLevel)=>{
    let maxNumber = 10;

    if (selectedLevel==2) {
        maxNumber=50;
    }else if(selectedLevel==3){
        maxNumber=100;
    }

    fNumber = Math.floor(Math.random()*maxNumber)+1;
    lNumber = Math.floor(Math.random()*maxNumber)+1;

    fNumElement.textContent=fNumber;
    lNumElement.textContent=lNumber;

    selectedOperator = operators[
        Math.floor(Math.random()*5)
    ]
    opElement.textContent = selectedOperator;

}

const submitData = ()=>{
    insertedAnswer = parseInt(answerElement.value)
    

    if (fNumber && lNumber && operators && insertedAnswer) {
        switch(selectedOperator){
            case '+':correctAnswer=fNumber+lNumber; break;
            case '-': correctAnswer=fNumber-lNumber;break;
            case '*': correctAnswer=fNumber*lNumber;break;
            case '/': correctAnswer=fNumber/lNumber;break;
            case '%': correctAnswer=fNumber%lNumber;break;
            default: alert('something went wrong!');return;
        }

        if(insertedAnswer==correctAnswer){
            let obj = {
                'q NUmber':1,
                'Time': min+':'+sec,
                'correctAnswer':correctAnswer,
                'userAnswer':insertedAnswer,
                'operator':selectedOperator,
                'First number':fNumber,
                'last Number':lNumber,
                'isCorrect':true,
                'isSkipped':false

            }
            answerData.push(obj)
        }else{
             let obj = {
                'q NUmber':1,
                'Time': min+':'+sec,
                'correctAnswer':correctAnswer,
                'userAnswer':insertedAnswer,
                'operator':selectedOperator,
                'First number':fNumber,
                'last Number':lNumber,
                'isCorrect':false,
                'isSkipped':false

            }
            answerData.push(obj)
        }
        answerElement.value=' '
        manageTime();
        console.log(answerData)



    }else{
        alert('try again')
    }
}


const skipQuizz=()=>{
    let obj = {
        'q NUmber':1,
        'Time': min+':'+sec,
        'correctAnswer':correctAnswer,
        'userAnswer':insertedAnswer,
        'operator':selectedOperator,
        'First number':fNumber,
        'last Number':lNumber,
        'isCorrect':false,
        'isSkipped':true
    }
    answerData.push(obj)
    manageTime();
}

const setStatisticsForLabels = ()=>{
    for(let x=0;answerData.length<x;x++){
        let temp = answerData[x];
        
    }
}






//----------------------------------