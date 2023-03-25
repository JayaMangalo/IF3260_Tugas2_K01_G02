class Icosahedron {
  constructor(radius, offset) {
        // this.isUsingShadder = true;

      let phi_ratio = (1 + Math.sqrt(5)) / 2; //φ
      let prr_outer = phi_ratio * radius; //φ for out

      let one_outer = 1 * radius; //1 for out

      let dist_between_two_points =
        Math.sqrt((phi_ratio - 1) ^ (2 + 1 + phi_ratio) ^ 2) * radius;
      this.offsetratio = offset / dist_between_two_points;

      // let color = [[1,0,0,1],[1,1,0,1],[0,0.5,0.5,1]]
      let color1 = [1, 0.3, 0.3, 1];
      let color2 = [1, 0.3, 0.3, 1];
      let color3 = [1, 0.3, 0.3, 1];
      //PersegiPanjang 1 Outer (±phi, ±1, 0)
      this.p1_tr = [prr_outer, one_outer, 0].concat(color1);
      this.p1_br = [prr_outer, -one_outer, 0].concat(color1);
      this.p1_bl = [-prr_outer, -one_outer, 0].concat(color1);
      this.p1_tl = [-prr_outer, one_outer, 0].concat(color1);

      //PersegiPanjang 2 Outer (±1, 0, ±phi)
      this.p2_tr = [one_outer, 0, prr_outer].concat(color2);
      this.p2_br = [-one_outer, 0, prr_outer].concat(color2);
      this.p2_bl = [-one_outer, 0, -prr_outer].concat(color2);
      this.p2_tl = [one_outer, 0, -prr_outer].concat(color2);

      //PersegiPanjang 3 Outer (0, ±phi, ±1)
      this.p3_tr = [0, prr_outer, one_outer].concat(color3);
      this.p3_br = [0, prr_outer, -one_outer].concat(color3);
      this.p3_bl = [0, -prr_outer, -one_outer].concat(color3);
      this.p3_tl = [0, -prr_outer, one_outer].concat(color3);

      //PersegiPanjang 1 Offseted
      {
        //PersegiPanjang 1 Top Right
        this.p1_tr_to_p1_br_and_p2_tr = this.inbetween_point(
          this.p1_tr,
          this.p1_br,
          this.p2_tr
        ).concat(color1);
        this.p1_tr_to_p2_tr_and_p3_tr = this.inbetween_point(
          this.p1_tr,
          this.p2_tr,
          this.p3_tr
        ).concat(color1);
        this.p1_tr_to_p3_tr_and_p3_br = this.inbetween_point(
          this.p1_tr,
          this.p3_tr,
          this.p3_br
        ).concat(color1);
        this.p1_tr_to_p3_br_and_p2_tl = this.inbetween_point(
          this.p1_tr,
          this.p3_br,
          this.p2_tl
        ).concat(color1);
        this.p1_tr_to_p2_tl_and_p1_br = this.inbetween_point(
          this.p1_tr,
          this.p2_tl,
          this.p1_br
        ).concat(color1);

        //PersegiPanjang 1 Bottom Right
        this.p1_br_to_p1_tr_and_p2_tr = this.inbetween_point(
          this.p1_br,
          this.p1_tr,
          this.p2_tr
        ).concat(color1);
        this.p1_br_to_p2_tr_and_p3_tl = this.inbetween_point(
          this.p1_br,
          this.p2_tr,
          this.p3_tl
        ).concat(color1);
        this.p1_br_to_p3_tl_and_p3_bl = this.inbetween_point(
          this.p1_br,
          this.p3_tl,
          this.p3_bl
        ).concat(color1);
        this.p1_br_to_p3_bl_and_p2_tl = this.inbetween_point(
          this.p1_br,
          this.p3_bl,
          this.p2_tl
        ).concat(color1);
        this.p1_br_to_p2_tl_and_p1_tr = this.inbetween_point(
          this.p1_br,
          this.p2_tl,
          this.p1_tr
        ).concat(color1);

        //PersegiPanjang 1 Bottom Left
        this.p1_bl_to_p1_tl_and_p2_br = this.inbetween_point(
          this.p1_bl,
          this.p1_tl,
          this.p2_br
        ).concat(color1);
        this.p1_bl_to_p2_br_and_p3_tl = this.inbetween_point(
          this.p1_bl,
          this.p2_br,
          this.p3_tl
        ).concat(color1);
        this.p1_bl_to_p3_tl_and_p3_bl = this.inbetween_point(
          this.p1_bl,
          this.p3_tl,
          this.p3_bl
        ).concat(color1);
        this.p1_bl_to_p3_bl_and_p2_bl = this.inbetween_point(
          this.p1_bl,
          this.p3_bl,
          this.p2_bl
        ).concat(color1);
        this.p1_bl_to_p2_bl_and_p1_tl = this.inbetween_point(
          this.p1_bl,
          this.p2_bl,
          this.p1_tl
        ).concat(color1);

        //PersegiPanjang 1 Top Left
        this.p1_tl_to_p1_bl_and_p2_br = this.inbetween_point(
          this.p1_tl,
          this.p1_bl,
          this.p2_br
        ).concat(color1);
        this.p1_tl_to_p2_br_and_p3_tr = this.inbetween_point(
          this.p1_tl,
          this.p2_br,
          this.p3_tr
        ).concat(color1);
        this.p1_tl_to_p3_tr_and_p3_br = this.inbetween_point(
          this.p1_tl,
          this.p3_tr,
          this.p3_br
        ).concat(color1);
        this.p1_tl_to_p3_br_and_p2_bl = this.inbetween_point(
          this.p1_tl,
          this.p3_br,
          this.p2_bl
        ).concat(color1);
        this.p1_tl_to_p2_bl_and_p1_bl = this.inbetween_point(
          this.p1_tl,
          this.p2_bl,
          this.p1_bl
        ).concat(color1);
      }
      //PersegiPanjang 2 Offseted
      {
        //PersegiPanjang 2 Top Right
        this.p2_tr_to_p2_br_and_p3_tr = this.inbetween_point(
          this.p2_tr,
          this.p2_br,
          this.p3_tr
        ).concat(color2);
        this.p2_tr_to_p3_tr_and_p1_tr = this.inbetween_point(
          this.p2_tr,
          this.p3_tr,
          this.p1_tr
        ).concat(color2);
        this.p2_tr_to_p1_tr_and_p1_br = this.inbetween_point(
          this.p2_tr,
          this.p1_tr,
          this.p1_br
        ).concat(color2);
        this.p2_tr_to_p1_br_and_p3_tl = this.inbetween_point(
          this.p2_tr,
          this.p1_br,
          this.p3_tl
        ).concat(color2);
        this.p2_tr_to_p3_tl_and_p2_br = this.inbetween_point(
          this.p2_tr,
          this.p3_tl,
          this.p2_br
        ).concat(color2);

        //PersegiPanjang 2 Bottom Right
        this.p2_br_to_p2_tr_and_p3_tr = this.inbetween_point(
          this.p2_br,
          this.p2_tr,
          this.p3_tr
        ).concat(color2);
        this.p2_br_to_p3_tr_and_p1_tl = this.inbetween_point(
          this.p2_br,
          this.p3_tr,
          this.p1_tl
        ).concat(color2);
        this.p2_br_to_p1_tl_and_p1_bl = this.inbetween_point(
          this.p2_br,
          this.p1_tl,
          this.p1_bl
        ).concat(color2);
        this.p2_br_to_p1_bl_and_p3_tl = this.inbetween_point(
          this.p2_br,
          this.p1_bl,
          this.p3_tl
        ).concat(color2);
        this.p2_br_to_p3_tl_and_p2_tr = this.inbetween_point(
          this.p2_br,
          this.p3_tl,
          this.p2_tr
        ).concat(color2);

        //PersegiPanjang 2 Bottom Left
        this.p2_bl_to_p2_tl_and_p3_br = this.inbetween_point(
          this.p2_bl,
          this.p2_tl,
          this.p3_br
        ).concat(color2);
        this.p2_bl_to_p3_br_and_p1_tl = this.inbetween_point(
          this.p2_bl,
          this.p3_br,
          this.p1_tl
        ).concat(color2);
        this.p2_bl_to_p1_tl_and_p1_bl = this.inbetween_point(
          this.p2_bl,
          this.p1_tl,
          this.p1_bl
        ).concat(color2);
        this.p2_bl_to_p1_bl_and_p3_bl = this.inbetween_point(
          this.p2_bl,
          this.p1_bl,
          this.p3_bl
        ).concat(color2);
        this.p2_bl_to_p3_bl_and_p2_tl = this.inbetween_point(
          this.p2_bl,
          this.p3_bl,
          this.p2_tl
        ).concat(color2);

        //PersegiPanjang 2 Top Left
        this.p2_tl_to_p2_bl_and_p3_br = this.inbetween_point(
          this.p2_tl,
          this.p2_bl,
          this.p3_br
        ).concat(color2);
        this.p2_tl_to_p3_br_and_p1_tr = this.inbetween_point(
          this.p2_tl,
          this.p3_br,
          this.p1_tr
        ).concat(color2);
        this.p2_tl_to_p1_tr_and_p1_br = this.inbetween_point(
          this.p2_tl,
          this.p1_tr,
          this.p1_br
        ).concat(color2);
        this.p2_tl_to_p1_br_and_p3_bl = this.inbetween_point(
          this.p2_tl,
          this.p1_br,
          this.p3_bl
        ).concat(color2);
        this.p2_tl_to_p3_bl_and_p2_bl = this.inbetween_point(
          this.p2_tl,
          this.p3_bl,
          this.p2_bl
        ).concat(color2);
      }
      //PersegiPanjang 3 Offseted
      {
        //PersegiPanjang 3 Top Right
        this.p3_tr_to_p3_br_and_p1_tr = this.inbetween_point(
          this.p3_tr,
          this.p3_br,
          this.p1_tr
        ).concat(color3);
        this.p3_tr_to_p1_tr_and_p2_tr = this.inbetween_point(
          this.p3_tr,
          this.p1_tr,
          this.p2_tr
        ).concat(color3);
        this.p3_tr_to_p2_tr_and_p2_br = this.inbetween_point(
          this.p3_tr,
          this.p2_tr,
          this.p2_br
        ).concat(color3);
        this.p3_tr_to_p2_br_and_p1_tl = this.inbetween_point(
          this.p3_tr,
          this.p2_br,
          this.p1_tl
        ).concat(color3);
        this.p3_tr_to_p1_tl_and_p3_br = this.inbetween_point(
          this.p3_tr,
          this.p1_tl,
          this.p3_br
        ).concat(color3);

        //PersegiPanjang 3 Bottom Right
        this.p3_br_to_p3_tr_and_p1_tr = this.inbetween_point(
          this.p3_br,
          this.p3_tr,
          this.p1_tr
        ).concat(color3);
        this.p3_br_to_p1_tr_and_p2_tl = this.inbetween_point(
          this.p3_br,
          this.p1_tr,
          this.p2_tl
        ).concat(color3);
        this.p3_br_to_p2_tl_and_p2_bl = this.inbetween_point(
          this.p3_br,
          this.p2_tl,
          this.p2_bl
        ).concat(color3);
        this.p3_br_to_p2_bl_and_p1_tl = this.inbetween_point(
          this.p3_br,
          this.p2_bl,
          this.p1_tl
        ).concat(color3);
        this.p3_br_to_p1_tl_and_p3_tr = this.inbetween_point(
          this.p3_br,
          this.p1_tl,
          this.p3_tr
        ).concat(color3);

        //PersegiPanjang 3 Bottom Left
        this.p3_bl_to_p3_tl_and_p1_br = this.inbetween_point(
          this.p3_bl,
          this.p3_tl,
          this.p1_br
        ).concat(color3);
        this.p3_bl_to_p1_br_and_p2_tl = this.inbetween_point(
          this.p3_bl,
          this.p1_br,
          this.p2_tl
        ).concat(color3);
        this.p3_bl_to_p2_tl_and_p2_bl = this.inbetween_point(
          this.p3_bl,
          this.p2_tl,
          this.p2_bl
        ).concat(color3);
        this.p3_bl_to_p2_bl_and_p1_bl = this.inbetween_point(
          this.p3_bl,
          this.p2_bl,
          this.p1_bl
        ).concat(color3);
        this.p3_bl_to_p1_bl_and_p3_tl = this.inbetween_point(
          this.p3_bl,
          this.p1_bl,
          this.p3_tl
        ).concat(color3);

        //PersegiPanjang 3 Top Left
        this.p3_tl_to_p3_bl_and_p1_br = this.inbetween_point(
          this.p3_tl,
          this.p3_bl,
          this.p1_br
        ).concat(color3);
        this.p3_tl_to_p1_br_and_p2_tr = this.inbetween_point(
          this.p3_tl,
          this.p1_br,
          this.p2_tr
        ).concat(color3);
        this.p3_tl_to_p2_tr_and_p2_br = this.inbetween_point(
          this.p3_tl,
          this.p2_tr,
          this.p2_br
        ).concat(color3);
        this.p3_tl_to_p2_br_and_p1_bl = this.inbetween_point(
          this.p3_tl,
          this.p2_br,
          this.p1_bl
        ).concat(color3);
        this.p3_tl_to_p1_bl_and_p3_bl = this.inbetween_point(
          this.p3_tl,
          this.p1_bl,
          this.p3_bl
        ).concat(color3);
      }
  }

  inbetween_point(originpoint, targetpoint1, targetpoint2) {
    let newpoint = [0, 0, 0];
    newpoint[0] =
      originpoint[0] +
      (targetpoint1[0] + targetpoint2[0] - originpoint[0] * 2) *
        this.offsetratio;
    newpoint[1] =
      originpoint[1] +
      (targetpoint1[1] + targetpoint2[1] - originpoint[1] * 2) *
        this.offsetratio;
    newpoint[2] =
      originpoint[2] +
      (targetpoint1[2] + targetpoint2[2] - originpoint[2] * 2) *
        this.offsetratio;
    return newpoint;
  }

  pushTrianglePrism(v_arr) {
    this.batang.push([
      v_arr[0].concat(this.calcNormalVector(v_arr[0],v_arr[2],v_arr[1])), 
      v_arr[1].concat(this.calcNormalVector(v_arr[0],v_arr[2],v_arr[1])),
      v_arr[2].concat(this.calcNormalVector(v_arr[0],v_arr[2],v_arr[1])),

      v_arr[1].concat(this.calcNormalVector(v_arr[1],v_arr[2],v_arr[5])),
      v_arr[2].concat(this.calcNormalVector(v_arr[1],v_arr[2],v_arr[5])),
      v_arr[5].concat(this.calcNormalVector(v_arr[1],v_arr[2],v_arr[5])),

      v_arr[2].concat(this.calcNormalVector(v_arr[2],v_arr[0],v_arr[5])),
      v_arr[5].concat(this.calcNormalVector(v_arr[2],v_arr[0],v_arr[5])),
      v_arr[0].concat(this.calcNormalVector(v_arr[2],v_arr[0],v_arr[5])),

      v_arr[5].concat(this.calcNormalVector(v_arr[5],v_arr[0],v_arr[3])),
      v_arr[0].concat(this.calcNormalVector(v_arr[5],v_arr[0],v_arr[3])),
      v_arr[3].concat(this.calcNormalVector(v_arr[5],v_arr[0],v_arr[3])),

      v_arr[0].concat(this.calcNormalVector(v_arr[0],v_arr[1],v_arr[3])),
      v_arr[3].concat(this.calcNormalVector(v_arr[0],v_arr[1],v_arr[3])),
      v_arr[1].concat(this.calcNormalVector(v_arr[0],v_arr[1],v_arr[3])),//reverse hits

      v_arr[3].concat(this.calcNormalVector(v_arr[3],v_arr[1],v_arr[4])),
      v_arr[1].concat(this.calcNormalVector(v_arr[3],v_arr[1],v_arr[4])),
      v_arr[4].concat(this.calcNormalVector(v_arr[3],v_arr[1],v_arr[4])),//reverse this

      v_arr[1].concat(this.calcNormalVector(v_arr[1],v_arr[5],v_arr[4])),
      v_arr[4].concat(this.calcNormalVector(v_arr[1],v_arr[5],v_arr[4])),
      v_arr[5].concat(this.calcNormalVector(v_arr[1],v_arr[5],v_arr[4])),

      v_arr[4].concat(this.calcNormalVector(v_arr[4],v_arr[5],v_arr[3])),
      v_arr[5].concat(this.calcNormalVector(v_arr[4],v_arr[5],v_arr[3])),
      v_arr[3].concat(this.calcNormalVector(v_arr[4],v_arr[5],v_arr[3])),
    ]);
  }
  crossProduct(vector1, vector2) {
    // Ensure both vectors have 3 components
    if (vector1.length !== 3 || vector2.length !== 3) {
      return [0,0,0]
    }
  
    const x1 = vector1[0];
    const y1 = vector1[1];
    const z1 = vector1[2];
    const x2 = vector2[0];
    const y2 = vector2[1];
    const z2 = vector2[2];
  
    const x3 = y1 * z2 - y2 * z1;
    const y3 = z1 * x2 - z2 * x1;
    const z3 = x1 * y2 - x2 * y1;
  
    return [x3, y3, z3];
  }
  normalize(vector) {
    // Ensure the vector has 3 components
    if (vector.length !== 3) {
      return [0,0,0]
    }
  
    const [x, y, z] = vector;
    const magnitude = Math.sqrt(x * x + y * y + z * z);
  
    return [x / magnitude, y / magnitude, z / magnitude];
  }
  calcNormalVector(v1,v2,v3){
    let v2_minus_v1 = [v2[0]-v1[0],v2[1]-v1[1],v2[2]-v1[2]];
    let v3_minus_v1 = [v3[0]-v1[0],v3[1]-v1[1],v3[2]-v1[2]];
    return this.normalize(this.crossProduct(v2_minus_v1,v3_minus_v1))
  }

  createP1TopRightDiagonals() {
    this.pushTrianglePrism([
      this.p1_tr,
      this.p1_tr_to_p2_tr_and_p3_tr,
      this.p1_tr_to_p1_br_and_p2_tr,

      this.p2_tr,
      this.p2_tr_to_p3_tr_and_p1_tr,
      this.p2_tr_to_p1_tr_and_p1_br,
    ]);
    this.pushTrianglePrism([
      this.p1_tr,
      this.p1_tr_to_p3_tr_and_p3_br,
      this.p1_tr_to_p2_tr_and_p3_tr,

      this.p3_tr,
      this.p3_tr_to_p3_br_and_p1_tr,
      this.p3_tr_to_p1_tr_and_p2_tr,
    ]);
    this.pushTrianglePrism([
      this.p1_tr,
      this.p1_tr_to_p3_br_and_p2_tl,
      this.p1_tr_to_p3_tr_and_p3_br,

      this.p3_br,
      this.p3_br_to_p1_tr_and_p2_tl,
      this.p3_br_to_p3_tr_and_p1_tr,
    ]);

    this.pushTrianglePrism([
      this.p1_tr,
      this.p1_tr_to_p2_tl_and_p1_br,
      this.p1_tr_to_p3_br_and_p2_tl,

      this.p2_tl,
      this.p2_tl_to_p1_tr_and_p1_br,
      this.p2_tl_to_p3_br_and_p1_tr,
    ]);
  }
  createP1BotRightDiagonals() {
    this.pushTrianglePrism([
      this.p1_br,
      this.p1_br_to_p1_tr_and_p2_tr,
      this.p1_br_to_p2_tr_and_p3_tl,

      this.p2_tr,
      this.p2_tr_to_p1_tr_and_p1_br,
      this.p2_tr_to_p1_br_and_p3_tl,
    ]);
    this.pushTrianglePrism([
      this.p1_br,
      this.p1_br_to_p2_tr_and_p3_tl,
      this.p1_br_to_p3_tl_and_p3_bl,

      this.p3_tl,
      this.p3_tl_to_p1_br_and_p2_tr,
      this.p3_tl_to_p3_bl_and_p1_br,
    ]);
    this.pushTrianglePrism([
      this.p1_br,
      this.p1_br_to_p3_tl_and_p3_bl,
      this.p1_br_to_p3_bl_and_p2_tl,

      this.p3_bl,
      this.p3_bl_to_p3_tl_and_p1_br,
      this.p3_bl_to_p1_br_and_p2_tl,
    ]);

    this.pushTrianglePrism([
      this.p1_br,
      this.p1_br_to_p3_bl_and_p2_tl,
      this.p1_br_to_p2_tl_and_p1_tr,

      this.p2_tl,
      this.p2_tl_to_p1_br_and_p3_bl,
      this.p2_tl_to_p1_tr_and_p1_br,
    ]);
  }
  createP1BotLeftDiagonals() {
    this.pushTrianglePrism([
      this.p1_bl,
      this.p1_bl_to_p2_br_and_p3_tl,
      this.p1_bl_to_p1_tl_and_p2_br,

      this.p2_br,
      this.p2_br_to_p1_bl_and_p3_tl,
      this.p2_br_to_p1_tl_and_p1_bl,
    ]);
    this.pushTrianglePrism([
      this.p1_bl,
      this.p1_bl_to_p3_tl_and_p3_bl,
      this.p1_bl_to_p2_br_and_p3_tl,

      this.p3_tl,
      this.p3_tl_to_p1_bl_and_p3_bl,
      this.p3_tl_to_p2_br_and_p1_bl,
    ]);
    this.pushTrianglePrism([
      this.p1_bl,
      this.p1_bl_to_p3_bl_and_p2_bl,
      this.p1_bl_to_p3_tl_and_p3_bl,

      this.p3_bl,
      this.p3_bl_to_p2_bl_and_p1_bl,
      this.p3_bl_to_p1_bl_and_p3_tl,
    ]);

    this.pushTrianglePrism([
      this.p1_bl,
      this.p1_bl_to_p2_bl_and_p1_tl,
      this.p1_bl_to_p3_bl_and_p2_bl,

      this.p2_bl,
      this.p2_bl_to_p1_tl_and_p1_bl,
      this.p2_bl_to_p1_bl_and_p3_bl,
    ]);
  }
  createP1TopLeftDiagonals() {
    this.pushTrianglePrism([
      this.p1_tl,
      this.p1_tl_to_p1_bl_and_p2_br,
      this.p1_tl_to_p2_br_and_p3_tr,

      this.p2_br,
      this.p2_br_to_p1_tl_and_p1_bl,
      this.p2_br_to_p3_tr_and_p1_tl,
    ]);
    this.pushTrianglePrism([
      this.p1_tl,
      this.p1_tl_to_p2_br_and_p3_tr,
      this.p1_tl_to_p3_tr_and_p3_br,

      this.p3_tr,
      this.p3_tr_to_p2_br_and_p1_tl,
      this.p3_tr_to_p1_tl_and_p3_br,
    ]);
    this.pushTrianglePrism([
      this.p1_tl,
      this.p1_tl_to_p3_tr_and_p3_br,
      this.p1_tl_to_p3_br_and_p2_bl,

      this.p3_br,
      this.p3_br_to_p1_tl_and_p3_tr,
      this.p3_br_to_p2_bl_and_p1_tl,
    ]);

    this.pushTrianglePrism([
      this.p1_tl,
      this.p1_tl_to_p3_br_and_p2_bl,
      this.p1_tl_to_p2_bl_and_p1_bl,

      this.p2_bl,
      this.p2_bl_to_p3_br_and_p1_tl,
      this.p2_bl_to_p1_tl_and_p1_bl,
    ]);
  }
  createP2TopRightDiagonals() {
    this.pushTrianglePrism([
      this.p2_tr,
      this.p2_tr_to_p3_tr_and_p1_tr,
      this.p2_tr_to_p2_br_and_p3_tr,

      this.p3_tr,
      this.p3_tr_to_p1_tr_and_p2_tr,
      this.p3_tr_to_p2_tr_and_p2_br,
    ]);
    this.pushTrianglePrism([
      this.p2_tr,
      this.p2_tr_to_p3_tl_and_p2_br,
      this.p2_tr_to_p1_br_and_p3_tl,

      this.p3_tl,
      this.p3_tl_to_p2_tr_and_p2_br,
      this.p3_tl_to_p1_br_and_p2_tr,
    ]);
  }
  createP2BotRightDiagonals() {
    this.pushTrianglePrism([
      this.p2_br,
      this.p2_br_to_p2_tr_and_p3_tr,
      this.p2_br_to_p3_tr_and_p1_tl,

      this.p3_tr,
      this.p3_tr_to_p2_tr_and_p2_br,
      this.p3_tr_to_p2_br_and_p1_tl,
    ]);
    this.pushTrianglePrism([
      this.p2_br,
      this.p2_br_to_p1_bl_and_p3_tl,
      this.p2_br_to_p3_tl_and_p2_tr,

      this.p3_tl,
      this.p3_tl_to_p2_br_and_p1_bl,
      this.p3_tl_to_p2_tr_and_p2_br,
    ]);
  }
  createP2BotLefttDiagonals() {
    this.pushTrianglePrism([
      this.p2_bl,
      this.p2_bl_to_p3_br_and_p1_tl,
      this.p2_bl_to_p2_tl_and_p3_br,

      this.p3_br,
      this.p3_br_to_p2_bl_and_p1_tl,
      this.p3_br_to_p2_tl_and_p2_bl,
    ]);
    this.pushTrianglePrism([
      this.p2_bl,
      this.p2_bl_to_p3_bl_and_p2_tl,
      this.p2_bl_to_p1_bl_and_p3_bl,

      this.p3_bl,
      this.p3_bl_to_p2_tl_and_p2_bl,
      this.p3_bl_to_p2_bl_and_p1_bl,
    ]);
  }
  createP2TopLeftDiagonals() {
    this.pushTrianglePrism([
      this.p2_tl,
      this.p2_tl_to_p2_bl_and_p3_br,
      this.p2_tl_to_p3_br_and_p1_tr,

      this.p3_br,
      this.p3_br_to_p2_tl_and_p2_bl,
      this.p3_br_to_p1_tr_and_p2_tl,
    ]);
    this.pushTrianglePrism([
      this.p2_tl,
      this.p2_tl_to_p1_br_and_p3_bl,
      this.p2_tl_to_p3_bl_and_p2_bl,

      this.p3_bl,
      this.p3_bl_to_p1_br_and_p2_tl,
      this.p3_bl_to_p2_tl_and_p2_bl,
    ]);
  }
  createAllStraightEdges() {
    this.pushTrianglePrism([
      this.p1_tr,
      this.p1_tr_to_p1_br_and_p2_tr,
      this.p1_tr_to_p2_tl_and_p1_br,

      this.p1_br,
      this.p1_br_to_p1_tr_and_p2_tr,
      this.p1_br_to_p2_tl_and_p1_tr,
    ]);

    this.pushTrianglePrism([
      this.p1_tl,
      this.p1_tl_to_p2_bl_and_p1_bl,
      this.p1_tl_to_p1_bl_and_p2_br,

      this.p1_bl,
      this.p1_bl_to_p2_bl_and_p1_tl,
      this.p1_bl_to_p1_tl_and_p2_br,
    ]);

    this.pushTrianglePrism([
      this.p2_tr,
      this.p2_tr_to_p2_br_and_p3_tr,
      this.p2_tr_to_p3_tl_and_p2_br,

      this.p2_br,
      this.p2_br_to_p2_tr_and_p3_tr,
      this.p2_br_to_p3_tl_and_p2_tr,
    ]);

    this.pushTrianglePrism([
      this.p2_tl,
      this.p2_tl_to_p3_bl_and_p2_bl,
      this.p2_tl_to_p2_bl_and_p3_br,

      this.p2_bl,
      this.p2_bl_to_p3_bl_and_p2_tl,
      this.p2_bl_to_p2_tl_and_p3_br,
    ]);

    this.pushTrianglePrism([
      this.p3_tr,
      this.p3_tr_to_p3_br_and_p1_tr,
      this.p3_tr_to_p1_tl_and_p3_br,

      this.p3_br,
      this.p3_br_to_p3_tr_and_p1_tr,
      this.p3_br_to_p1_tl_and_p3_tr,
    ]);

    this.pushTrianglePrism([
      this.p3_tl,
      this.p3_tl_to_p1_bl_and_p3_bl,
      this.p3_tl_to_p3_bl_and_p1_br,

      this.p3_bl,
      this.p3_bl_to_p1_bl_and_p3_tl,
      this.p3_bl_to_p3_tl_and_p1_br,
    ]);
  }
  createFrames() {
    this.batang = [];
    this.createP1TopRightDiagonals();
    this.createP1BotRightDiagonals();
    this.createP1BotLeftDiagonals();
    this.createP1TopLeftDiagonals();

    this.createP2TopRightDiagonals();
    this.createP2BotRightDiagonals();
    this.createP2BotLefttDiagonals();
    this.createP2TopLeftDiagonals();

    this.createAllStraightEdges();
  }
  // draw() {
  //   if (this.batang == null) {
  //     this.createFrames();
  //   }
  //   for (let batang of this.batang) {
  //     let vertices = [];
  //     for (let i = 0; i < batang.length; i++) {
  //       vertices.push(
  //         batang[i][0],
  //         batang[i][1],
  //         batang[i][2],
  //         batang[i][3],
  //         batang[i][4],
  //         batang[i][5],
  //         batang[i][6],
  //         batang[i][7],
  //         batang[i][8],
  //         batang[i][9],
  //       );
  //     }
  //     gl.bufferData(
  //       gl.ARRAY_BUFFER,
  //       new Float32Array(vertices),
  //       gl.STATIC_DRAW
  //     );

  //     gl.drawArrays(gl.TRIANGLES, 0, batang.length);
  //   }
  // }

//   changeShadder(){
//     console.log(this.isUsingShadder)
//     console.log("bruhhahdfuahsdf")
//       this.isUsingShadder = !this.UsingShadder;
//       console.log(this.isUsingShadder)
// }

  toString() {
    if (this.batang == null) {
      this.createFrames();
    }
    return { type: "Icosahedron", vertices: this.batang };
  }
}
