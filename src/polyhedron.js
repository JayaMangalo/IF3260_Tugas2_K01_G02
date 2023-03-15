//Vertex constructor for Icosahedron and SSDodecahedron
class Polyhedron{
    constructor(radius,offset,color){
        this.color = color

        let phi_ratio = (1 + Math.sqrt(5))/2;           //φ 
        let prr_outer = phi_ratio * radius              //φ for out
        
        let one_outer = 1                               //1 for out

        let dist_between_two_points =  Math.sqrt((phi_ratio-1)^2 + 1 + phi_ratio^2)*radius
        this.offsetratio = offset/dist_between_two_points

        //PersegiPanjang 1 Outer (±phi, ±1, 0) 
        this.p1_top_right = [prr_outer,one_outer,0] 
        this.p1_bot_right = [prr_outer,-one_outer,0]
        this.p1_bot_left = [-prr_outer,-one_outer,0]
        this.p1_top_left = [-prr_outer,one_outer,0]

        //PersegiPanjang 2 Outer (±1, 0, ±phi)
        this.p2_top_right = [one_outer,0,prr_outer] 
        this.p2_bot_right = [-one_outer,0,prr_outer]
        this.p2_bot_left = [-one_outer,0,-prr_outer]
        this.p2_top_left = [one_outer,0,-prr_outer]

        //PersegiPanjang 3 Outer (0, ±phi, ±1)
        this.p3_top_right = [0,prr_outer,one_outer] 
        this.p3_bot_right = [0,prr_outer,-one_outer]
        this.p3_bot_left = [0,-prr_outer,-one_outer]
        this.p3_top_left = [0,-prr_outer,one_outer]

        //PersegiPanjang 1 Offseted
        {
        //PersegiPanjang 1 Top_Right
        this.p1_top_right_to_p1_bot_right = this.inbetween_point(this.p1_top_right,this.p1_bot_right) 
        this.p1_top_right_to_p2_top_right = this.inbetween_point(this.p1_top_right,this.p2_top_right) 
        this.p1_top_right_to_p3_top_right = this.inbetween_point(this.p1_top_right,this.p3_top_right) 
        this.p1_top_right_to_p3_bot_right = this.inbetween_point(this.p1_top_right,this.p3_bot_right) 
        this.p1_top_right_to_p2_top_left = this.inbetween_point(this.p1_top_right,this.p2_top_left) 

        //PersegiPanjang 1 Bot_Right
        this.p1_bot_right_to_p1_top_right = this.inbetween_point(this.p1_bot_right,this.p1_top_right) 
        this.p1_bot_right_to_p2_top_right = this.inbetween_point(this.p1_bot_right,this.p2_top_right)
        this.p1_bot_right_to_p3_top_left = this.inbetween_point(this.p1_bot_right,this.p3_top_left) 
        this.p1_bot_right_to_p3_bot_left = this.inbetween_point(this.p1_bot_right,this.p3_bot_left) 
        this.p1_bot_right_to_p2_top_left = this.inbetween_point(this.p1_bot_right,this.p2_top_left) 
        
        //PersegiPanjang 1 Bot_Left
        this.p1_bot_left_to_p1_top_left = this.inbetween_point(this.p1_bot_left,this.p1_top_left) 
        this.p1_bot_left_to_p2_bot_right = this.inbetween_point(this.p1_bot_left,this.p2_bot_right) 
        this.p1_bot_left_to_p3_top_left = this.inbetween_point(this.p1_bot_left,this.p3_top_left) 
        this.p1_bot_left_to_p3_bot_left = this.inbetween_point(this.p1_bot_left,this.p3_bot_left) 
        this.p1_bot_left_to_p2_bot_left = this.inbetween_point(this.p1_bot_left,this.p2_bot_left) 

        //PersegiPanjang 1 Top_Left
        this.p1_top_left_to_p1_bot_left = this.inbetween_point(this.p1_top_left,this.p1_bot_left) 
        this.p1_top_left_to_p2_bot_right = this.inbetween_point(this.p1_top_left,this.p2_bot_right) 
        this.p1_top_left_to_p3_top_right = this.inbetween_point(this.p1_top_left,this.p3_top_right) 
        this.p1_top_left_to_p3_bot_right = this.inbetween_point(this.p1_top_left,this.p3_bot_right) 
        this.p1_top_left_to_p2_bot_left = this.inbetween_point(this.p1_top_left,this.p2_bot_left) 
        }
        //PersegiPanjang 2 Offseted
        {
        //PersegiPanjang 2 Top_Right
        this.p2_top_right_to_p2_bot_right = this.inbetween_point(this.p2_top_right,this.p2_bot_right) 
        this.p2_top_right_to_p3_top_right = this.inbetween_point(this.p2_top_right,this.p3_top_right) 
        this.p2_top_right_to_p1_top_right = this.inbetween_point(this.p2_top_right,this.p1_top_right) 
        this.p2_top_right_to_p1_bot_right = this.inbetween_point(this.p2_top_right,this.p1_bot_right) 
        this.p2_top_right_to_p3_top_left = this.inbetween_point(this.p2_top_right,this.p3_top_left) 

        //PersegiPanjang 2 Bot_Right
        this.p2_bot_right_to_p2_top_right = this.inbetween_point(this.p2_bot_right,this.p2_top_right) 
        this.p2_bot_right_to_p3_top_right = this.inbetween_point(this.p2_bot_right,this.p3_top_right)
        this.p2_bot_right_to_p1_top_left = this.inbetween_point(this.p2_bot_right,this.p1_top_left) 
        this.p2_bot_right_to_p1_bot_left = this.inbetween_point(this.p2_bot_right,this.p1_bot_left) 
        this.p2_bot_right_to_p3_top_left = this.inbetween_point(this.p2_bot_right,this.p3_top_left) 
        
        //PersegiPanjang 2 Bot_Left
        this.p2_bot_left_to_p2_top_left = this.inbetween_point(this.p2_bot_left,this.p2_top_left) 
        this.p2_bot_left_to_p3_bot_right = this.inbetween_point(this.p2_bot_left,this.p3_bot_right) 
        this.p2_bot_left_to_p1_top_left = this.inbetween_point(this.p2_bot_left,this.p1_top_left) 
        this.p2_bot_left_to_p1_bot_left = this.inbetween_point(this.p2_bot_left,this.p1_bot_left) 
        this.p2_bot_left_to_p3_bot_left = this.inbetween_point(this.p2_bot_left,this.p3_bot_left) 

        //PersegiPanjang 2 Top_Left
        this.p2_top_left_to_p2_bot_left = this.inbetween_point(this.p2_top_left,this.p2_bot_left) 
        this.p2_top_left_to_p3_bot_right = this.inbetween_point(this.p2_top_left,this.p3_bot_right) 
        this.p2_top_left_to_p1_top_right = this.inbetween_point(this.p2_top_left,this.p1_top_right) 
        this.p2_top_left_to_p1_bot_right = this.inbetween_point(this.p2_top_left,this.p1_bot_right) 
        this.p2_top_left_to_p3_bot_left = this.inbetween_point(this.p2_top_left,this.p3_bot_left) 
        }
        //PersegiPanjang 3 Offseted
        {
        //PersegiPanjang 3 Top_Right
        this.p3_top_right_to_p3_bot_right = this.inbetween_point(this.p3_top_right,this.p3_bot_right) 
        this.p3_top_right_to_p1_top_right = this.inbetween_point(this.p3_top_right,this.p1_top_right) 
        this.p3_top_right_to_p2_top_right = this.inbetween_point(this.p3_top_right,this.p2_top_right) 
        this.p3_top_right_to_p2_bot_right = this.inbetween_point(this.p3_top_right,this.p2_bot_right) 
        this.p3_top_right_to_p1_top_left = this.inbetween_point(this.p3_top_right,this.p1_top_left) 

        //PersegiPanjang 3 Bot_Right
        this.p3_bot_right_to_p3_top_right = this.inbetween_point(this.p3_bot_right,this.p3_top_right) 
        this.p3_bot_right_to_p1_top_right = this.inbetween_point(this.p3_bot_right,this.p1_top_right)
        this.p3_bot_right_to_p2_top_left = this.inbetween_point(this.p3_bot_right,this.p2_top_left) 
        this.p3_bot_right_to_p2_bot_left = this.inbetween_point(this.p3_bot_right,this.p2_bot_left) 
        this.p3_bot_right_to_p1_top_left = this.inbetween_point(this.p3_bot_right,this.p1_top_left) 
        
        //PersegiPanjang 3 Bot_Left
        this.p3_bot_left_to_p3_top_left = this.inbetween_point(this.p3_bot_left,this.p3_top_left) 
        this.p3_bot_left_to_p1_bot_right = this.inbetween_point(this.p3_bot_left,this.p1_bot_right) 
        this.p3_bot_left_to_p2_top_left = this.inbetween_point(this.p3_bot_left,this.p2_top_left) 
        this.p3_bot_left_to_p2_bot_left = this.inbetween_point(this.p3_bot_left,this.p2_bot_left) 
        this.p3_bot_left_to_p1_bot_left = this.inbetween_point(this.p3_bot_left,this.p1_bot_left) 

        //PersegiPanjang 3 Top_Left
        this.p3_top_left_to_p3_bot_left = this.inbetween_point(this.p3_top_left,this.p3_bot_left) 
        this.p3_top_left_to_p1_bot_right = this.inbetween_point(this.p3_top_left,this.p1_bot_right) 
        this.p3_top_left_to_p2_top_right = this.inbetween_point(this.p3_top_left,this.p2_top_right) 
        this.p3_top_left_to_p2_bot_right = this.inbetween_point(this.p3_top_left,this.p2_bot_right) 
        this.p3_top_left_to_p1_bot_left = this.inbetween_point(this.p3_top_left,this.p1_bot_left) 
        }
    }  
    inbetween_point(originpoint,targetpoint){
        let newpoint = [0,0,0]
        newpoint[0] = originpoint[0] + (targetpoint[0] - originpoint[0])* this.offsetratio
        newpoint[1] = originpoint[1] + (targetpoint[1] - originpoint[1])* this.offsetratio
        newpoint[2] = originpoint[2] + (targetpoint[2] - originpoint[2])* this.offsetratio
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
}