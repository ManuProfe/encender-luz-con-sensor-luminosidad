input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
basic.clearScreen()
led.enable(false)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 450) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    basic.showNumber(pins.digitalReadPin(DigitalPin.P2))
    basic.pause(500)
})
