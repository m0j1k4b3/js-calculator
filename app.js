let display = document.getElementById("display");
let numbers = document.getElementsByClassName("numbers");
let operators = document.getElementsByClassName("operator");
let buffer = "";
let operand1;
let operand2;
let last_operator;
let result

display.innerHTML = "0";

document.getElementById("result").addEventListener("click", function(){
    operand1 = Number(operand1);
    operand2 = Number(buffer);
    if(last_operator !== ""){
        switch(last_operator){
            case "x":
                result = operand1 * operand2;
                break;
            case "/":
                result = operand1 / operand2;
                break;
            case "+":
                result = operand1 + operand2;
                break;
            case "-":
                result = operand1 - operand2;
                break;
        }
        buffer = result.toString();
        display.innerHTML = result.toString();
    }
});


document.getElementById("ac").addEventListener("click", function(){
    buffer = "";
    operand1 = 0;
    operand2 = 0;
    display.innerHTML = "0";
});


document.getElementById("del").addEventListener("click", function(){
    buffer = buffer.substring(0, buffer.length-1);
    display.innerHTML = (buffer === "") ? "0" : buffer;
});

    for(let number of numbers){
    number.addEventListener("click", function() {
        buffer += number.innerHTML;
        display.innerHTML = buffer;
    });
}

for(let operator of operators){
    operator.addEventListener("click", function(){
        last_operator = operator.innerHTML;
        operand1 = buffer;
        buffer = "";
    });
}
