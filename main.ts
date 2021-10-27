let degré = 0
basic.forever(function () {
    degré = input.compassHeading()
})
basic.forever(function () {
    if (135 < degré) {
        basic.showString("est")
    }
})
basic.forever(function () {
    if (degré < 45) {
        basic.showString("nord")
    }
})
