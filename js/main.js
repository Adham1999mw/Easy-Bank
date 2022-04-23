let box = document.getElementsByClassName("box")[0]
let hamb = document.getElementsByClassName("hamb")[0]

hamb.addEventListener("click",function(){
    
    box.classList.toggle("show")

})