controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 . . . . . . . . 
        . . . . 8 8 8 8 8 . . . . . . . 
        . . . 8 8 8 8 1 1 8 . . . . . . 
        . . 8 8 8 8 8 1 1 8 8 . . . . . 
        . . 8 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 . . . . . . . 
        . . . . . 8 8 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.destroy(effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite2.destroy(effects.spray, 500)
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    8 . . . 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 . 8 8 8 8 8 8 8 8 8 f 8 . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 . 1 1 1 1 1 1 1 1 1 1 f . . 
    8 . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 . . . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . 3 3 f 3 3 f 3 3 . . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 . . . . 
    . 3 3 3 3 3 f f 3 3 3 3 3 . . . 
    . 3 . . 3 . . 3 . . 3 . 3 . . . 
    . . 3 . . 3 . . 3 . . 3 . 3 . . 
    . 3 . . 3 . . 3 . . 3 . 3 . . . 
    . . 3 . . 3 . . 3 . . 3 . 3 . . 
    . 3 . . 3 . . 3 . . . . 3 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite.setPosition(46, 66)
scene.setBackgroundColor(9)
controller.moveSprite(mySprite)
mySprite2.follow(mySprite, 20)
mySprite.setBounceOnWall(true)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999997777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999977777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999977777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999997777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999977777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999977777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999977777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999977777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999977777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999977777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999977777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999977777999999999999999999977777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999977777799999999999999999977777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999977777799999999999999999977777999999999999999999999999999999999999999999999997777779999999999999999999999999999999999999999999999999999999999999999
    9999999999999977777779999999999999999977777999999999999999999999999999999999999999999999997777779999999999999999999999999999999999999999999999999977777799999999
    9999999999999977777779999999999999999777777999999999999999999999999999999999999999999999997777779999999999999999999999999999999999999999999999999977777799999999
    9999999999999997777779999999999999999777779999999999999999999999999999999999999999999999997777779999999999999999999999999999999999999999999999999977777799999999
    9999999999999997777779999999999999999777779999999999999999999999999999999999999999999999997777779999999999999999999999999999999999999999999999999977777799999999
    9999999999999999777779999999999999999777777777999999999999999999999999999999999999999999977777799999999999999999999999999999999999999999999999999777777799999999
    9999999999999997777779999999999999999777777777999999999999999999999999999999999999999999977777799999999999999999999999999999999999999999999999999777777799999999
    9999999999999977777779999999999999999999977777777999999999999999999999999999999999999999977777799999999999999999999999999999999999999999999999999777777799999999
    9999999999999977777779999999999999999999977777777999999999999999999999999999999999999999977777799999999999999999999999999999999999999999999999999777777799999999
    9999999999999977777779999999999999999999977777777999999999999999999999999999999999999999977777999999999999999999999999999999999999999999999999999777777799999999
    9999999999999777777799999999999999999999997777777999999999999999999999999999999999999997777799999999999999999999999999999999999999999999999999999777777799999999
    9999999999999777777999999999999999999999997777777999999999999999999999999999999999999997777799999999999999999999999999999999999999999999999999999999777779999999
    9999999999999777777999999999999999999999997777799999999999999999999999999999999999999997777799999999999999999999999999999999999999999999999999999999777779999999
    9999999999977777777999999999999999999999777777799999999999997777777799999999999999999997777799999999999999999999999999999999999999999999999999999999777777999999
    9999999999977777779999999999999999999999777777799999999999997777777799999999999999999997777799999999999999999999999999999999999999999999999999999999777777999999
    9999999999977777779999999999999999999999777779999999999999997777777799999999999999999997777799999999999999999999999999999999999999999999999999999999777777799999
    9999999999977777779999999999999999999777777779999999999999997777777799999999999999999997777799999999999999999999999999999999999999997777799999999999777777799999
    9999999999777777799999999999999999999777777779999999999999997777777799999999999999999997777799999999999999997777799999999999999999997777799999999999977777799999
    9999999999777779999999999999999999999777779999999999999999999997777799999999999999999997777779999999999999997777799999999999999999997777799999999999777777799999
    9999999999777779999999999999999999999777779999999999999999999977777799999999999999999997777779999999999999997777799999999999999999977777799999999999777777799999
    9999999999777777999999999999999999999777777999999999999999999977777799999999999999999997777777999999999999997777799999999999999999977777799999999997777777799999
    9999999999777777999999999999999999999977777999999999999999999977777779999999999999999997777777799999999999997777799999999999999999977777799999999997777777799999
    9999999999777777799999999999999999999977777999999999999999999977777777999999999999999997777777799999999999997777799999999999999999977777799999999997777777779999
    9999999999777777799999999999999999999977777999999999999999999977777777999999999999999999777777799999999999997777799999999999999999977777999999999997777777779999
    9999999999977777799999999999999999999977777999999999999999999997777777999999999999999999777777779999999999997777799999999999999999977777999999999997777777779999
    9999999999977777779999999999999999999977777999999999999999999997777777999999999999999999977777779999999999997777799999999999999999977777999999999999777777779999
    9999999999977777777799999999999999999777777999999999999999999997777777999999999999999999977777779999999999997777779999999999999999977777999999999999997777779999
    9999999999997777777799999999999999999777777999999999999999999997777779999999999999999999977777779999999999997777779999999999999999977777999999999999997777799999
    9999999999997777777799999999999999999777779999999999999999999977777779999999999999999999977777779999999999997777779999999999999999777777999999999999997777799999
    9999999999999777777799999999999999999777779999999999999999999977777799999999999999999999997777779999999999997777779999999999999999777777999999999999997777799999
    9999999999999777777799999999999999999777779999999999999999999977777799999999999999999999977777999999999999999777777999999999999999777777999999999999997777799999
    9999999999999777777799999999999999999977777999999999999999999977777799999999999999999999977777799999999999999777777799999999999999777777779999999999997777799999
    9999999999999777777799999999999999999977777999999999999999999977777999999999999999999999977777799999999999999777777779999999999999777777779999999999997777799999
    9999999999999777777999999999999999999977777999999999999999999977777999999999999999999999977777799999999999999777777779999999999999977777777999999999997777779999
    9999999999997777777999999999999999999977777999999999999999999977777799999999999999999999977777799999999999999977777779999999999999997777777799999999997777779999
    9999999999977777779999999999999999997777777999999999999999999977777779999999999999999999997777799999999999999977777779999999999999997777777779999999997777779999
    9999999999977777779999999999999999997777799999999999999999999977777777999999999999999999997777799999999999999997777779999999999999999777777779999999977777779999
    9999999999777777779999999999999999997777779999999999999999999977777777999999999999999999997777779999999999999999777779999999999999999977777779999999977777779999
    9999999997777777799999999999999999997777779999999999999999999997777777999999999999999999999777779999999999999997777779999999999999999997777779999999977777799999
    9999999997777777999999999999999999997777779999999999999999999997777777999999999999999999999777779999999999999997777779999999999999999997777779999999977777799999
    9999999997777777999999999999999999997777779999999999999999999999777777999999999999999999999777779999999999999997777779999999999999999977777779999999977777799999
    9999999997777779999999999999999999997777779999999999999999999999977777999999999999999999997777779999999999999997777779999999999999999977777779999999977777799999
    9999999977777779999999999999999999997777799999999999999999999999777777999999999999999999997777799999999999999997777799999999999999999777777799999999977777799999
    9999999977777799999999999999999999977777799999999999999999999997777777999999999999999999997777799999999999999997777799999999999999999777777799999999997777799999
    9999999977777799999999999999999999977777999999999999999999999997777777999999999999999999977777799999999999999997777799999999999999997777777999999999997777799999
    9999999977777799999999999999999999977777999999999999999999999997777777999999999999999999977777799999999999999997777799999999999999997777777999999999777777799999
    9999999977777999999999999999999999977777999999999999999999999997777779999999999999999999977777999999999999999997777799999999999999997777779999999999777777799999
    9999999977777999999999999999999999977777999999999999999999999997777799999999999999999999977777999999999999999997777799999999999999997777779999999999777777799999
    9999999977777999999999999999999999977777999999999999999999999997777799999999999999999999977777999999999999999997777799999999999999997777799999999999777777799999
    `)
