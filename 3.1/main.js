const treeColor    = '#282112';
const windowColor  = '#4377D3';
const bricksColor  = '#B25627';

function drawingWindow(xWind, yWind) {
    context.fillStyle = windowColor;
    context.fillRect(xWind, yWind, 100, 100);

    context.strokeStyle = treeColor;
    context.lineWidth = 4;
    context.strokeRect(xWind, yWind, 100, 100);

    context.beginPath();
    context.moveTo(xWind + 50, yWind + 30);
    context.lineTo(xWind + 50, yWind + 100);
    context.stroke();

    context.beginPath();
    context.moveTo(xWind, yWind + 30);
    context.lineTo(xWind + 100, yWind + 30);
    context.stroke();
}


function drawingWindows() {
    drawingWindow(300, 220);
    drawingWindow(450, 220);
    drawingWindow(600, 220);
    drawingWindow(300, 370);
    drawingWindow(600, 370);
}


function drawingHouse() {
    // house
    var houseStartX  = 250;
    var houseStartY  = 200;
    var houseWidth   = 500;
    var houseHeight  = 300;
    context.fillStyle = bricksColor;
    context.fillRect(houseStartX, houseStartY, houseWidth, houseHeight);

    // drawing bricks
    context.strokeStyle = "#000000";

    for (var i = 5; i < houseHeight; i += 5) {
        context.beginPath();
        context.moveTo(houseStartX, houseStartY + i);
        context.lineTo(houseStartX + houseWidth, houseStartY + i);
        context.stroke();
    }

    for (var g = 0; g < houseHeight; g += 10) {
          for (var i = 10; i < houseWidth; i += 10) {
              context.beginPath();
              context.moveTo(houseStartX + i, houseStartY + g);
              context.lineTo(houseStartX + i, houseStartY + g + 5);
              context.stroke();

              context.beginPath();
              context.moveTo(houseStartX + i - 5, houseStartY + g + 5);
              context.lineTo(houseStartX + i - 5, houseStartY + g + 10);
              context.stroke();
          }

          // end brick
          context.beginPath();
          context.moveTo(houseStartX + houseWidth - 5, houseStartY + g + 5);
          context.lineTo(houseStartX + houseWidth - 5, houseStartY + g + 10);
          context.stroke();
    }

    drawingWindows();


    // drawing trumpet
    context.fillStyle = treeColor;
    context.fillRect(houseStartX + 100, houseStartY - 150, 20, 100);

    context.fillStyle = bricksColor;
    context.fillRect(houseStartX + 90, houseStartY - 160, 40, 20);


    // drawing roof
    context.fillStyle = treeColor;
    context.strokeStyle = bricksColor;
    context.lineWidth = 4;

    context.beginPath();

    context.moveTo(houseStartX + (houseWidth / 2), houseStartY - 100);
    context.lineTo(houseStartX - 50, houseStartY); // перемещаемся к координатам (x,y)
    context.lineTo(houseStartX + houseWidth + 50, houseStartY);
    context.lineTo(houseStartX + (houseWidth / 2), houseStartY - 100);

    context.fill();
    context.stroke();
    context.closePath();
}


function drawingOneCloud(cloudStartX, cloudStartY) {
    // drawing clouds
    context.beginPath();
    context.fillStyle = '#FFFFFF';

    context.moveTo(cloudStartX, cloudStartY);

    context.bezierCurveTo(cloudStartX - 10, cloudStartY - 50, cloudStartX + 50, cloudStartY - 60, cloudStartX + 60, cloudStartY - 10);
    context.bezierCurveTo(cloudStartX + 80, cloudStartY - 30, cloudStartX + 120, cloudStartY - 40, cloudStartX + 150, cloudStartY + 20);
    context.bezierCurveTo(cloudStartX + 170, cloudStartY + 100, cloudStartX + 120, cloudStartY + 50, cloudStartX + 100, cloudStartY + 50);
    context.bezierCurveTo(cloudStartX + 150, cloudStartY + 140, cloudStartX + 80, cloudStartY + 80, cloudStartX + 60, cloudStartY + 40);
    context.bezierCurveTo(cloudStartX + 10, cloudStartY + 80, cloudStartX + 20, cloudStartY + 90, cloudStartX, cloudStartY);


    context.fill();
    context.stroke();
    context.closePath();
}


function drowingOneGrass(size, xGrass, yGrass) {
    // size = [0 .. 1]
    context.strokeStyle = "#00f000";
    context.lineWidth = 1;

    for (var i = -15; i < 16; i += 5) {
        context.beginPath();
        context.moveTo(xGrass, yGrass);
        context.lineTo(xGrass + Math.random() * i * size, yGrass + (Math.random() * Math.abs(i) - 26) * size);
        console.log(yGrass + i)
        context.stroke();
    }
}


function drawingBackground() {
    horizonLine = 250;
    context.fillStyle = '#7D9DF2';
    context.fillRect(0, 0, 1000, horizonLine);

    context.fillStyle = '#6D9C00';
    context.fillRect(0, horizonLine, 1000, 1000 - horizonLine);

    drawingOneCloud(100, 100);
    drawingOneCloud(500, 20);
    drawingOneCloud(800, 90);

}

// =================================================================================

var elem = document.getElementById('canvas');

if (elem && elem.getContext) {
    var context = elem.getContext('2d');
    if (context) {
        drawingBackground();

        for (var i = 0; i < 80; i++) {
            drowingOneGrass(Math.random(), Math.random() * 1000, Math.random() * 250 + 250);
        }

        drawingHouse();

        for (var i = 0; i < 80; i++) {
            drowingOneGrass(Math.random(), Math.random() * 1000, Math.random() * 130 + 500);
        }
    }
}
