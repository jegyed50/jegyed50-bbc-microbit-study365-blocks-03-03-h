// sakktábla
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let row = 0; row <= 4; row++) {
        for (let column = 0; column <= 4; column++) {
            if (FLAG == 0) {
                FLAG = 1
            } else {
                led.plot(column, row)
                basic.pause(pause_after_plot_LED)
                FLAG = 0
            }
        }
    }
})
let FLAG = 0
let pause_after_plot_LED = 0
basic.showIcon(IconNames.Heart)
led.setBrightness(255)
pause_after_plot_LED = 300
FLAG = 0
