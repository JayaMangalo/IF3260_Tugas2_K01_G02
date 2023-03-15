class HollowSquare{
    constructor(color=[0.0, 0.0, 0.0, 1.0], offsetX=0, offsetY=0, offsetZ=0, scaleX = 0, scaleY=0, scaleZ=0, xLuar=1, yLuar=1, zLuar=1, xDalam=0.75, yDalam=0.75, zDalam=0.75){
        //set Color
        this.color = color

        //set Offset
        xLuar = xLuar + scaleX
        yLuar = yLuar + scaleY
        zLuar = zLuar + scaleZ
        xDalam = xDalam + scaleX
        yDalam = yDalam + scaleY
        zDalam = zDalam + scaleZ

        //Permukaan Atas Luar
        this.permukaan_atas_luar_kanan_depan = [-xLuar + offsetX, yLuar + offsetY, zLuar + offsetZ]
        this.permukaan_atas_luar_kiri_depan = [xLuar + offsetX, yLuar + offsetY, zLuar + offsetZ]
        this.permukaan_atas_luar_kanan_belakang = [-xLuar + offsetX, yLuar + offsetY, -zLuar + offsetZ]
        this.permukaan_atas_luar_kiri_belakang = [xLuar + offsetX, yLuar + offsetY, -zLuar + offsetZ]

        //Permukaan Atas Dalam
        this.permukaan_atas_dalam_kanan_depan = [-xDalam + offsetX, yLuar + offsetY, zDalam + offsetZ]
        this.permukaan_atas_dalam_kiri_depan = [xDalam + offsetX, yLuar + offsetY, zDalam + offsetZ]
        this.permukaan_atas_dalam_kanan_belakang = [-xDalam + offsetX, yLuar + offsetY, -zDalam + offsetZ]
        this.permukaan_atas_dalam_kiri_belakang = [xDalam + offsetX, yLuar + offsetY, -zDalam + offsetZ]

        //Permukaan Bawah Luar
        this.permukaan_bawah_luar_kanan_depan = [-xLuar + offsetX, -yLuar + offsetY, zLuar + offsetZ]
        this.permukaan_bawah_luar_kiri_depan = [xLuar + offsetX, -yLuar + offsetY, zLuar + offsetZ]
        this.permukaan_bawah_luar_kanan_belakang = [-xLuar + offsetX, -yLuar + offsetY, -zLuar + offsetZ]
        this.permukaan_bawah_luar_kiri_belakang = [xLuar + offsetX, -yLuar + offsetY, -zLuar + offsetZ]

        //Permukaan Bawah Dalam
        this.permukaan_bawah_dalam_kanan_depan = [-xDalam + offsetX, -yLuar + offsetY, zDalam + offsetZ]
        this.permukaan_bawah_dalam_kiri_depan = [xDalam + offsetX, -yLuar + offsetY, zDalam + offsetZ]
        this.permukaan_bawah_dalam_kanan_belakang = [-xDalam + offsetX, -yLuar + offsetY, -zDalam + offsetZ]
        this.permukaan_bawah_dalam_kiri_belakang = [xDalam + offsetX, -yLuar + offsetY, -zDalam + offsetZ]

        //Permukaan Depan Luar
        this.permukaan_depan_luar_kanan_atas = this.permukaan_atas_luar_kanan_depan
        this.permukaan_depan_luar_kiri_atas = this.permukaan_atas_luar_kiri_depan
        this.permukaan_depan_luar_kanan_bawah = this.permukaan_bawah_luar_kanan_depan
        this.permukaan_depan_luar_kiri_bawah = this.permukaan_bawah_luar_kiri_depan

        //Permukaan Depan Dalam
        this.permukaan_depan_dalam_kanan_atas = [-xDalam + offsetX, yDalam + offsetY, zLuar + offsetZ]
        this.permukaan_depan_dalam_kiri_atas = [xDalam + offsetX, yDalam + offsetY, zLuar + offsetZ]
        this.permukaan_depan_dalam_kanan_bawah = [-xDalam + offsetX, -yDalam + offsetY, zLuar + offsetZ]
        this.permukaan_depan_dalam_kiri_bawah = [xDalam + offsetX, -yDalam + offsetY, zLuar + offsetZ]

        //Permukaan Belakang Luar
        this.permukaan_belakang_luar_kanan_atas = this.permukaan_atas_luar_kanan_belakang
        this.permukaan_belakang_luar_kiri_atas = this.permukaan_atas_luar_kiri_belakang
        this.permukaan_belakang_luar_kanan_bawah = this.permukaan_bawah_luar_kanan_belakang
        this.permukaan_belakang_luar_kiri_bawah = this.permukaan_bawah_luar_kiri_belakang

        //Permukaan Belakang Dalam
        this.permukaan_belakang_dalam_kanan_atas = [-xDalam + offsetX, yDalam + offsetY, -zLuar + offsetZ]
        this.permukaan_belakang_dalam_kiri_atas = [xDalam + offsetX, yDalam + offsetY, -zLuar + offsetZ]
        this.permukaan_belakang_dalam_kanan_bawah = [-xDalam + offsetX, -yDalam + offsetY, -zLuar + offsetZ]
        this.permukaan_belakang_dalam_kiri_bawah = [xDalam + offsetX, -yDalam + offsetY, -zLuar + offsetZ]

        //Permukaan Kanan Luar
        this.permukaan_kanan_luar_atas_depan = this.permukaan_atas_luar_kanan_depan
        this.permukaan_kanan_luar_atas_belakang = this.permukaan_atas_luar_kanan_belakang
        this.permukaan_kanan_luar_bawah_depan = this.permukaan_bawah_luar_kanan_depan
        this.permukaan_kanan_luar_bawah_belakang = this.permukaan_bawah_luar_kanan_belakang

        //Permukaan Kanan Dalam
        this.permukaan_kanan_dalam_atas_depan = [-xLuar + offsetX, yDalam + offsetY, zDalam + offsetZ]
        this.permukaan_kanan_dalam_atas_belakang = [-xLuar + offsetX, yDalam + offsetY, -zDalam + offsetZ]
        this.permukaan_kanan_dalam_bawah_depan = [-xLuar + offsetX, -yDalam + offsetY, zDalam + offsetZ]
        this.permukaan_kanan_dalam_bawah_belakang = [-xLuar + offsetX, -yDalam + offsetY, -zDalam + offsetZ]

        //Permukaan Kiri Luar
        this.permukaan_kiri_luar_atas_depan = this.permukaan_atas_luar_kiri_depan
        this.permukaan_kiri_luar_atas_belakang = this.permukaan_atas_luar_kiri_belakang
        this.permukaan_kiri_luar_bawah_depan = this.permukaan_bawah_luar_kiri_depan
        this.permukaan_kiri_luar_bawah_belakang = this.permukaan_bawah_luar_kiri_belakang

        //Permukaan Kiri Dalam
        this.permukaan_kiri_dalam_atas_depan = [xLuar + offsetX, yDalam + offsetY, zDalam + offsetZ]
        this.permukaan_kiri_dalam_atas_belakang = [xLuar + offsetX, yDalam + offsetY, -zDalam + offsetZ]
        this.permukaan_kiri_dalam_bawah_depan = [xLuar + offsetX, -yDalam + offsetY, zDalam + offsetZ]
        this.permukaan_kiri_dalam_bawah_belakang = [xLuar + offsetX, -yDalam + offsetY, -zDalam + offsetZ]

        //Inner Atas
        this.inner_atas_kanan_depan = [-xDalam + offsetX, yLuar + offsetY, zDalam + offsetZ]
        this.inner_atas_kiri_depan = [xDalam + offsetX, yLuar + offsetY, zDalam + offsetZ]
        this.inner_atas_kanan_belakang = [-xDalam + offsetX, yLuar + offsetY, -zDalam + offsetZ]
        this.inner_atas_kiri_belakang = [xDalam + offsetX, yLuar + offsetY, -zDalam + offsetZ]

        //Inner Bawah
        this.inner_bawah_kanan_depan = [-xDalam + offsetX, -yLuar + offsetY, zDalam + offsetZ]
        this.inner_bawah_kiri_depan = [xDalam + offsetX, -yLuar + offsetY, zDalam + offsetZ]
        this.inner_bawah_kanan_belakang = [-xDalam + offsetX, -yLuar + offsetY, -zDalam + offsetZ]
        this.inner_bawah_kiri_belakang = [xDalam + offsetX, -yLuar + offsetY, -zDalam + offsetZ]

        //Inner Depan
        this.inner_depan_kanan_atas = this.inner_atas_kanan_depan
        this.inner_depan_kiri_atas = this.inner_atas_kiri_depan
        this.inner_depan_kanan_bawah = this.inner_bawah_kanan_depan
        this.inner_depan_kiri_bawah = this.inner_bawah_kiri_depan

        //Inner Belakang
        this.inner_belakang_kanan_atas = this.inner_atas_kanan_belakang
        this.inner_belakang_kiri_atas = this.inner_atas_kiri_belakang
        this.inner_belakang_kanan_bawah = this.inner_bawah_kanan_belakang
        this.inner_belakang_kiri_bawah = this.inner_bawah_kiri_belakang

        //Inner Kanan
        this.inner_kanan_atas_depan = this.inner_atas_kanan_depan
        this.inner_kanan_atas_belakang = this.inner_atas_kanan_belakang
        this.inner_kanan_bawah_depan = this.inner_bawah_kanan_depan
        this.inner_kanan_bawah_belakang = this.inner_bawah_kanan_belakang

        //Inner Kiri
        this.inner_kiri_atas_depan = this.inner_atas_kiri_depan
        this.inner_kiri_atas_belakang = this.inner_atas_kiri_belakang
        this.inner_kiri_bawah_depan = this.inner_bawah_kiri_depan
        this.inner_kiri_bawah_belakang = this.inner_bawah_kiri_belakang
    }

    createBatangDepanAtas() {
        return[
            this.permukaan_atas_luar_kanan_depan,
            this.permukaan_atas_luar_kiri_depan,
            this.permukaan_atas_dalam_kanan_depan,
            this.permukaan_atas_dalam_kiri_depan,
            this.inner_kanan_atas_depan,
            this.inner_kiri_atas_depan,
            this.permukaan_depan_dalam_kanan_atas,
            this.permukaan_depan_dalam_kiri_atas,
            this.permukaan_depan_luar_kanan_atas,
            this.permukaan_depan_luar_kiri_atas,
        ]
    }

    createBatangKiriatas() {
        return[
            this.permukaan_atas_luar_kiri_depan,
            this.permukaan_atas_luar_kiri_belakang,
            this.permukaan_atas_dalam_kiri_depan,
            this.permukaan_atas_dalam_kiri_belakang,
            this.inner_kiri_atas_depan,
            this.inner_kiri_atas_belakang,
            this.permukaan_kiri_dalam_atas_depan,
            this.permukaan_kiri_dalam_atas_belakang,
            this.permukaan_kiri_luar_atas_depan,
            this.permukaan_kiri_luar_atas_belakang,
        ]
    }

    createBatangKananAtas() {
        return[
            this.permukaan_atas_luar_kanan_depan,
            this.permukaan_atas_luar_kanan_belakang,
            this.permukaan_atas_dalam_kanan_depan,
            this.permukaan_atas_dalam_kanan_belakang,
            this.inner_kanan_atas_depan,
            this.inner_kanan_atas_belakang,
            this.permukaan_kanan_dalam_atas_depan,
            this.permukaan_kanan_dalam_atas_belakang,
            this.permukaan_kanan_luar_atas_depan,
            this.permukaan_kanan_luar_atas_belakang,
        ]
    }

    createBatangBelakangAtas() {
        return[
            this.permukaan_atas_luar_kanan_belakang,
            this.permukaan_atas_luar_kiri_belakang,
            this.permukaan_atas_dalam_kanan_belakang,
            this.permukaan_atas_dalam_kiri_belakang,
            this.inner_kanan_atas_belakang,
            this.inner_kiri_atas_belakang,
            this.permukaan_belakang_dalam_kanan_atas,
            this.permukaan_belakang_dalam_kiri_atas,
            this.permukaan_belakang_luar_kanan_atas,
            this.permukaan_belakang_luar_kiri_atas,
        ]
    }

    cretaeBatangDepanKiri(){
        return[
            this.permukaan_depan_luar_kiri_atas,
            this.permukaan_depan_luar_kiri_bawah,
            this.permukaan_depan_dalam_kiri_atas,
            this.permukaan_depan_dalam_kiri_bawah,
            this.inner_depan_kiri_atas,
            this.inner_depan_kiri_bawah,
            this.permukaan_kiri_dalam_atas_depan,
            this.permukaan_kiri_dalam_bawah_depan,
            this.permukaan_kiri_luar_atas_depan,
            this.permukaan_kiri_luar_bawah_depan,
        ]
    }

    createBatangDepanKanan(){
        return[
            this.permukaan_depan_luar_kanan_atas,
            this.permukaan_depan_luar_kanan_bawah,
            this.permukaan_depan_dalam_kanan_atas,
            this.permukaan_depan_dalam_kanan_bawah,
            this.inner_depan_kanan_atas,
            this.inner_depan_kanan_bawah,
            this.permukaan_kanan_dalam_atas_depan,
            this.permukaan_kanan_dalam_bawah_depan,
            this.permukaan_kanan_luar_atas_depan,
            this.permukaan_kanan_luar_bawah_depan,
        ]
    }

    createBatangBelakangKiri(){
        return[
            this.permukaan_belakang_luar_kiri_atas,
            this.permukaan_belakang_luar_kiri_bawah,
            this.permukaan_belakang_dalam_kiri_atas,
            this.permukaan_belakang_dalam_kiri_bawah,
            this.inner_belakang_kiri_atas,
            this.inner_belakang_kiri_bawah,
            this.permukaan_kiri_dalam_atas_belakang,
            this.permukaan_kiri_dalam_bawah_belakang,
            this.permukaan_kiri_luar_atas_belakang,
            this.permukaan_kiri_luar_bawah_belakang,
        ]
    }

    createBatangBelakangKanan(){
        return[
            this.permukaan_belakang_luar_kanan_atas,
            this.permukaan_belakang_luar_kanan_bawah,
            this.permukaan_belakang_dalam_kanan_atas,
            this.permukaan_belakang_dalam_kanan_bawah,
            this.inner_belakang_kanan_atas,
            this.inner_belakang_kanan_bawah,
            this.permukaan_kanan_dalam_atas_belakang,
            this.permukaan_kanan_dalam_bawah_belakang,
            this.permukaan_kanan_luar_atas_belakang,
            this.permukaan_kanan_luar_bawah_belakang,
        ]
    }

    createBatangBawahDepan(){
        return[
            this.permukaan_depan_luar_kanan_bawah,
            this.permukaan_depan_luar_kiri_bawah,
            this.permukaan_depan_dalam_kanan_bawah,
            this.permukaan_depan_dalam_kiri_bawah,
            this.inner_depan_kanan_bawah,
            this.inner_depan_kiri_bawah,
            this.permukaan_bawah_dalam_kanan_depan,
            this.permukaan_bawah_dalam_kiri_depan,
            this.permukaan_bawah_luar_kanan_depan,
            this.permukaan_bawah_luar_kiri_depan,
        ]
    }

    createBatangBawahBelakang(){
        return[
            this.permukaan_belakang_luar_kanan_bawah,
            this.permukaan_belakang_luar_kiri_bawah,
            this.permukaan_belakang_dalam_kanan_bawah,
            this.permukaan_belakang_dalam_kiri_bawah,
            this.inner_belakang_kanan_bawah,
            this.inner_belakang_kiri_bawah,
            this.permukaan_bawah_dalam_kanan_belakang,
            this.permukaan_bawah_dalam_kiri_belakang,
            this.permukaan_bawah_luar_kanan_belakang,
            this.permukaan_bawah_luar_kiri_belakang,
        ]
    }

    createBatangBawahKiri(){
        return[
            this.permukaan_bawah_luar_kiri_depan,
            this.permukaan_bawah_luar_kiri_belakang,
            this.permukaan_bawah_dalam_kiri_depan,
            this.permukaan_bawah_dalam_kiri_belakang,
            this.inner_bawah_kiri_depan,
            this.inner_bawah_kiri_belakang,
            this.permukaan_kiri_dalam_bawah_depan,
            this.permukaan_kiri_dalam_bawah_belakang,
            this.permukaan_kiri_luar_bawah_depan,
            this.permukaan_kiri_luar_bawah_belakang,
        ]
    }

    createBatangBawahKanan(){
        return[
            this.permukaan_bawah_luar_kanan_depan,
            this.permukaan_bawah_luar_kanan_belakang,
            this.permukaan_bawah_dalam_kanan_depan,
            this.permukaan_bawah_dalam_kanan_belakang,
            this.inner_bawah_kanan_depan,
            this.inner_bawah_kanan_belakang,
            this.permukaan_kanan_dalam_bawah_depan,
            this.permukaan_kanan_dalam_bawah_belakang,
            this.permukaan_kanan_luar_bawah_depan,
            this.permukaan_kanan_luar_bawah_belakang,
        ]
    }

    createFullSquare(){
        this.batang = [
            this.createBatangDepanAtas(),
            this.createBatangKiriatas(),
            // this.createBatangKananAtas(),
            // this.createBatangBelakangAtas(),
            // this.cretaeBatangDepanKiri(),
            // this.createBatangDepanKanan(),
            // this.createBatangBelakangKiri(),
            // this.createBatangBelakangKanan(),
            // this.createBatangBawahDepan(),
            // this.createBatangBawahBelakang(),
            // this.createBatangBawahKiri(),
            // this.createBatangBawahKanan(),
        ]
    }

    draw(){
        if(this.batang == null){
            this.createFullSquare();
        }
        console.log(this.batang)
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