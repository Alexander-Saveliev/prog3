var sqrt3 = Math.sqrt(3);

function drawingOne6Angle(startX, startY, a) {

    var OFFSET_ARRAY = [
      [sqrt3 * a * 0.5, sqrt3 * a, sqrt3 * a, sqrt3 * a * 0.5, 0, 0],
      [- a * 0.5      , 0        , a        , 1.5 * a        , a, 0]
    ];

    /*      0
          /  \      Start from the fifth point with offset 0
        5     1
        |     |
        4     2
         \   /
          3
    */

    context.beginPath();

    context.moveTo(startX, startY);

    for (var i = 0; i < 6; i++) {
        context.lineTo(startX + OFFSET_ARRAY[0][i], startY + OFFSET_ARRAY[1][i]);
    }

    context.stroke();
}


function drawHoneycombs(a, d) {
    const HEXA_ROWS     = 5;
    const HEXA_COLUMNS  = 8;

    var OFFSET_X = d;
    var OFFSET_Y = d * 0.5 * sqrt3;

    var hexagonX = 100; // y start
    var hexagonY = 100;   // x start

    for (var g = 0; g < 5; g++) {
        if (g % 2 == 0) {
            hexagonX = d * 0.5; // first type of string
        } else {
            hexagonX = 0;       // second type of string
        }

        for (var i = 0; i < 8; i++) {
            hexagonX += OFFSET_X;
            drawingOne6Angle(hexagonX, hexagonY, a);
        }

        hexagonY += OFFSET_Y;
    }
}

// =================================================================================

var elem = document.getElementById('canvas');

if (elem && elem.getContext) {
    var context = elem.getContext('2d');

    if (context) {
        const SIZE_HEXAGONE      = 50;
        const DISTANCE_HEXAGONE  = 100;

        drawHoneycombs(SIZE_HEXAGONE, DISTANCE_HEXAGONE);
    }
}
