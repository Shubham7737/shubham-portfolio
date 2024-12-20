function toggleMenu(){
    const menu = document.getElementById("nav-menu");
    
    menu.classList.toggle("active");
}


// header run

const headerRun = document.querySelector("#headerRun")

let str = "Hey, My name is Shubham Danu."

let i = 0;

setInterval(() => {
    if (str.length > i){
        headerRun.textContent += str[i]
    } else {
        headerRun.textContent = ""
        i = -1
    }
    i++
},100)