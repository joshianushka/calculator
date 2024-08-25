const display=document.getElementById('display');
function appendSymbol(symbol){
    display.value+=symbol;
}
function clearDisplay(){
    display.value='';
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value='ERROR';
    }
}

