const btns = document.querySelectorAll(".btns .text");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");

var math = "";

btns.forEach(item=>{
    item.addEventListener("click",(e)=>{
       num1.innerHTML += e.target.innerHTML;
       math += e.target.dataset.math;
       evaled();
    })
})

function evaled() {
    let evale = eval(math);
    console.clear();
    let x = evale.toString();
    if (math.includes("+")||math.includes("-")||math.includes("*")||math.includes("/")||math.includes("(")||math.includes(")")) {
        num2.innerHTML = x;
    }
}

const clear = document.querySelector(".clear");
clear.addEventListener("click",()=>{
    num1.innerHTML = "";
    num2.innerHTML = "";
    math = "";
})

var p_ind = "0";
const Parentheses = document.querySelector(".Parentheses");
Parentheses.addEventListener("click",()=>{

        
    if (p_ind === "0") {
        if (math == ""||math == "-"||math == "+") {
        math += "(";
        num1.innerHTML += "(";
        p_ind = "1";
        }
    }else if(p_ind === "1") {
        math += ")";
        num1.innerHTML += ")";
        p_ind = "0";
    }
    evaled();
})
const Delete = document.querySelector(".Delete");
Delete.addEventListener("click",()=>{
    let array1 = num1.innerHTML.split("");
    let array2 = math.split("");
    array1.pop();
    num1.innerHTML = array1.join("");
    array2.pop();
    math = array2.join("");
})

const equal = document.querySelector(".equal");
equal.addEventListener("click",()=>{
    if (num2.innerHTML !== "") {
        num1.innerHTML = num2.innerHTML;
        math = num2.innerHTML;
        num2.innerHTML = "";
    }
})