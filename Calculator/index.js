let num1 = 8
let num2 = 10
let sum

num1 = document.getElementById("num1-el").textContent
num2 = document.getElementById("num2-el").textContent
let ans = document.getElementById("sum-el")

function add(){
    console.log("Button clicked")
    ans.textContent=num1+num2
}

function substract(){
    sum = num1-num2
    ans.textContent=sum

}

function multiply(){
    sum = num1*num2
    ans.textContent=sum
}

function divide(){
    sum = num1/num2
    ans.textContent=sum
}
