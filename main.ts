input.onButtonPressed(Button.A, function () {
    if (posX > 0) {
        led.unplot(posX, 0)
        posX += -1
        led.plot(posX, 0)
    } else {
        led.plot(0, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    if (posX < 4) {
        led.unplot(posX, 0)
        posX += 1
        led.plot(posX, 0)
    } else {
        led.plot(4, 0)
    }
})
let posX = 0
posX = 4
led.plot(posX, 0)
basic.forever(function () {
	
})
