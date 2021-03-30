def on_button_pressed_a():
    _123.move(1)
    _123.turn(Direction.LEFT, 90)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    _123.move(1)
    _123.turn(Direction.RIGHT, 90)
input.on_button_pressed(Button.B, on_button_pressed_b)

_123: game.LedSprite = None
_123 = game.create_sprite(2, 4)