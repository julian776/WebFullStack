function clean(){
    output.value = ""
}

function calculate() {
    let array_div
    if(output.value.includes("/")){
        array_div = output.value.split("/")
        output.value = array_div[0]/array_div[1]
    }
    else if(output.value.includes("*")){
        array_div = output.value.split("*")
        output.value = array_div[0] * array_div[1]
    }
    else if(output.value.includes("+")){
        array_div = output.value.split("+")
        output.value = parseFloat(array_div[0]) + parseFloat(array_div[1])
    }
    else{
        array_div = output.value.split("-")
        output.value = parseFloat(array_div[0]) - parseFloat(array_div[1])
    }
}

function validate(i){
    if(output.value.includes("/") || output.value.includes("+") || output.value.includes("-") || output.value.includes("*")){
        output.value = "Error, please enter only one operation"
    }
    else{
        output.value += i
    }
}

function concatenate(i){
    if(output.value == "Error, please enter only one operation"){
        output.value = ""
    }
    if((i != "*") && (i!="+") && (i!="-") && (i !="/")){
        output.value += i
    }
    else{    
        switch(i){
            case "/":
                validate(i)
                break
            case "*":
                validate(i)
                break
            case "+":
                validate(i)
                break
            case "-":
                validate(i)
                break
        }
    }
    
}

function negative(){
    output.value = (output.value) * (-1)
}