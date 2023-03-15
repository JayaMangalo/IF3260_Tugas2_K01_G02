function onLoad(){
    //Initialize the WebGL
    init();
    loadSquare();
    // loadIcosahedron();
    // loadSSDodecahedron()
}

function loadSquare() {
    gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    innerSquare = new HollowSquare(color=[1.0,0.0,0.0,1.0]);
    outerSquare = new HollowSquare(color=[0.0,1.0,0.0,1.0], 0,0,0,1,1,1);
    outermostSquare = new HollowSquare(color=[0.0,0.0,1.0,1.0], 0,0,0,2,2,2);
    tesseract1 = new NormalTesseract(outerSquare, innerSquare, color=[0.0,0.5,0.5,1.0]);
    tesseract2 = new SpinningTesseract(outermostSquare, outerSquare, color=[0.5,0.5,0.0,1.0]);
    doubleTesseract = new DoubleTesseract(tesseract1, tesseract2);
    doubleTesseract.draw();
    var id = new Float32Array(16);
    convertToIdentityMatrix(id);
    var loop = () => {
        rotAngle = performance.now() / 10000 * Math.PI;
        rotate(worldMatrix, id, rotAngle, [0,1,0]);
        gl.uniformMatrix4fv(matWorldLocation, gl.FALSE, worldMatrix);
        gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        doubleTesseract.draw();
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
}

function loadIcosahedron(){
    gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    icosahedron = new Icosahedron(radius=1,offset=0.1,color=[1.0,0.0,0.0,1.0]);
    icosahedron.draw();
    var id = new Float32Array(16);
    convertToIdentityMatrix(id);
    var loop = () => {
        rotAngle = performance.now() / 10000 * Math.PI;
        rotate(worldMatrix, id, rotAngle, [0,1,0]);
        gl.uniformMatrix4fv(matWorldLocation, gl.FALSE, worldMatrix);
        gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        icosahedron.draw();
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
}

function loadSSDodecahedron(){
    gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    ssdodecahedron = new SmallSelatedDodecahedron(radius=1,offset=0.1,color=[1.0,0.0,0.0,1.0]);
    ssdodecahedron.draw();
    var id = new Float32Array(16);
    convertToIdentityMatrix(id);
    var loop = () => {
        rotAngle = performance.now() / 10000 * Math.PI;
        rotate(worldMatrix, id, rotAngle, [0,1,0]);
        gl.uniformMatrix4fv(matWorldLocation, gl.FALSE, worldMatrix);
        gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        ssdodecahedron.draw();
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
}

onLoad();