let number = 0;
let num = document.querySelector(".num");
const increase = document.querySelector(".btn-3");
const decrease = document.querySelector(".btn-1");
const reset = document.querySelector(".btn-2");
increase.addEventListener("click", function(){
    number++;
    num.innerText = number;
    if(number >0){
        num.style.color = "rgb(21, 153, 21)";
    }else if(number == 0){
        num.style.color = "black";
    }
})

decrease.addEventListener("click", function(){
    number--;
    num.innerText = number;
    if(number <0){
    num.style.color = "rgb(228, 47, 47)";
    }else if(number == 0){
        num.style.color = "black";
    }
});

reset.addEventListener("click", function(){
    number = 0;
    num.innerText = number;
    num.style.color = "black";

})
