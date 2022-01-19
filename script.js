function reload() {
    location.reload();
}


let input = document.getElementById("input").value
let basenum = document.getElementById("base").options.selectedIndex //0 = binary, 1 = octal, 2 = decimal, 3 = hexadecimal
console.log(basenum)
if (basenum == 0) {
    var base = 2
}else if (basenum == 1) {
    var base = 8
}else if (basenum == 2) {
    var base = 10
}else if (basenum == 3) {
    var base = 16
}

//calculate
if (input.includes("+")){
    var input_array = input.split("+")
    let result = parseInt(input_array[0], base) + parseInt(input_array[1], base)
    console.log(result)
    document.getElementById("output").value = result.toString(base)

}else if (input.includes("-")){
    var input_array = input.split("-")
    let result = parseInt(input_array[0], base) - parseInt(input_array[1], base)
    console.log(result)
    document.getElementById("output").value = result.toString(base)

}else if (input.includes("*")){
    var input_array = input.split("*")
    let result = parseInt(input_array[0], base) * parseInt(input_array[1], base)
    console.log(result)
    document.getElementById("output").value = result.toString(base)

}else if (input.includes("/")){
    var input_array = input.split("/")
    let result = parseInt(input_array[0], base) / parseInt(input_array[1], base)
    console.log(result)
    document.getElementById("output").value = result.toString(base)

}else {
    var input_array = []
    document.getElementById("output").value = "Error"
}

console.log(input_array)
