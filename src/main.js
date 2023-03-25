shapes = [];
models = [];
modelsCenterPoint = [];
var isUsingShadder = true;
var isUsingAnimation = false;
var animationAngle = 0;
var xRotateValue = 0;
var yRotateValue = 0;
var zRotateValue = 0;
var xTranslateValue = 0;
var yTranslateValue = 0;
var zTranslateValue = 0;
var xScaleValue = 1;
var yScaleValue = 1;
var zScaleValue = 1;

function onLoad() {
  //Initialize the WebGL
  init();
  // loadShapes()
  // loadTesseract();
  // loadChain();
  loadIcosahedron();
  // loadSSDodecahedron()
}

async function loadShapes() {
  let file = await loadFile();
  let text = await file.text();
  parseResult = JSON.parse(text);
  if (parseResult.type == "model") {
    loadModel(parseResult.data);
  }
  if (parseResult.type == "tesseract") {
    loadTesseract(parseResult.data);
  }
}

function loadChain() {
  let chain = new Chain((squareNo = 7));
  shapes.push(chain);
  //Convert to points
  let json = { type: "model", data: [] };
  for (shape of shapes) {
    json.data.push(shape.toString());
  }
  json = JSON.stringify(json);
  let parseResult = JSON.parse(json);
  loadModel(parseResult.data);
  // redraw((usingShape = true));
}

function saveShapes() {
  json = { type: "model", data: [] };
  for (shape of shapes) {
    json.data.push(shape.toString());
  }
  for (model of models) {
    for (shape of model) {
      json.data.push(shape);
    }
  }
  const link = document.createElement("a");
  const file = new Blob([JSON.stringify(json)], { type: "text/plain" });
  link.href = URL.createObjectURL(file);
  link.download = "model.json";
  link.click();
  link.remove();
}

function loadModel(data) {
  models.push(data);
  modelsCenterPoint.push([0, 0, 0]);
  redraw();
}

function loadTesseract(data = null) {
  gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  if (data == null) {
    innerSquareCenter = new HollowSquare(
      (color = [1.0, 0.0, 0.0, 1.0]),
      0.5,
      0,
      0,
      0
    );
    innerSquareRight = new HollowSquare(
      (color = [1.0, 0.0, 0.0, 1.0]),
      0.5,
      6,
      0,
      0
    );
    innerSquareLeft = new HollowSquare(
      (color = [1.0, 0.0, 0.0, 1.0]),
      0.5,
      -6,
      0,
      0
    );
    innerSquareUp = new HollowSquare(
      (color = [1.0, 0.0, 0.0, 1.0]),
      0.5,
      0,
      6,
      0
    );
    innerSquareDown = new HollowSquare(
      (color = [1.0, 0.0, 0.0, 1.0]),
      0.5,
      0,
      -6,
      0
    );
    innerSquareFront = new HollowSquare(
      (color = [1.0, 0.0, 0.0, 1.0]),
      0.5,
      0,
      0,
      6
    );
    innerSquareBack = new HollowSquare(
      (color = [1.0, 0.0, 0.0, 1.0]),
      0.5,
      0,
      0,
      -6
    );
    // outerSquareCenter = new HollowSquare(color=[0.0,1.0,0.0,1.0], 0.5, 0,0,0, 2,2,2);
    outerSquareRight = new HollowSquare(
      (color = [0.0, 1.0, 0.0, 1.0]),
      0.5,
      6,
      0,
      0,
      2,
      2,
      2
    );
    outerSquareLeft = new HollowSquare(
      (color = [0.0, 1.0, 0.0, 1.0]),
      0.5,
      -6,
      0,
      0,
      2,
      2,
      2
    );
    outerSquareUp = new HollowSquare(
      (color = [0.0, 1.0, 0.0, 1.0]),
      0.5,
      0,
      6,
      0,
      2,
      2,
      2
    );
    outerSquareDown = new HollowSquare(
      (color = [0.0, 1.0, 0.0, 1.0]),
      0.5,
      0,
      -6,
      0,
      2,
      2,
      2
    );
    outerSquareFront = new HollowSquare(
      (color = [0.0, 1.0, 0.0, 1.0]),
      0.5,
      0,
      0,
      6,
      2,
      2,
      2
    );
    outerSquareBack = new HollowSquare(
      (color = [0.0, 1.0, 0.0, 1.0]),
      0.5,
      0,
      0,
      -6,
      2,
      2,
      2
    );
    outermostSquare = new HollowSquare(
      (color = [0.0, 0.0, 1.0, 1.0]),
      0.5,
      0,
      0,
      0,
      8,
      8,
      8
    );
    // tesseractCenter = new NormalTesseract(outerSquareCenter, innerSquareCenter);
    tesseractRight = new NormalTesseract(outerSquareRight, innerSquareRight);
    tesseractLeft = new NormalTesseract(outerSquareLeft, innerSquareLeft);
    tesseractUp = new NormalTesseract(outerSquareUp, innerSquareUp);
    tesseractDown = new NormalTesseract(outerSquareDown, innerSquareDown);
    tesseractFront = new NormalTesseract(outerSquareFront, innerSquareFront);
    tesseractBack = new NormalTesseract(outerSquareBack, innerSquareBack);
    outerMostTesseract = new NormalTesseract(
      outermostSquare,
      innerSquareCenter
    );
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
    for (eachData of data) {
      let tempColor,
        tempThickness,
        tempOffsetX,
        tempOffsetY,
        tempOffsetZ,
        tempScaleX,
        tempScaleY,
        tempScaleZ,
        tempXLuarInput,
        tempYLuarInput,
        tempZLuarInput;
      if (eachData.color != null) {
        tempColor = eachData.color;
      }
      if (eachData.thickness != null) {
        tempThickness = eachData.thickness;
      }
      if (eachData.offsetX != null) {
        tempOffsetX = eachData.offsetX;
      }
      if (eachData.offsetY != null) {
        tempOffsetY = eachData.offsetY;
      }
      if (eachData.offsetZ != null) {
        tempOffsetZ = eachData.offsetZ;
      }
      if (eachData.scaleX != null) {
        tempScaleX = eachData.scaleX;
      }
      if (eachData.scaleY != null) {
        tempScaleY = eachData.scaleY;
      }
      if (eachData.scaleZ != null) {
        tempScaleZ = eachData.scaleZ;
      }
      if (eachData.xLuarInput != null) {
        tempXLuarInput = eachData.xLuarInput;
      }
      if (eachData.yLuarInput != null) {
        tempYLuarInput = eachData.yLuarInput;
      }
      if (eachData.zLuarInput != null) {
        tempZLuarInput = eachData.zLuarInput;
      }
      if (square1 == null) {
        square1 = new HollowSquare(
          (color = tempColor),
          (thickness = tempThickness),
          (offsetX = tempOffsetX),
          (offsetY = tempOffsetY),
          (offsetZ = tempOffsetZ),
          (scaleX = tempScaleX),
          (scaleY = tempScaleY),
          (scaleZ = tempScaleZ)
        );
      } else {
        square2 = new HollowSquare(
          (color = tempColor),
          (thickness = tempThickness),
          (offsetX = tempOffsetX),
          (offsetY = tempOffsetY),
          (offsetZ = tempOffsetZ),
          (scaleX = tempScaleX),
          (scaleY = tempScaleY),
          (scaleZ = tempScaleZ)
        );
        tesseract = new NormalTesseract(
          square1,
          square2,
          (xLuarInput = tempXLuarInput),
          (yLuarInput = tempYLuarInput),
          (zLuarInput = tempZLuarInput)
        );
        shapes.push(tesseract);
        square1 = null;
        square2 = null;
        tesseract = null;
      }
    }
    //Convert to points
    let json = { type: "model", data: [] };
    for (shape of shapes) {
      json.data.push(shape.toString());
    }
    json = JSON.stringify(json);
    let parseResult = JSON.parse(json);
    loadModel(parseResult.data);
  }
  redraw();
}

function clearShapes() {
  shapes = [];
  models = [];
  redraw();
}

function changeRadius() {
  cameraRadius = document.getElementById("camera-radius").value;
  document.getElementById("radius-value").innerHTML = cameraRadius;
  redraw((usingShape = true));
}

function loadIcosahedron(){
    gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    icosahedron = new Icosahedron(drawFromPoints=false,radius=10,offset=3,batang=[]);
    shapes.push(icosahedron)
    
    //Convert to points
    let json = {type: "model", data:[]}
    for(shape of shapes) {
        json.data.push(shape.toString());
    }
    json = JSON.stringify(json);
    let parseResult = JSON.parse(json);

    console.log("ass")
    loadModel(parseResult.data);
    redraw()
}

function loadSSDodecahedron(){
    gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    
    ssdodecahedron = new SmallSelatedDodecahedron(drawFromPoints=false,radius=10,offset=2,batang=[]);
    shapes.push(ssdodecahedron)
    
    let json = {type: "model", data:[]}
    for(shape of shapes) {
        json.data.push(shape.toString());
    }
    json = JSON.stringify(json);
    let parseResult = JSON.parse(json);
    loadModel(parseResult.data);
    redraw()
}

function changeAngleX() {
  cameraAngleX = toRadian(document.getElementById("camera-angle-x").value);
  document.getElementById("angle-value-x").innerHTML = Math.round(
    toDegree(cameraAngleX)
  );
  redraw((usingShape = true));
}

function changeAngleY() {
  cameraAngleY = toRadian(document.getElementById("camera-angle-y").value);
  document.getElementById("angle-value-y").innerHTML = Math.round(
    toDegree(cameraAngleY)
  );
  redraw((usingShape = true));
}

function changeAngleZ() {
  cameraAngleZ = toRadian(document.getElementById("camera-angle-z").value);
  document.getElementById("angle-value-z").innerHTML = Math.round(
    toDegree(cameraAngleZ)
  );
  redraw((usingShape = true));
}

function changeProjection() {
  projectionMode = document.getElementById("projection-mode").value;
  redraw((usingShape = true));
}

function resetCamera() {
  cameraRadius = 50;
  cameraAngleX = toRadian(0);
  cameraAngleY = toRadian(0);
  cameraAngleZ = toRadian(0);
  projectionMode = "orthographic";
  isUsingAnimation = false;
  
  document.getElementById("camera-radius").value = cameraRadius;
  document.getElementById("radius-value").innerHTML = cameraRadius;
  document.getElementById("camera-angle-x").value = toDegree(cameraAngleX);
  document.getElementById("angle-value-x").innerHTML = Math.round(
    toDegree(cameraAngleX)
  );
  document.getElementById("camera-angle-y").value = toDegree(cameraAngleY);
  document.getElementById("angle-value-y").innerHTML = Math.round(
    toDegree(cameraAngleY)
  );
  document.getElementById("camera-angle-z").value = toDegree(cameraAngleZ);
  document.getElementById("angle-value-z").innerHTML = Math.round(
    toDegree(cameraAngleZ)
  );
  document.getElementById("toggleAnimation").checked = false;
  redraw((usingShape = true));
}

function redraw(usingShape = false) {
  console.log("redraw");
  var id = new Float32Array(16);
  convertToIdentityMatrix(id);
  view();
  var loop = () => {
    if (isUsingAnimation) {
      // create rotAngle based on time in range of [-360, 360]
      rotAngle = (performance.now() / 10000) * 360;
      if (rotAngle > 360) {
        rotAngle = -360 + (rotAngle % 360);
      }
      
      document.getElementById("camera-angle-y").value = Math.round(rotAngle);
      document.getElementById("angle-value-y").innerHTML = Math.round(rotAngle);
      rotAngle = toRadian(rotAngle);
      rotate(worldMatrix, id, rotAngle, [0, 1, 0]);
    }
    gl.uniformMatrix4fv(matWorldLocation, gl.FALSE, worldMatrix);
    gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    if (false) {
      shapes.forEach((shape) => {
        shape.draw();
      });
    } else {
      for (model of models) {
        for (shape of model) {
          if (shape.type == "Tesseract") {
            drawTesseractFromPoints(
              shape.vertices,
              shape.innerSquare.vertices[0][0][3],
              shape.outerSquare.vertices[0][0][3]
            );
            drawCubeFromPoints(shape.outerSquare.vertices);
            drawCubeFromPoints(shape.innerSquare.vertices);
          }
          if (shape.type == "Icosahedron" || shape.type == "SSDodecahedron") {
            drawIcosahedroOrSSDodecahedronFromPoints(
              shape.vertices,
              isUsingShadder
            );
          }
          if (shape.type == "Chain") {
            drawChainFromPoints(shape.squares);
          }
        }
      }
    }
    if (isUsingAnimation) {
      requestAnimationFrame(loop);
    }
  };
  requestAnimationFrame(loop);
}

function toggleShadder() {
  let isShadder = document.getElementById("toggleShadder").checked;
  for (shape of shapes) {
    shape.changeShadder(isShadder);
  }
  isUsingShadder = isShadder;
  redraw((usingShape = true));
}

function toggleAnimation() {
  isUsingAnimation = document.getElementById("toggleAnimation").checked;
  redraw((usingShape = true));
}

//Draw From Points=======================================================================================================
function drawTesseractFromPoints(data, innerColor, outerColor) {
  for (let batang of data) {
    let vertices = [];
    if (isUsingShadder) {
      for (let i = 0; i < batang.length; i++) {
        vertices.push(
          batang[i][0],
          batang[i][1],
          batang[i][2],
          batang[i][3][0],
          batang[i][3][1],
          batang[i][3][2],
          batang[i][3][3],
          batang[i][4],
          batang[i][5],
          batang[i][6],
        );
      }
    } else {
      for (let i = 0; i < batang.length; i++) {
        if (i % 2 != 0) {
          vertices.push(
            batang[i][0],
            batang[i][1],
            batang[i][2],
            innerColor[0],
            innerColor[1],
            innerColor[2],
            innerColor[3],
            batang[i][4],
            batang[i][5],
            batang[i][6]
          );
        } else {
          vertices.push(
            batang[i][0],
            batang[i][1],
            batang[i][2],
            outerColor[0],
            outerColor[1],
            outerColor[2],
            outerColor[3],
            batang[i][4],
            batang[i][5],
            batang[i][6]
          );
        }
      }
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.drawArrays(gl.TRIANGLES, 0, batang.length);
  }
}

function drawCubeFromPoints(data) {
  for (let batang of data) {
    let vertices = [];
    if (true) {
      for (let i = 0; i < batang.length; i++) {
        vertices.push(
          batang[i][0],
          batang[i][1],
          batang[i][2],
          batang[i][3][0],
          batang[i][3][1],
          batang[i][3][2],
          batang[i][3][3],
          batang[i][4],
          batang[i][5],
          batang[i][6]
        );
      }
    } else {
      let tempColor = batang[0][3];
      for (let i = 0; i < batang.length; i++) {
        vertices.push(
          batang[i][0],
          batang[i][1],
          batang[i][2],
          tempColor[0],
          tempColor[1],
          tempColor[2],
          tempColor[3],
          batang[i][4],
          batang[i][5],
          batang[i][6]
        );
      }
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.drawArrays(gl.TRIANGLES, 0, batang.length);
  }
}

function drawIcosahedroOrSSDodecahedronFromPoints(data, isUsingShadder = true){
    for(let batang of data){
        let vertices = [];
        for (let i = 0; i < batang.length; i++) {
            // vertices.push(batang[i][0], batang[i][1], batang[i][2], batang[i][3], batang[i][4], batang[i][5],batang[i][6],1.0,1.0,1.0);
            vertices.push(batang[i][0], batang[i][1], batang[i][2], batang[i][3], batang[i][4], batang[i][5],batang[i][6],batang[i][7],batang[i][8],batang[i][9]);
        }
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        gl.drawArrays(gl.TRIANGLES, 0, batang.length);
    }
  }

function drawChainFromPoints(data) {
  for (let cube of data) {
    drawCubeFromPoints(cube.vertices);
  }
}

//Draw From Points=======================================================================================================

function Transform(method, axis) {
  //method, axis, value in integer

  //Method 0 -> Rotate
  //Method 1 -> Translate
  //Method 2 -> Scale

  //Axis 0 -> X
  //Axis 1 -> Y
  //Axis 2 -> Z
  var func;
  let value;

  if (method == 0) {
    if (axis == 0) {
      value = document.getElementById("x-rotate").value;
      document.getElementById("x-angle").innerHTML = value;
      value -= xRotateValue;
    } else if (axis == 1) {
      value = document.getElementById("y-rotate").value;
      document.getElementById("y-angle").innerHTML = value;
      value -= yRotateValue;
    } else if (axis == 2) {
      value = document.getElementById("z-rotate").value;
      document.getElementById("z-angle").innerHTML = value;
      value -= zRotateValue;
    }
  } else if (method == 1) {
    if (axis == 0) {
      value = document.getElementById("x-translate").value;
      document.getElementById("x-distance").innerHTML = value;
      value -= xTranslateValue;
    } else if (axis == 1) {
      value = document.getElementById("y-translate").value;
      document.getElementById("y-distance").innerHTML = value;
      value -= yTranslateValue;
    } else if (axis == 2) {
      value = document.getElementById("z-translate").value;
      document.getElementById("z-distance").innerHTML = value;
      value -= zTranslateValue;
    }
  } else if (method == 2) {
    if (axis == 0) {
      value = document.getElementById("x-scale").value;
      document.getElementById("x-ratio").innerHTML = value;
      value /= xScaleValue;
    } else if (axis == 1) {
      value = document.getElementById("y-scale").value;
      document.getElementById("y-ratio").innerHTML = value;
      value /= yScaleValue;
    } else if (axis == 2) {
      value = document.getElementById("z-scale").value;
      document.getElementById("z-ratio").innerHTML = value;
      value /= zScaleValue;
    }
  }

  if (method == 0) {
    params = [value, 0];
    if (axis == 0) {
      func = RotatePointXAxis;
    } else if (axis == 1) {
      func = RotatePointYAxis;
    } else if (axis == 2) {
      func = RotatePointZAxis;
    }
  } else if (method == 1) {
    params = [axis, value];
    func = Translate;
    for (centerPoint of modelsCenterPoint) {
      centerPoint = func(centerPoint, params);
    }
  } else if (method == 2) {
    params = [axis, value];
    func = Scale;
  }

  for (model of models) {
    for (shape of model) {
      if (shape.type == "Tesseract") {
        for (batang of shape.outerSquare.vertices) {
          for (point of batang) {
            point = func(point, params);
          }
        }
        for (batang of shape.innerSquare.vertices) {
          for (point of batang) {
            point = func(point, params);
          }
        }
        for (batang of shape.vertices) {
          for (point of batang) {
            point = func(point, params);
          }
        }
      }
      if (shape.type == "Icosahedron" || shape.type == "SSDodecahedron") {
        for (batang of shape.vertices) {
          for (point of batang) {
            point = func(point, params);
          }
        }
      }
      if(shape.type=="Chain"){
        for(square of shape.squares){
          for (batang of square.vertices) {
            for (point of batang) {
              point = func(point, params);
            }
          }
        }
      }
    }
    if (method == 0) {
      params[1] = params[1] + 1;
    }
  }
  if (!isUsingAnimation) {
    redraw();
  }

  if (method == 0) {
    if (axis == 0) {
      xRotateValue = document.getElementById("x-rotate").value;
    } else if (axis == 1) {
      yRotateValue = document.getElementById("y-rotate").value;
    } else if (axis == 2) {
      zRotateValue = document.getElementById("z-rotate").value;
    }
  } else if (method == 1) {
    if (axis == 0) {
      xTranslateValue = document.getElementById("x-translate").value;
    } else if (axis == 1) {
      yTranslateValue = document.getElementById("y-translate").value;
    } else if (axis == 2) {
      zTranslateValue = document.getElementById("z-translate").value;
    }
  } else if (method == 2) {
    if (axis == 0) {
      xScaleValue = document.getElementById("x-scale").value;
    } else if (axis == 1) {
      yScaleValue = document.getElementById("y-scale").value;
    } else if (axis == 2) {
      zScaleValue = document.getElementById("z-scale").value;
    }
  }
}

function RotatePointXAxis(point, params) {
  let degree = params[0];
  let centerOfRotation = modelsCenterPoint[params[1]];
  let y = point[1] - centerOfRotation[1];
  let z = point[2] - centerOfRotation[2];
  let yNormal = point[5] - centerOfRotation[1];
  let zNormal = point[6] - centerOfRotation[2];
  let rad = (degree * Math.PI) / 180;
  let cos = Math.cos(rad);
  let sin = Math.sin(rad);
  let newY = y * cos - z * sin;
  let newZ = y * sin + z * cos;
  let newYNormal = yNormal * cos - zNormal * sin;
  let newZNormal = yNormal * sin + zNormal * cos;
  point[1] = newY + centerOfRotation[1];
  point[2] = newZ + centerOfRotation[2];
  point[5] = newYNormal + centerOfRotation[1];
  point[6] = newZNormal + centerOfRotation[2];
  return point;
}

function RotatePointYAxis(point, params) {
  let degree = params[0];
  let centerOfRotation = modelsCenterPoint[params[1]];
  let x = point[0] - centerOfRotation[0];
  let z = point[2] - centerOfRotation[2];
  let xNormal = point[4] - centerOfRotation[0];
  let zNormal = point[6] - centerOfRotation[2];
  let rad = (degree * Math.PI) / 180;
  let cos = Math.cos(rad);
  let sin = Math.sin(rad);
  let newX = x * cos - z * sin;
  let newZ = x * sin + z * cos;
  let newXNormal = xNormal * cos - zNormal * sin;
  let newZNormal = xNormal * sin + zNormal * cos;
  point[0] = newX + centerOfRotation[0];
  point[2] = newZ + centerOfRotation[2];
  point[4] = newXNormal + centerOfRotation[0];
  point[6] = newZNormal + centerOfRotation[2];
  return point;
}

function RotatePointZAxis(point, params) {
  let degree = params[0];
  let centerOfRotation = modelsCenterPoint[params[1]];
  let x = point[0] - centerOfRotation[0];
  let y = point[1] - centerOfRotation[1];
  let xNormal = point[4] - centerOfRotation[0];
  let yNormal = point[5] - centerOfRotation[1];
  let rad = (degree * Math.PI) / 180;
  let cos = Math.cos(rad);
  let sin = Math.sin(rad);
  let newX = x * cos - y * sin;
  let newY = x * sin + y * cos;
  let newXNormal = xNormal * cos - yNormal * sin;
  let newYNormal = xNormal * sin + yNormal * cos;
  point[0] = newX + centerOfRotation[0];
  point[1] = newY + centerOfRotation[1];
  point[4] = newXNormal + centerOfRotation[0];
  point[5] = newYNormal + centerOfRotation[1];
  return point;
}

function Translate(point, params) {
  axis = params[0];
  value = params[1];
  point[axis] += value;
  return point;
}
function Scale(point, params) {
  axis = params[0];
  value = params[1];
  point[axis] *= value;
  return point;
}

onLoad();
