basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 22) {
        basic.showString("calor")
    } else {
        basic.showString("fred")
    }
})
