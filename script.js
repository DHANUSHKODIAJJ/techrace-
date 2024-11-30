// click to popup //

const regBtn =document.getElementById("regbtn") 
const closepop =document.getElementById("closepop") 
const regpop = document.querySelector(".regBOX")

regBtn.addEventListener("click",()=>{
    regpop.show()
})

closepop.addEventListener("click",()=>{
    regpop.close()
})