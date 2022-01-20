function calc() {
    let input = document.getElementById("input").value
    let basenum = document.getElementById("base").options.selectedIndex //0 = binary, 1 = base 4, 2 = base 6, 3 = octal, 4 = decimal, 5 = hex.
    console.log(basenum)
    if (basenum == 0) {
        var base = 2
    }else if (basenum == 1) {
        var base = 4
    }else if (basenum == 2) {
        var base = 6
    }else if (basenum == 3) {
        var base = 8
    }else if (basenum == 4) {
        var base = 10
    }else if (basenum == 5) {
        var base = 16
    }

    //calculate
    if (input.includes("*")){
        var input_array = input.split("*")
        let result = parseInt(input_array[0], base) * parseInt(input_array[1], base)
        console.log(result)
        document.getElementById("output").value = result.toString(base)

    }else if (input.includes("^")){
        var input_array = input.split("^")
        let result = parseInt(input_array[0], base) ** parseInt(input_array[1], base)
        console.log(result)
        document.getElementById("output").value = result.toString(base)

    }else if (input.includes("/")){
        var input_array = input.split("/")
        let result = parseInt(input_array[0], base) / parseInt(input_array[1], base)
        console.log(result)
        document.getElementById("output").value = result.toString(base)

    }else if (input.includes("%")){
        var input_array = input.split("%")
        let result = parseInt(input_array[0], base) % parseInt(input_array[1], base)
        console.log(result)
        document.getElementById("output").value = result.toString(base)

    }else if (input.includes("+")){
        var input_array = input.split("+")
        let result = parseInt(input_array[0], base) + parseInt(input_array[1], base)
        console.log(result)
        document.getElementById("output").value = result.toString(base)

    }else if (input.includes("-")){
        if (input.startsWith("-")) {
            var input_array = input.slice(1).split("-")
            input_array[0] *= -1
        }else {
            var input_array = input.split("-")
        }
        let result = parseInt(input_array[0], base) - parseInt(input_array[1], base)
        console.log(result)
        document.getElementById("output").value = result.toString(base)

    }else {
        var input_array = ["error"]
        document.getElementById("output").value = "Error"
    }

    console.log(input_array)
}


