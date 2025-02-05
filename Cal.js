const dispaly = document.getElementById("display");
const dispaly2 = document.getElementById("display2");

function append(input){
    dispaly.value += input;
    calculate2();
}

//when op comes as input... dont call calculate2() else error in display2
function appendOperator(input){
    dispaly.value += input;
}

function per(input){
    calculate();
    let n = parseFloat(dispaly.value);
    n = n/100;
    dispaly.value = n;
}

function fact(input){
    calculate();
    let n = parseInt(dispaly.value);
    if(n<0){
        dispaly.value = "Error"
    }
    let ans = 1;
    for(let i=n;i>1;i--){
        ans *= i;
    }
    dispaly.value = ans;
}

function clearDisplay(){
    dispaly.value = "";

}

function oneback(){
    dispaly.value = dispaly.value.slice(0,-1);
    dispaly2.value = dispaly.value;
}


//= press karne ke baad
function calculate(){
    try{
    dispaly.value= eval(dispaly.value);
    }
    catch (e){
        dispaly.value ="Error";
    }

    dispaly2.value = "";
    // dispaly.style.fontSize = '2rem';

}


// number input ane ke baad
function calculate2(){
    try{
    dispaly2.value= eval(dispaly.value);
    }
    catch (e){
        dispaly.value ="Error";
    }

    // dispaly.style.fontSize = '2rem';

}