class SmallSelatedDodecahedron extends Polyhedron{
    constructor(radius,offset,color){
        super(radius,offset,color)
    }

    createP1TopRightDiagonals(){
        this.pushTrianglePrism([
            this.p1_top_right,
            this.p1_top_right_to_p3_top_right, //3
            this.p1_top_right_to_p2_top_right, //2
            
            this.p2_bot_right,
            this.p2_bot_right_to_p3_top_right,
            this.p2_bot_right_to_p2_top_right,
            
        ])
        this.pushTrianglePrism([
            this.p1_top_right,
            this.p1_top_right_to_p2_top_right, //2
            this.p1_top_right_to_p1_bot_right, //1
            
            this.p3_top_left,
            this.p3_top_left_to_p2_top_right,
            this.p3_top_left_to_p1_bot_right,
            
            
        ])
        this.pushTrianglePrism([
            this.p1_top_right,
            this.p1_top_right_to_p1_bot_right, //1
            this.p1_top_right_to_p2_top_left, //5
            
            this.p3_bot_left,
            this.p3_bot_left_to_p1_bot_right,
            this.p3_bot_left_to_p2_top_left,
            
        ])
        this.pushTrianglePrism([
            this.p1_top_right,
            this.p1_top_right_to_p2_top_left, //5
            this.p1_top_right_to_p3_bot_right, //4

            this.p2_bot_left,
            this.p2_bot_left_to_p3_bot_right,
            this.p2_bot_left_to_p2_top_left,
           
        ])
    }
    createP1BotRightDiagonals(){
        this.pushTrianglePrism([
            this.p1_bot_right,
            this.p1_bot_right_to_p3_top_left, //3
            this.p1_bot_right_to_p2_top_right, //2
            
            this.p2_bot_right,
            this.p2_bot_right_to_p3_top_left,
            this.p2_bot_right_to_p2_top_right,
            
        ])
        this.pushTrianglePrism([
            this.p1_bot_right,
            this.p1_bot_right_to_p2_top_right, //2
            this.p1_bot_right_to_p1_top_right, //1
            
            this.p3_top_right,
            this.p3_top_right_to_p2_top_right,
            this.p3_top_right_to_p1_top_right,
            
            
        ])
        this.pushTrianglePrism([
            this.p1_bot_right,
            this.p1_bot_right_to_p1_top_right, //1
            this.p1_bot_right_to_p2_top_left, //5
            
            this.p3_bot_right,
            this.p3_bot_right_to_p1_top_right,
            this.p3_bot_right_to_p2_top_left,
            
        ])
        this.pushTrianglePrism([
            this.p1_bot_right,
            this.p1_bot_right_to_p2_top_left, //5
            this.p1_bot_right_to_p3_bot_left, //4

            this.p2_bot_left,
            this.p2_bot_left_to_p2_top_left,
            this.p2_bot_left_to_p3_bot_left,
           
        ])
    }
    createP1BotLeftDiagonals(){
        this.pushTrianglePrism([
            this.p1_bot_left,
            this.p1_bot_left_to_p3_top_left, //3
            this.p1_bot_left_to_p2_bot_right, //2
            
            this.p2_top_right,
            this.p2_top_right_to_p3_top_left,
            this.p2_top_right_to_p2_bot_right,
            
        ])
        this.pushTrianglePrism([
            this.p1_bot_left,
            this.p1_bot_left_to_p2_bot_right, //2
            this.p1_bot_left_to_p1_top_left, //1
            
            this.p3_top_right,
            this.p3_top_right_to_p2_bot_right,
            this.p3_top_right_to_p1_top_left,
            
            
        ])
        this.pushTrianglePrism([
            this.p1_bot_left,
            this.p1_bot_left_to_p1_top_left, //1
            this.p1_bot_left_to_p2_bot_left, //5
            
            this.p3_bot_right,
            this.p3_bot_right_to_p1_top_left,
            this.p3_bot_right_to_p2_bot_left,
            
        ])
        this.pushTrianglePrism([
            this.p1_bot_left,
            this.p1_bot_left_to_p2_bot_left, //5
            this.p1_bot_left_to_p3_bot_left, //4

            this.p2_top_left,
            this.p2_top_left_to_p2_bot_left,
            this.p2_top_left_to_p3_bot_left,
           
        ])
    }
    createP1TopLeftDiagonals(){
        this.pushTrianglePrism([
            this.p1_top_left,
            this.p1_top_left_to_p3_top_right, //3
            this.p1_top_left_to_p2_bot_right, //2
            
            this.p2_top_right,
            this.p2_top_right_to_p3_top_right,
            this.p2_top_right_to_p2_bot_right,
            
        ])
        this.pushTrianglePrism([
            this.p1_top_left,
            this.p1_top_left_to_p2_bot_right, //2
            this.p1_top_left_to_p1_bot_left, //1
            
            this.p3_top_left,
            this.p3_top_left_to_p2_bot_right,
            this.p3_top_left_to_p1_bot_left,
            
        ])
        this.pushTrianglePrism([
            this.p1_top_left,
            this.p1_top_left_to_p1_bot_left, //1
            this.p1_top_left_to_p2_bot_left, //5
            
            this.p3_bot_left,
            this.p3_bot_left_to_p1_bot_left,
            this.p3_bot_left_to_p2_bot_left,
            
        ])
        this.pushTrianglePrism([
            this.p1_top_left,
            this.p1_top_left_to_p2_bot_left, //5
            this.p1_top_left_to_p3_bot_right, //4

            this.p2_top_left,
            this.p2_top_left_to_p2_bot_left,
            this.p2_top_left_to_p3_bot_right,
        ])
    }
    createP2TopRightDiagonals(){
        this.pushTrianglePrism([
            this.p2_top_right,
            this.p2_top_right_to_p3_top_right, //2
            this.p2_top_right_to_p1_top_right, //3
            

            this.p3_bot_right,
            this.p3_bot_right_to_p3_top_right,
            this.p3_bot_right_to_p1_top_right,
            
        ])
        this.pushTrianglePrism([
            this.p2_top_right,
            this.p2_top_right_to_p1_bot_right, //4
            this.p2_top_right_to_p3_top_left,  //5

            this.p3_bot_left,
            this.p3_bot_left_to_p1_bot_right,
            this.p3_bot_left_to_p3_top_left
        ])
    }
    createP2BotRightDiagonals(){
        this.pushTrianglePrism([
            this.p2_bot_right,
            this.p2_bot_right_to_p3_top_right, //2
            this.p2_bot_right_to_p1_top_left,  //3

            this.p3_bot_right,
            this.p3_bot_right_to_p3_top_right,
            this.p3_bot_right_to_p1_top_left,
        ])
        this.pushTrianglePrism([
            this.p2_bot_right,
            this.p2_bot_right_to_p1_bot_left, //4
            this.p2_bot_right_to_p3_top_left, //5

            this.p3_bot_left,
            this.p3_bot_left_to_p1_bot_left,
            this.p3_bot_left_to_p3_top_left
        ])
    }
    createP2BotLefttDiagonals(){
        this.pushTrianglePrism([
            this.p2_bot_left,
            this.p2_bot_left_to_p3_bot_right, //2
            this.p2_bot_left_to_p1_top_left,  //3

            this.p3_top_right,
            this.p3_top_right_to_p3_bot_right,
            this.p3_top_right_to_p1_top_left,
        ])
        this.pushTrianglePrism([
            this.p2_bot_left,
            this.p2_bot_left_to_p1_bot_left, //4
            this.p2_bot_left_to_p3_bot_left, //5

            this.p3_top_left,
            this.p3_top_left_to_p1_bot_left,
            this.p3_top_left_to_p3_bot_left
        ])
    }
    createP2TopLeftDiagonals(){
        this.pushTrianglePrism([
            this.p2_top_left,
            this.p2_top_left_to_p3_bot_right,  //2
            this.p2_top_left_to_p1_top_right, //3

            this.p3_top_right,
            this.p3_top_right_to_p3_bot_right,
            this.p3_top_right_to_p1_top_right,
        ])
        this.pushTrianglePrism([
            this.p2_top_left,
            this.p2_top_left_to_p1_bot_right, //4
            this.p2_top_left_to_p3_bot_left,  //5

            this.p3_top_left,
            this.p3_top_left_to_p1_bot_right,
            this.p3_top_left_to_p3_bot_left
        ])
    }
    createAllStraightEdges(){
        this.pushTrianglePrism([
            this.p1_top_right,
            this.p1_top_right_to_p3_bot_right, //4
            this.p1_top_right_to_p3_top_right, //3

            this.p1_top_left,
            this.p1_top_left_to_p3_bot_right,
            this.p1_top_left_to_p3_top_right
        ])

        this.pushTrianglePrism([
            this.p1_bot_right,
            this.p1_bot_right_to_p3_bot_left, //4
            this.p1_bot_right_to_p3_top_left, //3

            this.p1_bot_left,
            this.p1_bot_left_to_p3_bot_left,
            this.p1_bot_left_to_p3_top_left
        ])

        this.pushTrianglePrism([
            this.p2_top_right,
            this.p2_top_right_to_p1_bot_right,  //4
            this.p2_top_right_to_p1_top_right, //3

            this.p2_top_left,
            this.p2_top_left_to_p1_bot_right,
            this.p2_top_left_to_p1_top_right
        ])

        this.pushTrianglePrism([
            this.p2_bot_right,
            this.p2_bot_right_to_p1_bot_left,  //4
            this.p2_bot_right_to_p1_top_left, //3 

            this.p2_bot_left,
            this.p2_bot_left_to_p1_bot_left,
            this.p2_bot_left_to_p1_top_left
        ])

        this.pushTrianglePrism([
            this.p3_top_right,
            this.p3_top_right_to_p2_bot_right,  //4
            this.p3_top_right_to_p2_top_right, //3

            this.p3_top_left,
            this.p3_top_left_to_p2_bot_right,
            this.p3_top_left_to_p2_top_right
        ])

        this.pushTrianglePrism([
            this.p3_bot_right,
            this.p3_bot_right_to_p2_bot_left,
            this.p3_bot_right_to_p2_top_left,

            this.p3_bot_left,
            this.p3_bot_left_to_p2_bot_left,
            this.p3_bot_left_to_p2_top_left
        ])
    }
    createFrames(){
        this.batang = []

        this.createP1TopRightDiagonals()
        this.createP1BotRightDiagonals()
        this.createP1BotLeftDiagonals()
        this.createP1TopLeftDiagonals()

        this.createP2TopRightDiagonals()
        this.createP2BotRightDiagonals()
        this.createP2BotLefttDiagonals()
        this.createP2TopLeftDiagonals()

        this.createAllStraightEdges()


        
    }
    draw(){
        if(this.batang == null){
            this.createFrames();
        }
        for(let batang of this.batang){
            let vertices = [];
            for (let i = 0; i < batang.length; i++) {
                vertices.push(batang[i][0], batang[i][1], batang[i][2], this.color[0], this.color[1], this.color[2], this.color[3]);
            }
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, batang.length);
        }
    }
}