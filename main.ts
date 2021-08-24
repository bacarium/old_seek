let angle = 0
let target = game.createSprite(randint(0, 4), randint(0, 0))
target.set(LedSpriteProperty.Direction, randint(0, 359))
let ball = game.createSprite(randint(0, 4), randint(4, 4))
ball.set(LedSpriteProperty.Brightness, 96)
ball.set(LedSpriteProperty.Direction, 0)
let orientation = 0
basic.pause(1000)
basic.forever(function () {
    if (ball.get(LedSpriteProperty.Direction) > 270 || ball.get(LedSpriteProperty.Direction) < 90) {
        orientation = 0
    } else {
        orientation = 1
    }
    angle = Math.atan2(target.get(LedSpriteProperty.X) - ball.get(LedSpriteProperty.X), ball.get(LedSpriteProperty.Y) - target.get(LedSpriteProperty.Y)) * 180 / 3.14
    if (orientation == 0) {
        if (angle < 0) {
            ball.turn(Direction.Left, 45)
        } else {
            ball.turn(Direction.Right, 45)
        }
    }
    if (orientation == 1) {
        if (angle < 0) {
            ball.turn(Direction.Right, 45)
        } else {
            ball.turn(Direction.Left, 45)
        }
    }
    basic.pause(500)
    target.move(1)
    target.ifOnEdgeBounce()
    ball.move(1)
    ball.ifOnEdgeBounce()
    if (ball.isTouching(target)) {
        basic.showIcon(IconNames.Chessboard)
        target.delete()
        ball.delete()
        basic.pause(500)
        game.gameOver()
    }
})
