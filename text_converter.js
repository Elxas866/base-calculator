function text() {
    let input = document.getElementById("input").value
    let basenum = document.getElementById("base").options.selectedIndex //0 = binary, 1 = base 4, 2 = base 6, 3 = octal, 4 = decimal, 5 = hex.
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

    let dec_string=""
    for (let i = 0; i < input.length; i++) {
        dec_string += input.charCodeAt(i)
    }
    console.log(dec_string)
    let result = parseInt(dec_string)
    document.getElementById("output").value = result.toString(base)
}