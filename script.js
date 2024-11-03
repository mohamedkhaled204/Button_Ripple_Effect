const btnel = document.querySelector(".btn")
const btnbeforeel = document.querySelector(".btn::before")

let colors = ["lightgreen" , "cornflowerblue" , "darkorange" , "darkolivegreen" , "chocolate"]
btnel.addEventListener("mouseenter" , function(e){
    let y = e.pageY - btnel.offsetTop;
    let x = e.pageX - btnel.offsetLeft;
    btnel.style.setProperty("--xpos" , x +"px")
    btnel.style.setProperty("--ypos" , y +"px")

    let ramdomcolor = colors[Math.floor(Math.random() * colors.length)]
    console.log(ramdomcolor)
    btnel.style.setProperty("--color" , ramdomcolor)

})