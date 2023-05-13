input.onButtonPressed(Button.A, function () {
    displayInfo()
})
function displayMode () {
    if (mode == 0) {
        basic.showLeds(`
            # # . # #
            # # # # #
            . . # . .
            # # # # #
            # # . # #
            `)
    } else if (mode == 1) {
        basic.showString("Temp")
    } else if (mode == 2) {
        basic.showString("Pressure")
    }
}
function displayInfo () {
    if (mode == 1) {
        gatorEnvironment.beginEnvironment()
        basic.showNumber(Math.round(gatorEnvironment.measurement(MeasurementType.degreesF)))
        basic.showString("F")
    } else if (mode == 2) {
        gatorEnvironment.beginEnvironment()
        basic.showString("" + (Math.round(gatorEnvironment.measurement(MeasurementType.pressure))))
        basic.showString("Pa")
    }
}
input.onButtonPressed(Button.B, function () {
    mode += 1
    if (mode > 2) {
        mode = 0
    }
    displayMode()
})
let mode = 0
mode = 0
displayMode()
basic.forever(function () {
	
})
