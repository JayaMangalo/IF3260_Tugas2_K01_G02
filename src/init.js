//Variable Declaration and Initialization
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl2");
var vertexShader = gl.createShader(gl.VERTEX_SHADER);
var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
var program = gl.createProgram();
var vertexBuffer = gl.createBuffer();
var indexBuffer = gl.createBuffer();
var positionAttribLocation;
var colorAttribLocation;
var shadderSource;

var matWorldLocation;
var matViewLocation;
var matProjLocation;
var worldMatrix;
var viewMatrix;
var projMatrix;
var cameraMatrix;
var eyeX, eyeY, eyeZ;
var cameraAngle;
var cameraRadius;
var fieldOfView;
var projectionMode;

//Initialize the WebGL
function init() {
  //Check if webgl is supported
  if (!gl) {
    alert("WebGL is not supported");
    return;
  }

  //Set the Canvas
  gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  //Create Shadder
  const shadderSource = {
    vertexShaderSource: `#version 300 es
        in vec3 vertPosition;
        in vec4 vertColor;
        out vec4 fragColor;

        uniform mat4 mWorld;
        uniform mat4 mView;
        uniform mat4 mProj;
    
        void main() {
            fragColor = vertColor;
            gl_Position = mProj * mView * mWorld * vec4(vertPosition, 1);
        }`,

    fragmentShaderSource: `#version 300 es
        precision mediump float;
        in vec4 fragColor;
        out vec4 outColor;
    
        void main() {
            outColor = fragColor;
        }`,
  };
  //Create Shadder
  gl.shaderSource(vertexShader, shadderSource.vertexShaderSource);
  gl.shaderSource(fragmentShader, shadderSource.fragmentShaderSource);

  //Compile Shadder
  gl.compileShader(vertexShader);
  if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.error(
      "ERROR compiling vertex shader!",
      gl.getShaderInfoLog(vertexShader)
    );
    return;
  }
  gl.compileShader(fragmentShader);
  if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    console.error(
      "ERROR compiling fragment shader!",
      gl.getShaderInfoLog(fragmentShader)
    );
    return;
  }

  //Attach Shadder
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  //Link Shadder
  gl.linkProgram(program);

  //Bind the buffer
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // Create Position Attribute

  positionAttribLocation = gl.getAttribLocation(program, "vertPosition");
  gl.vertexAttribPointer(
    positionAttribLocation,
    3, //3 float per vertex (XYZ)
    gl.FLOAT,
    gl.FALSE,
    7 * Float32Array.BYTES_PER_ELEMENT, //1 vertex = 7 float (XYZRGBA)
    0 //Position start from the first element
  );

  // Create Color Attribute
  colorAttribLocation = gl.getAttribLocation(program, "vertColor");
  gl.vertexAttribPointer(
    colorAttribLocation,
    4, //4 float per vertex (RGBA)
    gl.FLOAT,
    gl.FALSE,
    7 * Float32Array.BYTES_PER_ELEMENT, //1 vertex = 7 float (XYZRGBA)
    3 * Float32Array.BYTES_PER_ELEMENT //Color start from the fourth element
  );

  //Enable the attribute
  gl.enableVertexAttribArray(positionAttribLocation);
  gl.enableVertexAttribArray(colorAttribLocation);

  //Enable transparency
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  //Enable Depth Test
  gl.enable(gl.DEPTH_TEST);

  //Start the program
  gl.useProgram(program);
  matWorldLocation = gl.getUniformLocation(program, "mWorld");
  matViewLocation = gl.getUniformLocation(program, "mView");
  matProjLocation = gl.getUniformLocation(program, "mProj");
  
  worldMatrix = new Float32Array(16);
  viewMatrix = new Float32Array(16);
  projMatrix = new Float32Array(16);
  convertToIdentityMatrix(worldMatrix);
  
  cameraAngle = toRadian(0);
  cameraRadius = 50;
  fieldOfView = toRadian(45);
  projectionMode = "orthographic";
  view();
}

// Initialize the View
function view() {
  if (projectionMode == "orthographic") {
    projMatrix = ortographic(
      -canvas.width/(1000/cameraRadius), //left
      canvas.width/(1000/cameraRadius), //right
      -canvas.height/(1000/cameraRadius), //bottom
      canvas.height/(1000/cameraRadius), //top
      0.1, //near
      1000.0 //far
    );
  } else if (projectionMode == "perspective") {
    projMatrix = perspective(
      fieldOfView,
      canvas.width / canvas.height,
      0.1,
      1000.0
    );
  }

  cameraMatrix = yRotation(cameraAngle);
  cameraMatrix = translate(cameraMatrix, 0, 0, cameraRadius * 1.5);
  viewMatrix = inverse(cameraMatrix);

  gl.uniformMatrix4fv(matWorldLocation, gl.FALSE, worldMatrix);
  gl.uniformMatrix4fv(matViewLocation, gl.FALSE, viewMatrix);
  gl.uniformMatrix4fv(matProjLocation, gl.FALSE, projMatrix);
}
