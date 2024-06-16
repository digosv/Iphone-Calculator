const display = document.querySelector(".display")
const button = document.querySelectorAll("button")
let lastImputOperator = false

button.forEach(b => {
    b.addEventListener("click", function() {
        const value = b.textContent.trim();
        if(value == "AC") {
            display.textContent = ""
            console.log(display.textContent)
            lastImputOperator = false;
        } else if(value == "=") {
            let calc = display.textContent.replace(/x/g, "*")
             let res = eval(calc)
             display.textContent = res
             console.log(display.textContent)
             lastImputOperator = false;
        }else { 
            if((value === "*" || value === "/" || value === "+" || value === "-") && lastImputOperator) {
                return;
            }else {
                display.textContent += b.textContent.trim()
                lastImputOperator = (value === "*" || value === "/" || value === "+" || value === "-")
                console.log(display.textContent)
            }
        }
    })
})