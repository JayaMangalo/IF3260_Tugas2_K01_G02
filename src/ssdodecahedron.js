class SmallSelatedDodecahedron {
    constructor(drawFromPoints,radius,offset,batang){
        if(drawFromPoints){
            this.batang = batang
        }else{

        let phi_ratio = (1 + Math.sqrt(5))/2;           //φ 
        let prr_outer = phi_ratio * radius              //φ for out
        
        let one_outer = 1*radius                               //1 for out

        let dist_between_two_points =  Math.sqrt((phi_ratio-1)^2 + 1 + phi_ratio^2)*radius
        this.offsetratio = offset/dist_between_two_points
        
        let color1 = [1,0,0,1]
        let color2 = [1,1,0,1]
        let color3 = [0,0.5,0.5,1]
        //PersegiPanjang 1 Outer (±phi, ±1, 0) 
        this.p1_top_right = [prr_outer,one_outer,0].concat(color1) 
        this.p1_bot_right = [prr_outer,-one_outer,0].concat(color1) 
        this.p1_bot_left = [-prr_outer,-one_outer,0].concat(color1) 
        this.p1_top_left = [-prr_outer,one_outer,0].concat(color1) 

        //PersegiPanjang 2 Outer (±1, 0, ±phi)
        this.p2_top_right = [one_outer,0,prr_outer].concat(color2)  
        this.p2_bot_right = [-one_outer,0,prr_outer].concat(color2) 
        this.p2_bot_left = [-one_outer,0,-prr_outer].concat(color2) 
        this.p2_top_left = [one_outer,0,-prr_outer].concat(color2) 

        //PersegiPanjang 3 Outer (0, ±phi, ±1)
        this.p3_top_right = [0,prr_outer,one_outer].concat(color3)  
        this.p3_bot_right = [0,prr_outer,-one_outer].concat(color3)  
        this.p3_bot_left = [0,-prr_outer,-one_outer].concat(color3)  
        this.p3_top_left = [0,-prr_outer,one_outer].concat(color3)  

        //PersegiPanjang 1 Offseted
        {
        //PersegiPanjang 1 Top_Right
        this.p1_top_right_to_p1_bot_right = this.inbetween_point(this.p1_top_right,this.p1_bot_right).concat(color1) 
        this.p1_top_right_to_p2_top_right = this.inbetween_point(this.p1_top_right,this.p2_top_right).concat(color1) 
        this.p1_top_right_to_p3_top_right = this.inbetween_point(this.p1_top_right,this.p3_top_right).concat(color1) 
        this.p1_top_right_to_p3_bot_right = this.inbetween_point(this.p1_top_right,this.p3_bot_right).concat(color1) 
        this.p1_top_right_to_p2_top_left = this.inbetween_point(this.p1_top_right,this.p2_top_left).concat(color1) 

        //PersegiPanjang 1 Bot_Right
        this.p1_bot_right_to_p1_top_right = this.inbetween_point(this.p1_bot_right,this.p1_top_right).concat(color1) 
        this.p1_bot_right_to_p2_top_right = this.inbetween_point(this.p1_bot_right,this.p2_top_right).concat(color1)
        this.p1_bot_right_to_p3_top_left = this.inbetween_point(this.p1_bot_right,this.p3_top_left).concat(color1) 
        this.p1_bot_right_to_p3_bot_left = this.inbetween_point(this.p1_bot_right,this.p3_bot_left).concat(color1) 
        this.p1_bot_right_to_p2_top_left = this.inbetween_point(this.p1_bot_right,this.p2_top_left).concat(color1) 
        
        //PersegiPanjang 1 Bot_Left
        this.p1_bot_left_to_p1_top_left = this.inbetween_point(this.p1_bot_left,this.p1_top_left).concat(color1) 
        this.p1_bot_left_to_p2_bot_right = this.inbetween_point(this.p1_bot_left,this.p2_bot_right).concat(color1) 
        this.p1_bot_left_to_p3_top_left = this.inbetween_point(this.p1_bot_left,this.p3_top_left).concat(color1) 
        this.p1_bot_left_to_p3_bot_left = this.inbetween_point(this.p1_bot_left,this.p3_bot_left).concat(color1) 
        this.p1_bot_left_to_p2_bot_left = this.inbetween_point(this.p1_bot_left,this.p2_bot_left).concat(color1) 

        //PersegiPanjang 1 Top_Left
        this.p1_top_left_to_p1_bot_left = this.inbetween_point(this.p1_top_left,this.p1_bot_left).concat(color1) 
        this.p1_top_left_to_p2_bot_right = this.inbetween_point(this.p1_top_left,this.p2_bot_right).concat(color1) 
        this.p1_top_left_to_p3_top_right = this.inbetween_point(this.p1_top_left,this.p3_top_right).concat(color1) 
        this.p1_top_left_to_p3_bot_right = this.inbetween_point(this.p1_top_left,this.p3_bot_right).concat(color1) 
        this.p1_top_left_to_p2_bot_left = this.inbetween_point(this.p1_top_left,this.p2_bot_left).concat(color1) 
        }
        //PersegiPanjang 2 Offseted
        {
        //PersegiPanjang 2 Top_Right
        this.p2_top_right_to_p2_bot_right = this.inbetween_point(this.p2_top_right,this.p2_bot_right).concat(color2) 
        this.p2_top_right_to_p3_top_right = this.inbetween_point(this.p2_top_right,this.p3_top_right).concat(color2) 
        this.p2_top_right_to_p1_top_right = this.inbetween_point(this.p2_top_right,this.p1_top_right).concat(color2) 
        this.p2_top_right_to_p1_bot_right = this.inbetween_point(this.p2_top_right,this.p1_bot_right).concat(color2) 
        this.p2_top_right_to_p3_top_left = this.inbetween_point(this.p2_top_right,this.p3_top_left).concat(color2) 

        //PersegiPanjang 2 Bot_Right
        this.p2_bot_right_to_p2_top_right = this.inbetween_point(this.p2_bot_right,this.p2_top_right).concat(color2) 
        this.p2_bot_right_to_p3_top_right = this.inbetween_point(this.p2_bot_right,this.p3_top_right).concat(color2) 
        this.p2_bot_right_to_p1_top_left = this.inbetween_point(this.p2_bot_right,this.p1_top_left).concat(color2) 
        this.p2_bot_right_to_p1_bot_left = this.inbetween_point(this.p2_bot_right,this.p1_bot_left).concat(color2) 
        this.p2_bot_right_to_p3_top_left = this.inbetween_point(this.p2_bot_right,this.p3_top_left).concat(color2) 
        
        //PersegiPanjang 2 Bot_Left
        this.p2_bot_left_to_p2_top_left = this.inbetween_point(this.p2_bot_left,this.p2_top_left).concat(color2) 
        this.p2_bot_left_to_p3_bot_right = this.inbetween_point(this.p2_bot_left,this.p3_bot_right).concat(color2) 
        this.p2_bot_left_to_p1_top_left = this.inbetween_point(this.p2_bot_left,this.p1_top_left).concat(color2) 
        this.p2_bot_left_to_p1_bot_left = this.inbetween_point(this.p2_bot_left,this.p1_bot_left).concat(color2) 
        this.p2_bot_left_to_p3_bot_left = this.inbetween_point(this.p2_bot_left,this.p3_bot_left).concat(color2) 

        //PersegiPanjang 2 Top_Left
        this.p2_top_left_to_p2_bot_left = this.inbetween_point(this.p2_top_left,this.p2_bot_left).concat(color2) 
        this.p2_top_left_to_p3_bot_right = this.inbetween_point(this.p2_top_left,this.p3_bot_right).concat(color2) 
        this.p2_top_left_to_p1_top_right = this.inbetween_point(this.p2_top_left,this.p1_top_right).concat(color2) 
        this.p2_top_left_to_p1_bot_right = this.inbetween_point(this.p2_top_left,this.p1_bot_right).concat(color2) 
        this.p2_top_left_to_p3_bot_left = this.inbetween_point(this.p2_top_left,this.p3_bot_left).concat(color2) 
        }
        //PersegiPanjang 3 Offseted
        {
        //PersegiPanjang 3 Top_Right
        this.p3_top_right_to_p3_bot_right = this.inbetween_point(this.p3_top_right,this.p3_bot_right).concat(color3) 
        this.p3_top_right_to_p1_top_right = this.inbetween_point(this.p3_top_right,this.p1_top_right).concat(color3) 
        this.p3_top_right_to_p2_top_right = this.inbetween_point(this.p3_top_right,this.p2_top_right).concat(color3) 
        this.p3_top_right_to_p2_bot_right = this.inbetween_point(this.p3_top_right,this.p2_bot_right).concat(color3) 
        this.p3_top_right_to_p1_top_left = this.inbetween_point(this.p3_top_right,this.p1_top_left).concat(color3) 

        //PersegiPanjang 3 Bot_Right
        this.p3_bot_right_to_p3_top_right = this.inbetween_point(this.p3_bot_right,this.p3_top_right).concat(color3) 
        this.p3_bot_right_to_p1_top_right = this.inbetween_point(this.p3_bot_right,this.p1_top_right).concat(color3)
        this.p3_bot_right_to_p2_top_left = this.inbetween_point(this.p3_bot_right,this.p2_top_left).concat(color3) 
        this.p3_bot_right_to_p2_bot_left = this.inbetween_point(this.p3_bot_right,this.p2_bot_left).concat(color3) 
        this.p3_bot_right_to_p1_top_left = this.inbetween_point(this.p3_bot_right,this.p1_top_left).concat(color3) 
        
        //PersegiPanjang 3 Bot_Left
        this.p3_bot_left_to_p3_top_left = this.inbetween_point(this.p3_bot_left,this.p3_top_left).concat(color3) 
        this.p3_bot_left_to_p1_bot_right = this.inbetween_point(this.p3_bot_left,this.p1_bot_right).concat(color3) 
        this.p3_bot_left_to_p2_top_left = this.inbetween_point(this.p3_bot_left,this.p2_top_left).concat(color3) 
        this.p3_bot_left_to_p2_bot_left = this.inbetween_point(this.p3_bot_left,this.p2_bot_left).concat(color3) 
        this.p3_bot_left_to_p1_bot_left = this.inbetween_point(this.p3_bot_left,this.p1_bot_left).concat(color3) 

        //PersegiPanjang 3 Top_Left
        this.p3_top_left_to_p3_bot_left = this.inbetween_point(this.p3_top_left,this.p3_bot_left).concat(color3) 
        this.p3_top_left_to_p1_bot_right = this.inbetween_point(this.p3_top_left,this.p1_bot_right).concat(color3) 
        this.p3_top_left_to_p2_top_right = this.inbetween_point(this.p3_top_left,this.p2_top_right).concat(color3) 
        this.p3_top_left_to_p2_bot_right = this.inbetween_point(this.p3_top_left,this.p2_bot_right).concat(color3) 
        this.p3_top_left_to_p1_bot_left = this.inbetween_point(this.p3_top_left,this.p1_bot_left).concat(color3) 
        }
    }
}  

    inbetween_point(originpoint,targetpoint){
        let newpoint = [0,0,0]
        newpoint[0] = originpoint[0] + (targetpoint[0] - originpoint[0]*2)* this.offsetratio
        newpoint[1] = originpoint[1] + (targetpoint[1] - originpoint[1]*2)* this.offsetratio
        newpoint[2] = originpoint[2] + (targetpoint[2] - originpoint[2]*2)* this.offsetratio
        return newpoint
    }

    pushTrianglePrism(vertex_arr){
        this.batang.push([
            vertex_arr[0],
            vertex_arr[1],
            vertex_arr[2],
            vertex_arr[5],
            vertex_arr[0],
            vertex_arr[3],
            vertex_arr[1],
            vertex_arr[4],
            vertex_arr[5],
            vertex_arr[3]
        ])
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
                vertices.push(batang[i][0], batang[i][1], batang[i][2], batang[i][3], batang[i][4], batang[i][5],batang[i][6]);
            }
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, batang.length);
        }
    }

    // changeShadder(value){
    //     console.log(value)
    //     this.isUsingShadder = value;
    //     if(this.isUsingShadder){
    //        for(let i of this.middleColoredVertices){
    //             i[3] = this.middleColor;
    //        }
    //        for(let i of this.innerColoredVertices){
    //             i[3] = this.innerColor;
    //        }
    //     }
    //     else{
    //         for(let i of this.middleColoredVertices){
    //             i[3] = this.outerColor;
    //         }
    //         for(let i of this.innerColoredVertices){
    //             i[3] = this.outerColor;
    //         }
    //     }
    // }

    toString(){
        if(this.batang == null){
            this.createFrames();
        }
        return {type: "SSDodecahedron", vertices: this.batang}
    }
}