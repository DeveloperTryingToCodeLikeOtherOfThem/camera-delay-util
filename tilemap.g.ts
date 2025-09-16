// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000202020b0202020202020b0202020202020b0b0202020b02020b0202010201020202020202020102020b0202020202020202020201020202020304050b02020201020b02020b02020109060802020102020202010202010202090608020202020b020202020202020209060802010202020b02020b02020b0209060802020b0202020304040404040406060802020b020b02090606060606060606080202020202020c0a0a0a0a0a0a0a0a07020b0b020202020b02020102020202020b0b02020b020202020202020b0b02020d0d0d0d020b0102020202020b0202020d0d0d0d02020202020102020102020b0d0d0d0d0202020b02020202020202020d0d0d0d`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tileGrass3,sprites.castle.tilePath7,sprites.castle.tileDarkGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
