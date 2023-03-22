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
            // square0.createTambalKiriAtasBelakang()
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

    draw() {
        if (this.squares == null) {
            this.createChain();
        }
        for (let i = 0; i < this.squares.length; i++) {
            this.squares[i].draw();
        }
    }

    toString() {
        if (this.squares == null) {
            this.createChain();
        }

        let str = {
            type: "Chain",
            squaresNo: this.squaresNo,
            thickness: this.thickness,
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            scaleZ: this.scaleZ,
            colors: this.colors,
            squares: []
        }

        for (let i = 0; i < this.squares.length; i++) {
            str.squares.push(this.squares[i].toString());
        }
        
        return str;
    }
}
