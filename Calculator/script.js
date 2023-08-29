let div = document.createElement("div");
document.body.append(div);
let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}
function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
        //The eval() method evaluates or executes an argument.
    }
    catch(err){
        alert("Invalid");

    }
}
function Clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0, -1);
}