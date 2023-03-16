function onLoad(){
    //Initialize the WebGL
    init();
    loadShapes()
    // loadTesseract();
    // loadIcosahedron();
    // loadSSDodecahedron()
}

async function loadShapes() {
    let file = await loadFile();
    let text = await file.text();
    parseResult = JSON.parse(text);
    if(parseResult.type == "tesseract") {
        loadTesseract(parseResult.data);
    }
}

function loadTesseract(data=null) {
    gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    shapes = [];
    if(data == null) {
        innerSquareCenter = new HollowSquare(color=[1.0,0.0,0.0,1.0], 0.5, 0,0,0);
        innerSquareRight = new HollowSquare(color=[1.0,0.0,0.0,1.0], 0.5, 6,0,0);
        innerSquareLeft = new HollowSquare(color=[1.0,0.0,0.0,1.0], 0.5, -6,0,0);
        innerSquareUp = new HollowSquare(color=[1.0,0.0,0.0,1.0], 0.5, 0,6,0);
        innerSquareDown = new HollowSquare(color=[1.0,0.0,0.0,1.0], 0.5, 0,-6,0);
        innerSquareFront = new HollowSquare(color=[1.0,0.0,0.0,1.0], 0.5, 0,0,6);
        innerSquareBack = new HollowSquare(color=[1.0,0.0,0.0,1.0], 0.5, 0,0,-6);
        // outerSquareCenter = new HollowSquare(color=[0.0,1.0,0.0,1.0], 0.5, 0,0,0, 2,2,2);
        outerSquareRight = new HollowSquare(color=[0.0,1.0,0.0,1.0], 0.5, 6,0,0, 2,2,2);
        outerSquareLeft = new HollowSquare(color=[0.0,1.0,0.0,1.0], 0.5, -6,0,0, 2,2,2);
        outerSquareUp = new HollowSquare(color=[0.0,1.0,0.0,1.0], 0.5, 0,6,0, 2,2,2);
        outerSquareDown = new HollowSquare(color=[0.0,1.0,0.0,1.0], 0.5, 0,-6,0, 2,2,2);
        outerSquareFront = new HollowSquare(color=[0.0,1.0,0.0,1.0], 0.5, 0,0,6, 2,2,2);
        outerSquareBack = new HollowSquare(color=[0.0,1.0,0.0,1.0], 0.5, 0,0,-6, 2,2,2);
        outermostSquare = new HollowSquare(color=[0.0,0.0,1.0,1.0], 0.5, 0,0,0, 8,8,8);
        // tesseractCenter = new NormalTesseract(outerSquareCenter, innerSquareCenter);
        tesseractRight = new NormalTesseract(outerSquareRight, innerSquareRight);
        tesseractLeft = new NormalTesseract(outerSquareLeft, innerSquareLeft);
        tesseractUp = new NormalTesseract(outerSquareUp, innerSquareUp);
        tesseractDown = new NormalTesseract(outerSquareDown, innerSquareDown);
        tesseractFront = new NormalTesseract(outerSquareFront, innerSquareFront);
        tesseractBack = new NormalTesseract(outerSquareBack, innerSquareBack);
        outerMostTesseract = new NormalTesseract(outermostSquare, innerSquareCenter);
        shapes = [tesseractRight, tesseractLeft, tesseractUp, tesseractDown, tesseractFront, tesseractBack, outerMostTesseract];
    } else {
        let square1;
        let square2;
        let tesseract;
        for(eachData of data) {
            let tempColor, tempThickness, tempOffsetX, tempOffsetY, tempOffsetZ, tempScaleX, tempScaleY, tempScaleZ, tempXLuarInput, tempYLuarInput, tempZLuarInput;
            if(eachData.color != null) {
                tempColor = eachData.color;
            }
            if(eachData.thickness != null) {
                tempThickness = eachData.thickness;
            }
            if(eachData.offsetX != null) {
                tempOffsetX = eachData.offsetX;
            }
            if(eachData.offsetY != null) {
                tempOffsetY = eachData.offsetY;
            }
            if(eachData.offsetZ != null) {
                tempOffsetZ = eachData.offsetZ;
            }
            if(eachData.scaleX != null) {
                tempScaleX = eachData.scaleX;
            }
            if(eachData.scaleY != null) {
                tempScaleY = eachData.scaleY;
            }
            if(eachData.scaleZ != null) {
                tempScaleZ = eachData.scaleZ;
            }
            if(eachData.xLuarInput != null) {
                tempXLuarInput = eachData.xLuarInput;
            }
            if(eachData.yLuarInput != null) {
                tempYLuarInput = eachData.yLuarInput;
            }
            if(eachData.zLuarInput != null) {
                tempZLuarInput = eachData.zLuarInput;
            }
            if(square1==null){
                square1 = new HollowSquare(color=tempColor, thickness=tempThickness, offsetX=tempOffsetX, offsetY=tempOffsetY, offsetZ=tempOffsetZ, scaleX=tempScaleX, scaleY=tempScaleY, scaleZ=tempScaleZ);
            }else{
                square2 = new HollowSquare(color=tempColor, thickness=tempThickness, offsetX=tempOffsetX, offsetY=tempOffsetY, offsetZ=tempOffsetZ, scaleX=tempScaleX, scaleY=tempScaleY, scaleZ=tempScaleZ);
                tesseract = new NormalTesseract(square1, square2, xLuarInput=tempXLuarInput, yLuarInput=tempYLuarInput, zLuarInput=tempZLuarInput);
                shapes.push(tesseract);
                square1 = null;
                square2 = null;
                tesseract = null;
            }
        }
    }
    var id = new Float32Array(16);
    convertToIdentityMatrix(id);
    var loop = () => {
        rotAngle = performance.now() / 10000 * Math.PI;
        // rotAngle = 8000 / 10000 * Math.PI;

        rotate(worldMatrix, id, rotAngle, [0,1,0]);
        gl.uniformMatrix4fv(matWorldLocation, gl.FALSE, worldMatrix);
        gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        shapes.forEach(shape => {
            shape.draw();
        });
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