let count = 0
let state = 0
let count1 = 0
input.onButtonPressed(Button.A, function () {
    count += 1
    basic.showNumber(count)
})
input.onButtonPressed(Button.AB, function () {
    if (state == 0) {
        count1 = count
        basic.showNumber(count)
        while (count1 != 0) {
            if (input.buttonIsPressed(Button.AB)) {
                state = 1
                break;
            } else {
                count1 += -1
                basic.showNumber(count1)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    count += 10
    basic.showNumber(count)
})
basic.forever(function () {
	
})
