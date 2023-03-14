function onLoad(){
    //Initialize the WebGL
    init();
    loadSquare();
}

function loadSquare() {
    gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(array), gl.STATIC_DRAW);
    // gl.drawArrays(gl.TRIANGLES, 0, 6);
    innerSquare = new HollowSquare(color=[1.0,0.0,0.0,1.0]);
    outerSquare = new HollowSquare(color=[0.0,1.0,0.0,1.0], 0,0,0,1,1,1);
    innerSquare.draw();
    outerSquare.draw();
}

onLoad();