shapes = []
models = []
var isUsingShadder = true;

function onLoad(){
    //Initialize the WebGL
    init();
    loadShapes()
    // loadTesseract();
    // loadChain();
    // loadIcosahedron();
    // loadSSDodecahedron()
}

async function loadShapes() {
    let file = await loadFile();
    let text = await file.text();
    parseResult = JSON.parse(text);
    if(parseResult.type == "model") {
        loadModel(parseResult.data);
    }
    if(parseResult.type == "tesseract") {
        loadTesseract(parseResult.data);
    }
}

function loadChain() {
    let chain = new Chain(squareNo=5);
    shapes.push(chain);
    redraw();
}

function saveShapes(){
    json = {type: "model", data:[]}
    for(shape of shapes) {
        json.data.push(shape.toString());
    }
    for(model of models) {
        for(shape of model){
            json.data.push(shape);
        }
    }
    const link = document.createElement('a');
    const file = new Blob([JSON.stringify(json)], {type: 'text/plain'});
    link.href = URL.createObjectURL(file);
    link.download = 'model.json';
    link.click();
    link.remove();
}

function loadModel(data){
    models.push(data);
    redraw(usingShape=false)
}

function loadTesseract(data=null) {
    gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
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
        shapes.push(tesseractRight);
        shapes.push(tesseractLeft);
        shapes.push(tesseractUp);
        shapes.push(tesseractDown);
        shapes.push(tesseractFront);
        shapes.push(tesseractBack);
        shapes.push(outerMostTesseract);
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
        //Convert to points
        let json = {type: "model", data:[]}
        for(shape of shapes) {
            json.data.push(shape.toString());
        }
        json = JSON.stringify(json);
        let parseResult = JSON.parse(json);
        loadModel(parseResult.data);
    }
    redraw();
}

function redraw(usingShape = false){
    var id = new Float32Array(16);
    convertToIdentityMatrix(id);
    var loop = () => {
        rotAngle = performance.now() / 10000 * Math.PI;
        // rotAngle = 8000 / 10000 * Math.PI;

        rotate(worldMatrix, id, rotAngle, [0,1,0]);
        gl.uniformMatrix4fv(matWorldLocation, gl.FALSE, worldMatrix);
        gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        if(usingShape){
            shapes.forEach(shape => {
                shape.draw();
            });
        }else{
            for(model of models){
                for(shape of model){
                    if(shape.type == "Tesseract"){
                        drawTesseractFromPoints(shape.vertices, isUsingShadder);
                        drawCubeFromPoints(shape.outerSquare.vertices);
                        drawCubeFromPoints(shape.innerSquare.vertices);
                    }
                }
            }
        }
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

function toggleShadder(){
    let isShadder = document.getElementById("toggleShadder").checked;
    for(shape of shapes){
        shape.changeShadder(isShadder);
    }
    isUsingShadder = isShadder;
}

//Draw From Points=======================================================================================================
function drawTesseractFromPoints(data, isUsingShadder = true){
    for(let batang of data){
        let vertices = [];
        if(isUsingShadder){
            for (let i = 0; i < batang.length; i++) {
                if(i%2 == 0){
                    vertices.push(batang[i][0], batang[i][1], batang[i][2], batang[i][3][0], batang[i][3][1], batang[i][3][2], batang[i][3][3]);
                }else{
                    if(i == 3 || i == 5){
                        vertices.push(batang[i][0], batang[i][1], batang[i][2], batang[i][3][0], batang[i][3][1], batang[i][3][2], batang[i][3][3]);
                    }else{
                        vertices.push(batang[i][0], batang[i][1], batang[i][2], batang[i][3][0], batang[i][3][1], batang[i][3][2], batang[i][3][3]);
                    }
                }
            }
        }else{
            for (let i = 0; i < batang.length; i++) {
                if(i%2 == 0){
                    vertices.push(batang[i][0], batang[i][1], batang[i][2], batang[i][3][0], batang[i][3][1], batang[i][3][2], batang[i][3][3]);
                }else{
                    vertices.push(batang[i][0], batang[i][1], batang[i][2], batang[i][3][0], batang[i][3][1], batang[i][3][2], batang[i][3][3]);
                }
            }
        }
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, batang.length); 
    }
}

function drawCubeFromPoints(data){
    for(let batang of data){
        let vertices = [];
        for (let i = 0; i < batang.length; i++) {
            vertices.push(batang[i][0], batang[i][1], batang[i][2], batang[i][3][0], batang[i][3][1], batang[i][3][2], batang[i][3][3]);
        }
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, batang.length); 
    }
}
//Draw From Points=======================================================================================================

function RotateXAxis(degree=0){
    for(model of models){
        for(shape of model){
            if(shape.type == "Tesseract"){
                for(batang of shape.outerSquare.vertices){
                    for(point of batang){
                        point = RotatePointXAxis(point, degree);
                    }
                }
                for(batang of shape.innerSquare.vertices){
                    for(point of batang){
                        point = RotatePointXAxis(point, degree);
                    }
                }
            }
            for(batang of shape.vertices){
                for(point of batang){
                    point = RotatePointXAxis(point, degree);
                }
            }
        }
    }
    redraw(usingShape=false);
}

function RotateYAxis(degree=0){
    for(model of models){
        for(shape of model){
            if(shape.type == "Tesseract"){
                for(batang of shape.outerSquare.vertices){
                    for(point of batang){
                        point = RotatePointYAxis(point, degree);
                    }
                }
                for(batang of shape.innerSquare.vertices){
                    for(point of batang){
                        point = RotatePointYAxis(point, degree);
                    }
                }
            }
            for(batang of shape.vertices){
                for(point of batang){
                    // Rotate point on X axis
                    point = RotatePointYAxis(point, degree);
                }
            }
        }
    }
    redraw(usingShape=false);
}

function RotateZAxis(degree=0){
    for(model of models){
        for(shape of model){
            if(shape.type == "Tesseract"){
                for(batang of shape.outerSquare.vertices){
                    for(point of batang){
                        point = RotatePointZAxis(point, degree);
                    }
                }
                for(batang of shape.innerSquare.vertices){
                    for(point of batang){
                        point = RotatePointZAxis(point, degree);
                    }
                }
            }
            for(batang of shape.vertices){
                for(point of batang){
                    // Rotate point on X axis
                    point = RotatePointZAxis(point, degree);
                }
            }
        }
    }
    redraw(usingShape=false);
}

function RotatePointXAxis(point, degree=0){
    let y = point[1];
    let z = point[2];
    let rad = degree * Math.PI / 180;
    let cos = Math.cos(rad);
    let sin = Math.sin(rad);
    let newY = y * cos - z * sin;
    let newZ = y * sin + z * cos;
    point[1] = newY;
    point[2] = newZ;
    return point;
}

function RotatePointYAxis(point, degree=0){
    let x = point[0];
    let z = point[2];
    let rad = degree * Math.PI / 180;
    let cos = Math.cos(rad);
    let sin = Math.sin(rad);
    let newX = x * cos - z * sin;
    let newZ = x * sin + z * cos;
    point[0] = newX;
    point[2] = newZ;
    return point;
}

function RotatePointZAxis(point, degree=0){
    let x = point[0];
    let y = point[1];
    let rad = degree * Math.PI / 180;
    let cos = Math.cos(rad);
    let sin = Math.sin(rad);
    let newX = x * cos - y * sin;
    let newY = x * sin + y * cos;
    point[0] = newX;
    point[1] = newY;
    return point;
}

onLoad();