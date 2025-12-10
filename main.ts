basic.forever(function () {

    basic.showNumber(input.temperature())
    if (input.temperature() > 22) {
        basic.showString("calor")
    } else {
        basic.showString("fred")
    }
})
basic.forever(function () {
    if (input.lightLevel() > 200) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() < 50) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    } else {
    	
    }

})
