let string = ""
let buttons = document.querySelectorAll(".button")
Array.from(buttons).forEach( (number) => {
number.addEventListener("click", (elem)=> {
    if(elem.target.innerHTML == "=" ) {
string = eval(string)
document.querySelector(".screen").innerHTML = string
} else {
        console.log(elem.target);
        string = string + elem.target.innerHTML
        document.querySelector(".screen").innerHTML = string
    }

})
})

let clearScreen = document.querySelector(".clear")
clearScreen.addEventListener("click", ()=> {
    string = ""
    document.querySelector(".screen").innerHTML = string
})
