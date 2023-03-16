function onLoad(){
    //Initialize the WebGL
    init();
    loadSquare();
}

function loadSquare() {
    gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    innerSquareCenter = new HollowSquare(color=[1.0,0.0,0.0,1.0], 0.5, 0,0,0);
    innerSquareRight = new HollowSquare(color=[1.0,0.0,0.0,1.0], 0.5, 6,0,0);
    innerSquareLeft = new HollowSquare(color=[1.0,0.0,0.0,1.0], 0.5, -6,0,0);
    outerSquareCenter = new HollowSquare(color=[0.0,1.0,0.0,1.0], 0.5, 0,0,0, 2,2,2);
    outerSquareRight = new HollowSquare(color=[0.0,1.0,0.0,1.0], 0.5, 6,0,0, 2,2,2);
    outerSquareLeft = new HollowSquare(color=[0.0,1.0,0.0,1.0], 0.5, -6,0,0, 2,2,2);
    outermostSquare = new HollowSquare(color=[0.0,0.0,1.0,1.0], 0.5, 0,0,0,4,4,4);
    tesseractCenter = new NormalTesseract(outerSquareCenter, innerSquareCenter);
    tesseractRight = new NormalTesseract(outerSquareRight, innerSquareRight);
    tesseractLeft = new NormalTesseract(outerSquareLeft, innerSquareLeft);
    // doubleTesseract = new DoubleTesseract(tesseract1, tesseract2);
    // doubleTesseract.draw();
    // tesseract1.draw();
    var id = new Float32Array(16);
    convertToIdentityMatrix(id);
    var loop = () => {
        rotAngle = performance.now() / 10000 * Math.PI;
        // rotAngle = 8000 / 10000 * Math.PI;

        rotate(worldMatrix, id, rotAngle, [0,1,0]);
        gl.uniformMatrix4fv(matWorldLocation, gl.FALSE, worldMatrix);
        gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        // doubleTesseract.draw();
        tesseractCenter.draw();
        tesseractRight.draw();
        tesseractLeft.draw();
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
}

onLoad();