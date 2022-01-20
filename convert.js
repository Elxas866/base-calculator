function convert() {
    let input = document.getElementById("input").value
    let in_base = document.getElementById("inbase").options.selectedIndex
    let out_base = document.getElementById("outbase").options.selectedIndex
    console.log(input)

    if (in_base == 0) {
        var inbase = 2
    }else if (in_base == 1) {
        var inbase = 4
    }else if (in_base == 2) {
        var inbase = 6
    }else if (in_base == 3) {
        var inbase = 8
    }else if (in_base == 4) {
        var inbase = 10
    }else if (in_base == 5) {
        var inbase = 16
    }
    console.log(inbase)

    if (out_base == 0) {
        var outbase = 2
    }else if (out_base == 1) {
        var outbase = 4
    }else if (out_base == 2) {
        var outbase = 6
    }else if (out_base == 3) {
        var outbase = 8
    }else if (out_base == 4) {
        var outbase = 10
    }else if (out_base == 5) {
        var outbase = 16
    }
    console.log(outbase)

    let output = parseInt(input, inbase).toString(outbase)
    document.getElementById("output").value = output
}

function hex() {
    document.getElementById("input").type = "text"
}