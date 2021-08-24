angle = 0
target = game.create_sprite(randint(0, 4), randint(0, 0))
target.set(LedSpriteProperty.DIRECTION, 225)
ball = game.create_sprite(randint(0, 4), randint(4, 4))
ball.set(LedSpriteProperty.BRIGHTNESS, 96)
ball.set(LedSpriteProperty.DIRECTION, 0)

def on_forever():
    global angle
    angle = Math.atan2(target.get(LedSpriteProperty.X) - ball.get(LedSpriteProperty.X),
        ball.get(LedSpriteProperty.Y) - target.get(LedSpriteProperty.Y)) * 180 / 3.14
    basic.pause(500)
    target.move(1)
    target.if_on_edge_bounce()
    ball.move(1)
    ball.if_on_edge_bounce()
    if ball.is_touching(target):
        basic.show_icon(IconNames.CHESSBOARD)
        target.delete()
        ball.delete()
        basic.pause(500)
        game.game_over()
basic.forever(on_forever)