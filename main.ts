let degré = 0
basic.forever(function () {
    if (degré < 135) {
        basic.showString("est")
    } else if (degré < 315) {
        basic.showString("west")
    } else if (degré < 45) {
        basic.showString("nord")
    } else if (degré < 225) {
        basic.showString("sud")
    } else {
        basic.showString("erreur")
    }
    degré = input.compassHeading()
})
