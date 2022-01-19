let input = document.getElementById("input").value
let base = document.getElementById("base").options.selectedIndex //0 = binary, 1 = octal, 2 = decimal, 3 = hexadecimal
console.log(base)

//generate array [item 0, item1]
if (input.includes("+")){
    var input_array = input.split("+")
    let result = parseInt(input_array[0]) + parseInt(input_array[1])
    document.getElementById("output").value = result

}else if (input.includes("-")){
    var input_array = input.split("-")
    let result = parseInt(input_array[0]) - parseInt(input_array[1])
    document.getElementById("output").value = result

}else if (input.includes("*")){
    var input_array = input.split("*")
    let result = parseInt(input_array[0]) * parseInt(input_array[1])
    document.getElementById("output").value = result

}else if (input.includes("/")){
    var input_array = input.split("/")
    let result = parseInt(input_array[0]) / parseInt(input_array[1])
    document.getElementById("output").value = result

}else {
    var input_array = []
    document.getElementById("output").value = "Error"
}

console.log(input_array)