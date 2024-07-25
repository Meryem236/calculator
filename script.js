
const display = document.getElementById("display");

function showcalc(input){
    display.value = display.value + input;
}

function clearno(){
    display.value = " ";
}

function calculate(){
    display.value = eval(display.value);
}

function percentage(){
    display.value = display.value/100;
}

function negative(){
    display.value = display.value - (display.value*2);
}
