/**
 * Bitmap manipulation blocks
 */
namespace bitmaps {

    //% blockNamespace="drawing"
    //% blockId=bitmapCreate
    //% block="create bitmap width $width height $height"
    //% weight=78
    //% group="Create"
    //% blockAliasFor="bitmaps.create"
    //% help=github:display-shield/docs/create
    //% width.defl=16
    //% height.defl=16
    export function _create(width: number, height: number): Bitmap {
        return bitmaps.create(width, height);
    }


    /**
     * A bitmap
     * @param bitmap the bitmap
     */
    //% blockId=bitmap_assign block="$bitmap" shim=TD_ID
    //% bitmap.fieldEditor="sprite"
    //% bitmap.fieldOptions.taggedTemplate="bmp"
    //% bitmap.fieldOptions.decompileArgumentAsString="true"
    //% weight=90
    //% group="Create"
    //% blockSetVariable=bitmap
    //% blockNamespace="drawing"
    export function __bitmap(bitmap: Bitmap): Bitmap {
        return bitmap;
    }


    /**
     * A bitmap
     * @param bitmap the bitmap
     */
    //% blockId=bitmap_picker block="$bitmap" shim=TD_ID
    //% bitmap.fieldEditor="sprite"
    //% bitmap.fieldOptions.taggedTemplate="bmp"
    //% bitmap.fieldOptions.decompileArgumentAsString="true"
    //% weight=85
    //% group="Create"
    //% help=github:display-shield/docs/bitmap
    //% blockAliasFor="bitmaps.create"
    //% blockNamespace="drawing"
    export function _bitmap(bitmap: Bitmap): Bitmap {
        return bitmap;
    }

    //% blockId=colorindexpicker block="$index" blockHidden=true shim=TD_ID
    //% index.fieldEditor="colornumber"
    //% index.fieldOptions.valueMode="index"
    //% index.fieldOptions.colours='["#000000","#ffffff","#ff2121","#ff93c4","#ff8135","#fff609","#249ca3","#78dc52","#003fad","#87f2ff","#8e2ec4","#a4839f","#5c406c","#e5cdc4","#91463d","#000000"]'
    //% index.fieldOptions.decompileLiterals="true"
    export function __colorIndexPicker(index: number) {
        return index;
    }

    /**
     * Get font8
     */
    //% blockId=font8_block
    //% block="font8"
    //% weight=10
    //% group="Text"
    //% blockNamespace="drawing"
    export function _font8(): Font {
        return font8;
    }

    /**
     * Get font12
     */
    //% blockId=font12_block
    //% block="font12"
    //% weight=9
    //% group="Text"
    //% blockNamespace="drawing"
    export function _font12(): Font {
        return font12;
    }

    /**
     * Get font5
     */
    //% blockId=font5_block
    //% block="font5"
    //% weight=8
    //% group="Text"
    //% blockNamespace="drawing"
    export function _font5(): Font {
        return font5;
    }
}
    //% blockIdentity=bitmaps._bitmap
    const defaultBitmap: Bitmap = bmp`
    . . . . . . . . . . . . . . . .
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 . . . . . . . . . . . . 1 .
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
    . . . . . . . . . . . . . . . .
`