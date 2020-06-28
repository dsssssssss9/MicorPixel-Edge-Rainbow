let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
strip.setBrightness(20)
strip.clear()
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.show()
    strip.rotate(1)
})
