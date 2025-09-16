namespace SpriteKind {
    //% isKind
    export const Camera = SpriteKind.create()
}

//% blockNamespace=scene block="extra camera util"
namespace extraCameraUtil {

    class Position {
        constructor(public x: number, public y: number) {
        }
    }

   //% blockId="extracamerautilanglefrom" block="angle from %a=variables_get(mySprite)"
   export function angleFrom(a: Sprite | tiles.Location | Position, b: Sprite | tiles.Location | Position): number {
        if (!a || !b) return 0;
        return Math.atan2(
            b.y - a.y,
            b.x - a.x
        );
    }

  //% blockId="extracamerautilplaceanglefrom" block="angle in radians %spriteToMove=variables_get(mySprite) ^angleInRadians %distance %fromSprite=variables_get(mySprite2)"
  export function placeAngleFrom(spriteToMove: Sprite, angleInRadians: number, distance: number, fromSprite: Sprite | tiles.Location | Position) {
        if (!fromSprite || !spriteToMove)
            return;

        spriteToMove.setPosition(
            fromSprite.x + Math.cos(angleInRadians) * distance,
            fromSprite.y + Math.sin(angleInRadians) * distance
        );
    }

   //% blockId=extracamerautildistancebetween block="distance between %a=variables(mySprite)"
   export function distanceBetween(a: Sprite | tiles.Location | Position, b: Sprite | tiles.Location | Position): number {
        if (!a || !b) return 0;
        return Math.sqrt(((a.x - b.x) ** 2) + ((a.y - b.y) ** 2));
    }

    //% blockId="extracamerautilsetcamera" block="set camera %cameraSprite=variables_get(cameraSprite) %sprite=variables_get(mySprite)"
    export function setCamera(
    cameraSprite: Sprite,
    sprite: Sprite
    ) {
        cameraSprite.setFlag(SpriteFlag.Ghost, true)
        cameraSprite.setFlag(SpriteFlag.Invisible, true)
        scene.cameraFollowSprite(cameraSprite)
        game.onUpdate(function () {
            placeAngleFrom(
                cameraSprite,
                angleFrom(sprite, cameraSprite),
                distanceBetween(cameraSprite, sprite) * 0.96,
                sprite
            )
        })
    }
}