input.onPinPressed(TouchPin.P2, function () {
    huenum += 0 - 20
    if (huenum < 0) {
        huenum = 255
    }
    strip.showColor(neopixel.hsl(huenum, 255, 50))
    basic.showNumber(huenum)
})
input.onPinPressed(TouchPin.P1, function () {
    huenum += 20
    if (huenum > 255) {
        huenum = 0
    }
    strip.showColor(neopixel.hsl(huenum, 255, 50))
    basic.showNumber(huenum)
})
let huenum = 0
let strip: neopixel.Strip = null
// Adjust number of LEDs
strip = neopixel.create(DigitalPin.P0, 20, NeoPixelMode.RGB)
// Creates a rainbow effect
strip.showRainbow(1, 360)
// Creates a rainbow effect
basic.forever(function () {
    // Smoothly rotates colors
    strip.rotate(5)
    strip.show()
    // Controls animation speed
    basic.pause(500)
})
basic.forever(function () {
	
})
