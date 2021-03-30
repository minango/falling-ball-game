input.onButtonPressed(Button.A, function () {
    _123.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    _123.change(LedSpriteProperty.X, 1)
})
let list: game.LedSprite = null
let sleep_time = 0
let _123: game.LedSprite = null
_123 = game.createSprite(2, 4)
game.setLife(3)
basic.forever(function () {
    sleep_time = 1000
    list = game.createSprite(0, 0)
    while (true) {
        basic.pause(sleep_time)
        list.change(LedSpriteProperty.Y, 1)
        if (list.get(LedSpriteProperty.Y) == 4) {
            if (list.get(LedSpriteProperty.X) == _123.get(LedSpriteProperty.X)) {
                game.removeLife(1)
            } else {
                game.addScore(1)
            }
            sleep_time = sleep_time - 100
            list.set(LedSpriteProperty.Y, 0)
            list.set(LedSpriteProperty.X, randint(0, 4))
        } else {
        	
        }
    }
})
