let string = "";
let btn = document.querySelectorAll("button");
let display = document.querySelector("input")

btn.forEach( function(elem){
    elem.addEventListener("click", function(val){
        if(val.target.innerHTML == "="){
            string = eval(string);
            display.value = string;
        } else if(val.target.innerHTML == "AC"){
            string = "";
            display.value = string;
        } else if(val.target.innerHTML == "DE"){
            string = string.slice(0,-1);
            display.value = string;
        } else{            
            string = string + val.target.innerHTML;
            display.value = string;
        }
    })
})