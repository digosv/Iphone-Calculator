const display = document.querySelector(".display")
const button = document.querySelectorAll("button")
const ac = document.querySelector(".ac")
let = lastInputWasOperator = false

button.forEach(b => {
    b.addEventListener("click", function() {
        const value = b.textContent.trim();
        let calc = ""

        if(value === "AC" || value === "C") {
            display.textContent = ""
        }else if(value === "="){
            display.textContent = eval(calc)
        }else{
            calc += value
            display.textContent += calc
        }

        // se o display estiver vazio ele mostra AC, se houver algum numero mostre C 
        if(display.textContent === ""){
            ac.textContent = "AC"
        }else{
            ac.textContent = "C"
        }
    })
})


