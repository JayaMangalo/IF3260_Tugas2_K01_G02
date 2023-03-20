class Chain {
    constructor(squaresNo=1, thickness=1.2, scaleX=2, scaleY=2, scaleZ=2, colors=[[1.0, 1.0, 1.0, 1.0]]) {
        this.squaresNo = squaresNo;
        this.thickness = thickness;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.scaleZ = scaleZ;
        this.colors = colors;
    }

    createChain() {
        this.squares = [];

        if (this.squaresNo <= 0) {
            this.squaresNo = 1;
        }

        if (this.colors.length > this.squaresNo) {
            this.colors = this.colors.slice(0, this.squaresNo);
        } else if (this.colors.length < this.squaresNo) {
            let diff = this.squaresNo - this.colors.length;
            for (let i = 0; i < diff; i++) {
                this.colors.push([1, 1, 1, 1.0]);
            }
        }

        let offsetX = 0;
        let offsetY = 0;
        let offsetZ = 0;
        let square0 = new HollowSquare(this.colors[0], this.thickness, offsetX,offsetY,offsetZ, this.scaleX,this.scaleY,this.scaleZ);
        square0.batang = [
            square0.createBatangDepanAtas(),
            square0.createBatangKiriatas(),
            square0.createBatangKananAtas(),
            // square0.createBatangBelakangAtas(),
            square0.createBatangDepanKiri(),
            // square0.createBatangDepanKanan(),
            square0.createBatangBelakangKiri(),
            square0.createBatangBelakangKanan(),
            square0.createBatangBawahDepan(),
            square0.createBatangBawahBelakang(),
            square0.createBatangBawahKiri(),
            square0.createBatangBawahKanan(),
        ]
        this.squares.push(square0);
        
        let j = -1;
        for (let i = 0; i < this.squaresNo - 1; i++) {
            if (i % 2 == 0) {
                // change sign
                offsetX *= -1;
                offsetY *= -1;
                offsetZ *= -1;
                
                offsetX += this.thickness;
                offsetY += 4
                offsetZ += 4

                // increment j to change the square shape
                j += 1;
            } else {
                // make all offset negative
                offsetX *= -1;
                offsetY *= -1;
                offsetZ *= -1;

            }

            if (j % 2 == 0) {
                let square1 = new HollowSquare(this.colors[i], this.thickness, offsetX,offsetY,offsetZ, this.scaleX,this.scaleY,this.scaleZ);
                square1.batang = [
                    square1.createBatangDepanAtas(),
                    square1.createBatangKiriatas(),
                    // square1.createBatangKananAtas(),
                    square1.createBatangBelakangAtas(),
                    square1.createBatangDepanKiri(),
                    square1.createBatangDepanKanan(),
                    // square1.createBatangBelakangKiri(),
                    square1.createBatangBelakangKanan(),
                    // square1.createBatangBawahDepan(),
                    square1.createBatangBawahBelakang(),
                    square1.createBatangBawahKiri(),
                    square1.createBatangBawahKanan(),
                ]
                this.squares.push(square1);
            } else {
                let square2 = new HollowSquare(this.colors[i], this.thickness, offsetX,offsetY,offsetZ, this.scaleX,this.scaleY,this.scaleZ);
                square2.batang = [
                    square2.createBatangDepanAtas(),
                    square2.createBatangKiriatas(),
                    square2.createBatangKananAtas(),
                    // square2.createBatangBelakangAtas(),
                    square2.createBatangDepanKiri(),
                    // square2.createBatangDepanKanan(),
                    square2.createBatangBelakangKiri(),
                    square2.createBatangBelakangKanan(),
                    square2.createBatangBawahDepan(),
                    square2.createBatangBawahBelakang(),
                    square2.createBatangBawahKiri(),
                    square2.createBatangBawahKanan(),
                ]
                this.squares.push(square2);
            }
        }
    }

    draw(squares=null) {
        if (squares == null) {
            this.createChain();
        }
        for (let i = 0; i < this.squares.length; i++) {
            this.squares[i].draw();
        }
    }
}

// function loadSquare() {
//     gl.clearColor(0.9296875, 0.91015625, 0.8515625, 1.0);
//     gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
//     var id = new Float32Array(16);
//     convertToIdentityMatrix(id);
//     square1 = new HollowSquare(color=[0.0,1.0,0.0,1.0], 1.2, 1.2,4,4, 2,2,2);
//     square1.batang = [
//         square1.createBatangDepanAtas(),
//         square1.createBatangKiriatas(),
//         // square1.createBatangKananAtas(),
//         square1.createBatangBelakangAtas(),
//         square1.cretaeBatangDepanKiri(),
//         square1.createBatangDepanKanan(),
//         // square1.createBatangBelakangKiri(),
//         square1.createBatangBelakangKanan(),
//         // square1.createBatangBawahDepan(),
//         square1.createBatangBawahBelakang(),
//         square1.createBatangBawahKiri(),
//         square1.createBatangBawahKanan(),
//     ]

//     square2 = new HollowSquare(color=[1.0,1.0,0.0,1.0], 1.2, 0,0,0, 2,2,2);
//     square2.batang = [
//         square2.createBatangDepanAtas(),
//         square2.createBatangKiriatas(),
//         square2.createBatangKananAtas(),
//         // square2.createBatangBelakangAtas(),
//         square2.cretaeBatangDepanKiri(),
//         // square2.createBatangDepanKanan(),
//         square2.createBatangBelakangKiri(),
//         square2.createBatangBelakangKanan(),
//         square2.createBatangBawahDepan(),
//         square2.createBatangBawahBelakang(),
//         square2.createBatangBawahKiri(),
//         square2.createBatangBawahKanan(),
//     ]

//     square3 = new HollowSquare(color=[0.0,0.0,1.0,1.0], 1.2, -1.2,-4,-4, 2,2,2);
//     square3.batang = [
//         square3.createBatangDepanAtas(),
//         square3.createBatangKiriatas(),
//         // square3.createBatangKananAtas(),
//         square3.createBatangBelakangAtas(),
//         square3.cretaeBatangDepanKiri(),
//         square3.createBatangDepanKanan(),
//         square3.createBatangBelakangKiri(),
//         square3.createBatangBelakangKanan(),
//         // square3.createBatangBawahDepan(),
//         // square3.createBatangBawahBelakang(),
//         square3.createBatangBawahKiri(),
//         square3.createBatangBawahKanan(),
//     ]

//     console.log(square1)

//     // rotate square 1 -45 degree in x axis
//     var rotateX = new Float32Array(9);
//     convertToIdentityMatrix(rotateX);
//     rotateX[0] = 1;
//     rotateX[4] = Math.cos(-45 * Math.PI / 180);
//     rotateX[5] = -Math.sin(-45 * Math.PI / 180);
//     rotateX[7] = Math.sin(-45 * Math.PI / 180);
//     rotateX[8] = Math.cos(-45 * Math.PI / 180);
    
//     console.log(rotateX)
//     square1.transform(rotateX);
//     console.log(square1)

//     shapes.push(square1);
//     shapes.push(square2);
//     shapes.push(square3);
//     redraw();
// }

