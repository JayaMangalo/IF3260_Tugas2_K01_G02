class Tesseract {
  constructor(outerSquare, innerSquare) {
    this.outerSquare = outerSquare;
    this.innerSquare = innerSquare;
    this.innerSquareUpperColor = innerSquare.outerColor;
    this.innerSquareLowerColor = innerSquare.middleColor;
    this.outerColor = outerSquare.middleColor;
    this.isUsingShadder = this.outerSquare.isUsingShadder;
  }
}

class NormalTesseract extends Tesseract {
  constructor(outerSquare, innerSquare) {
    super(outerSquare, innerSquare);
  }

  createBatangMiringKananAtasDepan() {
    return [
      this.outerSquare.miring_kanan_atas_depan_bagian_kanan_atas,
      this.innerSquare.miring_kanan_atas_depan_bagian_kanan_atas,
      this.outerSquare.miring_kanan_atas_depan_bagian_kanan_bawah,
      this.innerSquare.miring_kanan_atas_depan_bagian_kanan_bawah,
      this.outerSquare.miring_kanan_atas_depan_bagian_kiri_bawah,
      this.innerSquare.miring_kanan_atas_depan_bagian_kiri_bawah,
      this.outerSquare.miring_kanan_atas_depan_bagian_kiri_atas,
      this.innerSquare.miring_kanan_atas_depan_bagian_kiri_atas,
      this.outerSquare.miring_kanan_atas_depan_bagian_kanan_atas,
      this.innerSquare.miring_kanan_atas_depan_bagian_kanan_atas,
    ];
  }

  createBatangMiringKiriAtasDepan() {
    return [
      this.outerSquare.miring_kiri_atas_depan_bagian_kanan_atas,
      this.innerSquare.miring_kiri_atas_depan_bagian_kanan_atas,
      this.outerSquare.miring_kiri_atas_depan_bagian_kanan_bawah,
      this.innerSquare.miring_kiri_atas_depan_bagian_kanan_bawah,
      this.outerSquare.miring_kiri_atas_depan_bagian_kiri_bawah,
      this.innerSquare.miring_kiri_atas_depan_bagian_kiri_bawah,
      this.outerSquare.miring_kiri_atas_depan_bagian_kiri_atas,
      this.innerSquare.miring_kiri_atas_depan_bagian_kiri_atas,
      this.outerSquare.miring_kiri_atas_depan_bagian_kanan_atas,
      this.innerSquare.miring_kiri_atas_depan_bagian_kanan_atas,
    ];
  }

  createBatangMiringKananAtasBelakang() {
    return [
      this.outerSquare.miring_kanan_atas_belakang_bagian_kanan_atas,
      this.innerSquare.miring_kanan_atas_belakang_bagian_kanan_atas,
      this.outerSquare.miring_kanan_atas_belakang_bagian_kanan_bawah,
      this.innerSquare.miring_kanan_atas_belakang_bagian_kanan_bawah,
      this.outerSquare.miring_kanan_atas_belakang_bagian_kiri_bawah,
      this.innerSquare.miring_kanan_atas_belakang_bagian_kiri_bawah,
      this.outerSquare.miring_kanan_atas_belakang_bagian_kiri_atas,
      this.innerSquare.miring_kanan_atas_belakang_bagian_kiri_atas,
      this.outerSquare.miring_kanan_atas_belakang_bagian_kanan_atas,
      this.innerSquare.miring_kanan_atas_belakang_bagian_kanan_atas,
    ];
  }

  createBatangMiringKiriAtasBelakang() {
    return [
      this.outerSquare.miring_kiri_atas_belakang_bagian_kanan_atas,
      this.innerSquare.miring_kiri_atas_belakang_bagian_kanan_atas,
      this.outerSquare.miring_kiri_atas_belakang_bagian_kanan_bawah,
      this.innerSquare.miring_kiri_atas_belakang_bagian_kanan_bawah,
      this.outerSquare.miring_kiri_atas_belakang_bagian_kiri_bawah,
      this.innerSquare.miring_kiri_atas_belakang_bagian_kiri_bawah,
      this.outerSquare.miring_kiri_atas_belakang_bagian_kiri_atas,
      this.innerSquare.miring_kiri_atas_belakang_bagian_kiri_atas,
      this.outerSquare.miring_kiri_atas_belakang_bagian_kanan_atas,
      this.innerSquare.miring_kiri_atas_belakang_bagian_kanan_atas,
    ];
  }

  createBatangMiringKananBawahDepan() {
    return [
      this.outerSquare.miring_kanan_bawah_depan_bagian_kanan_atas,
      this.innerSquare.miring_kanan_bawah_depan_bagian_kanan_atas,
      this.outerSquare.miring_kanan_bawah_depan_bagian_kanan_bawah,
      this.innerSquare.miring_kanan_bawah_depan_bagian_kanan_bawah,
      this.outerSquare.miring_kanan_bawah_depan_bagian_kiri_bawah,
      this.innerSquare.miring_kanan_bawah_depan_bagian_kiri_bawah,
      this.outerSquare.miring_kanan_bawah_depan_bagian_kiri_atas,
      this.innerSquare.miring_kanan_bawah_depan_bagian_kiri_atas,
      this.outerSquare.miring_kanan_bawah_depan_bagian_kanan_atas,
      this.innerSquare.miring_kanan_bawah_depan_bagian_kanan_atas,
    ];
  }

  createBatangMiringKiriBawahDepan() {
    return [
      this.outerSquare.miring_kiri_bawah_depan_bagian_kanan_atas,
      this.innerSquare.miring_kiri_bawah_depan_bagian_kanan_atas,
      this.outerSquare.miring_kiri_bawah_depan_bagian_kanan_bawah,
      this.innerSquare.miring_kiri_bawah_depan_bagian_kanan_bawah,
      this.outerSquare.miring_kiri_bawah_depan_bagian_kiri_bawah,
      this.innerSquare.miring_kiri_bawah_depan_bagian_kiri_bawah,
      this.outerSquare.miring_kiri_bawah_depan_bagian_kiri_atas,
      this.innerSquare.miring_kiri_bawah_depan_bagian_kiri_atas,
      this.outerSquare.miring_kiri_bawah_depan_bagian_kanan_atas,
      this.innerSquare.miring_kiri_bawah_depan_bagian_kanan_atas,
    ];
  }

  createBatangMiringKananBawahBelakang() {
    return [
      this.outerSquare.miring_kanan_bawah_belakang_bagian_kanan_atas,
      this.innerSquare.miring_kanan_bawah_belakang_bagian_kanan_atas,
      this.outerSquare.miring_kanan_bawah_belakang_bagian_kanan_bawah,
      this.innerSquare.miring_kanan_bawah_belakang_bagian_kanan_bawah,
      this.outerSquare.miring_kanan_bawah_belakang_bagian_kiri_bawah,
      this.innerSquare.miring_kanan_bawah_belakang_bagian_kiri_bawah,
      this.outerSquare.miring_kanan_bawah_belakang_bagian_kiri_atas,
      this.innerSquare.miring_kanan_bawah_belakang_bagian_kiri_atas,
      this.outerSquare.miring_kanan_bawah_belakang_bagian_kanan_atas,
      this.innerSquare.miring_kanan_bawah_belakang_bagian_kanan_atas,
    ];
  }

  createBatangMiringKiriBawahBelakang() {
    return [
      this.outerSquare.miring_kiri_bawah_belakang_bagian_kanan_atas,
      this.innerSquare.miring_kiri_bawah_belakang_bagian_kanan_atas,
      this.outerSquare.miring_kiri_bawah_belakang_bagian_kanan_bawah,
      this.innerSquare.miring_kiri_bawah_belakang_bagian_kanan_bawah,
      this.outerSquare.miring_kiri_bawah_belakang_bagian_kiri_bawah,
      this.innerSquare.miring_kiri_bawah_belakang_bagian_kiri_bawah,
      this.outerSquare.miring_kiri_bawah_belakang_bagian_kiri_atas,
      this.innerSquare.miring_kiri_bawah_belakang_bagian_kiri_atas,
      this.outerSquare.miring_kiri_bawah_belakang_bagian_kanan_atas,
      this.innerSquare.miring_kiri_bawah_belakang_bagian_kanan_atas,
    ];
  }

  createTesseract() {
    this.batang = [
      this.createBatangMiringKananAtasDepan(),
      this.createBatangMiringKiriAtasDepan(),
      this.createBatangMiringKananAtasBelakang(),
      this.createBatangMiringKiriAtasBelakang(),
      this.createBatangMiringKananBawahDepan(),
      this.createBatangMiringKiriBawahDepan(),
      this.createBatangMiringKananBawahBelakang(),
      this.createBatangMiringKiriBawahBelakang(),
    ];
  }

  draw(batang = null, isDrawOuterSquare = true, isDrawInnerSquare = true) {
    if (this.batang == null) {
      this.createTesseract();
    }
    if (isDrawOuterSquare) {
      this.outerSquare.draw();
    }
    if (isDrawInnerSquare) {
      this.innerSquare.draw();
    }
    for (let batang of this.batang) {
      let vertices = [];
      if (this.isUsingShadder) {
        for (let i = 0; i < batang.length; i++) {
          if (i % 2 == 0) {
            vertices.push(
              batang[i][0],
              batang[i][1],
              batang[i][2],
              this.outerColor[0],
              this.outerColor[1],
              this.outerColor[2],
              this.outerColor[3]
            );
          } else {
            if (i == 3 || i == 5) {
              vertices.push(
                batang[i][0],
                batang[i][1],
                batang[i][2],
                this.innerSquareLowerColor[0],
                this.innerSquareLowerColor[1],
                this.innerSquareLowerColor[2],
                this.innerSquareLowerColor[3]
              );
            } else {
              vertices.push(
                batang[i][0],
                batang[i][1],
                batang[i][2],
                this.innerSquareUpperColor[0],
                this.innerSquareUpperColor[1],
                this.innerSquareUpperColor[2],
                this.innerSquareUpperColor[3]
              );
            }
          }
        }
      } else {
        for (let i = 0; i < batang.length; i++) {
          if (i % 2 == 0) {
            vertices.push(
              batang[i][0],
              batang[i][1],
              batang[i][2],
              this.outerSquare.color[0],
              this.outerSquare.color[1],
              this.outerSquare.color[2],
              this.outerSquare.color[3]
            );
          } else {
            vertices.push(
              batang[i][0],
              batang[i][1],
              batang[i][2],
              this.innerSquare.color[0],
              this.innerSquare.color[1],
              this.innerSquare.color[2],
              this.innerSquare.color[3]
            );
          }
        }
      }

      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(vertices),
        gl.STATIC_DRAW
      );
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, batang.length);
    }
  }

  changeShadder(value) {
    this.isUsingShadder = value;
    this.outerSquare.changeShadder(value);
    this.innerSquare.changeShadder(value);
  }

  toString() {
    if (this.batang == null) {
      this.createTesseract();
    }
    return {
      type: "Tesseract",
      outerSquare: this.outerSquare.toString(),
      innerSquare: this.innerSquare.toString(),
      vertices: this.batang,
    };
  }
}

// class SpinningTesseract extends Tesseract{
//     constructor(outerSquare, innerSquare, color){
//         super(outerSquare, innerSquare, color);
//     }

//     createBatangKananDepanAtas_To_KananBelakangAtas(){
//         return[
//             this.outerSquare.permukaan_atas_dalam_kanan_depan,
//             this.innerSquare.permukaan_atas_dalam_kanan_belakang,
//             this.outerSquare.permukaan_kanan_dalam_atas_depan,
//             this.innerSquare.permukaan_kanan_dalam_atas_belakang,
//             this.outerSquare.inner_depan_kanan_atas,
//             this.innerSquare.inner_belakang_kanan_atas,
//             this.outerSquare.permukaan_depan_dalam_kanan_atas,
//             this.innerSquare.permukaan_belakang_dalam_kanan_atas,

//         ]
//     }

//     createBatangKananBelakangAtas_To_KiriBelakangAtas(){
//         return[
//             this.outerSquare.permukaan_atas_dalam_kanan_belakang,
//             this.innerSquare.permukaan_atas_dalam_kiri_belakang,
//             this.outerSquare.permukaan_kanan_dalam_atas_belakang,
//             this.innerSquare.permukaan_kiri_dalam_atas_belakang,
//             this.outerSquare.inner_belakang_kanan_atas,
//             this.innerSquare.inner_belakang_kiri_atas,
//             this.outerSquare.permukaan_belakang_dalam_kanan_atas,
//             this.innerSquare.permukaan_belakang_dalam_kiri_atas,
//         ]
//     }

//     createBatangKiriBelakangAtas_To_KiriDepanAtas(){
//         return[
//             this.outerSquare.permukaan_atas_dalam_kiri_belakang,
//             this.innerSquare.permukaan_atas_dalam_kiri_depan,
//             this.outerSquare.permukaan_kiri_dalam_atas_belakang,
//             this.innerSquare.permukaan_kiri_dalam_atas_depan,
//             this.outerSquare.inner_belakang_kiri_atas,
//             this.innerSquare.inner_depan_kiri_atas,
//             this.outerSquare.permukaan_belakang_dalam_kiri_atas,
//             this.innerSquare.permukaan_depan_dalam_kiri_atas,
//         ]
//     }

//     createBatangKiriDepanAtas_To_KananDepanAtas(){
//         return[
//             this.outerSquare.permukaan_atas_dalam_kiri_depan,
//             this.innerSquare.permukaan_atas_dalam_kanan_depan,
//             this.outerSquare.permukaan_kiri_dalam_atas_depan,
//             this.innerSquare.permukaan_kanan_dalam_atas_depan,
//             this.outerSquare.inner_depan_kiri_atas,
//             this.innerSquare.inner_depan_kanan_atas,
//             this.outerSquare.permukaan_depan_dalam_kiri_atas,
//             this.innerSquare.permukaan_depan_dalam_kanan_atas,
//         ]
//     }

//     createBatangKananBelakangBawah_To_KananDepanBawah(){
//         return[
//             this.outerSquare.permukaan_bawah_dalam_kanan_belakang,
//             this.innerSquare.permukaan_bawah_dalam_kanan_depan,
//             this.outerSquare.permukaan_kanan_dalam_bawah_belakang,
//             this.innerSquare.permukaan_kanan_dalam_bawah_depan,
//             this.outerSquare.inner_belakang_kanan_bawah,
//             this.innerSquare.inner_depan_kanan_bawah,
//             this.outerSquare.permukaan_belakang_dalam_kanan_bawah,
//             this.innerSquare.permukaan_depan_dalam_kanan_bawah,
//         ]
//     }

//     createBatangKananDepanBawah_To_KananBelakangBawah(){
//         return[
//             this.outerSquare.permukaan_bawah_dalam_kanan_depan,
//             this.innerSquare.permukaan_bawah_dalam_kiri_depan,
//             this.outerSquare.permukaan_kanan_dalam_bawah_depan,
//             this.innerSquare.permukaan_kiri_dalam_bawah_depan,
//             this.outerSquare.inner_depan_kanan_bawah,
//             this.innerSquare.inner_depan_kiri_bawah,
//             this.outerSquare.permukaan_depan_dalam_kanan_bawah,
//             this.innerSquare.permukaan_depan_dalam_kiri_bawah,
//         ]
//     }

//     createBatangKiriDepanBawah_To_KiriBelakangBawah(){
//         return[
//             this.outerSquare.permukaan_bawah_dalam_kiri_depan,
//             this.innerSquare.permukaan_bawah_dalam_kiri_belakang,
//             this.outerSquare.permukaan_kiri_dalam_bawah_depan,
//             this.innerSquare.permukaan_kiri_dalam_bawah_belakang,
//             this.outerSquare.inner_depan_kiri_bawah,
//             this.innerSquare.inner_belakang_kiri_bawah,
//             this.outerSquare.permukaan_depan_dalam_kiri_bawah,
//             this.innerSquare.permukaan_belakang_dalam_kiri_bawah,
//         ]
//     }

//     createBatangKiriBelakangBawah_To_KananBelakangBawah(){
//         return[
//             this.outerSquare.permukaan_bawah_dalam_kiri_belakang,
//             this.innerSquare.permukaan_bawah_dalam_kanan_belakang,
//             this.outerSquare.permukaan_kiri_dalam_bawah_belakang,
//             this.innerSquare.permukaan_kanan_dalam_bawah_belakang,
//             this.outerSquare.inner_belakang_kiri_bawah,
//             this.innerSquare.inner_belakang_kanan_bawah,
//             this.outerSquare.permukaan_belakang_dalam_kiri_bawah,
//             this.innerSquare.permukaan_belakang_dalam_kanan_bawah,
//         ]
//     }

//     createTesseract(){
//         this.outerSquare.draw();
//         this.innerSquare.draw();
//         this.batang = [
//             this.createBatangKananDepanAtas_To_KananBelakangAtas(),
//             this.createBatangKananBelakangAtas_To_KiriBelakangAtas(),
//             this.createBatangKiriBelakangAtas_To_KiriDepanAtas(),
//             this.createBatangKiriDepanAtas_To_KananDepanAtas(),
//             this.createBatangKananBelakangBawah_To_KananDepanBawah(),
//             this.createBatangKananDepanBawah_To_KananBelakangBawah(),
//             this.createBatangKiriDepanBawah_To_KiriBelakangBawah(),
//             this.createBatangKiriBelakangBawah_To_KananBelakangBawah(),
//         ]
//     }

//     draw(){
//         if(this.batang == null){
//             this.createTesseract();
//         }
//         for(let batang of this.batang){
//             let vertices = [];
//             for (let i = 0; i < batang.length; i++) {
//                 vertices.push(batang[i][0], batang[i][1], batang[i][2], batang[i][3], batang[i][4], batang[i][5], batang[i][6]);
//             }
//             gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
//             gl.drawArrays(gl.TRIANGLE_STRIP, 0, batang.length);
//         }
//     }
// }

// class DoubleTesseract{
//     constructor(Tesseract1, Tesseract2){
//         this.Tesseract1 = Tesseract1;
//         this.Tesseract2 = Tesseract2;
//     }

//     createTesseract(){
//         this.Tesseract1.createTesseract();
//         this.Tesseract2.createTesseract();
//     }

//     draw(){
//         this.createTesseract();
//         this.Tesseract1.draw();
//         this.Tesseract2.draw();
//     }
// }
