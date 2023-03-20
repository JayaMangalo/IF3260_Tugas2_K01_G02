class HollowSquare{
    constructor(color=[0.0, 0.0, 0.0, 1.0], thickness=0.5, offsetX=0, offsetY=0, offsetZ=0, scaleX = 0, scaleY=0, scaleZ=0, xLuarInput=1, yLuarInput=1, zLuarInput=1, isUsingShadder = true){
        //set thickness
        this.thickness = thickness

        //set Color
        this.color = color
        this.isUsingShadder = isUsingShadder
        if(this.isUsingShadder){
            this.outerColor = color
            this.middleColor = [color[0]*0.7, color[1]*0.7, color[2]*0.7, color[3]]
            this.innerColor = [color[0]*0.5, color[1]*0.5, color[2]*0.5, color[3]]    
        }
        else{
            this.outerColor = color
            this.middleColor = color
            this.innerColor = color
        }        
       
        //set Offset
        let xLuar = xLuarInput + scaleX
        let yLuar = yLuarInput + scaleY
        let zLuar = zLuarInput + scaleZ  
        let xDalam = xLuar - thickness
        let yDalam = yLuar - thickness
        let zDalam = zLuar - thickness

        //Permukaan Atas Luar
        this.permukaan_atas_luar_kanan_depan = [-xLuar + offsetX, yLuar + offsetY, zLuar + offsetZ, this.outerColor]
        this.permukaan_atas_luar_kiri_depan = [xLuar + offsetX, yLuar + offsetY, zLuar + offsetZ, this.outerColor]
        this.permukaan_atas_luar_kanan_belakang = [-xLuar + offsetX, yLuar + offsetY, -zLuar + offsetZ, this.outerColor]
        this.permukaan_atas_luar_kiri_belakang = [xLuar + offsetX, yLuar + offsetY, -zLuar + offsetZ, this.outerColor]

        //Permukaan Atas Dalam
        this.permukaan_atas_dalam_kanan_depan = [-xDalam + offsetX, yLuar + offsetY, zDalam + offsetZ, this.middleColor]
        this.permukaan_atas_dalam_kiri_depan = [xDalam + offsetX, yLuar + offsetY, zDalam + offsetZ, this.middleColor]
        this.permukaan_atas_dalam_kanan_belakang = [-xDalam + offsetX, yLuar + offsetY, -zDalam + offsetZ, this.middleColor]
        this.permukaan_atas_dalam_kiri_belakang = [xDalam + offsetX, yLuar + offsetY, -zDalam + offsetZ, this.middleColor]

        //Permukaan Bawah Luar
        this.permukaan_bawah_luar_kanan_depan = [-xLuar + offsetX, -yLuar + offsetY, zLuar + offsetZ, this.outerColor]
        this.permukaan_bawah_luar_kiri_depan = [xLuar + offsetX, -yLuar + offsetY, zLuar + offsetZ, this.outerColor]
        this.permukaan_bawah_luar_kanan_belakang = [-xLuar + offsetX, -yLuar + offsetY, -zLuar + offsetZ, this.outerColor]
        this.permukaan_bawah_luar_kiri_belakang = [xLuar + offsetX, -yLuar + offsetY, -zLuar + offsetZ, this.outerColor]

        //Permukaan Bawah Dalam
        this.permukaan_bawah_dalam_kanan_depan = [-xDalam + offsetX, -yLuar + offsetY, zDalam + offsetZ, this.middleColor]
        this.permukaan_bawah_dalam_kiri_depan = [xDalam + offsetX, -yLuar + offsetY, zDalam + offsetZ, this.middleColor]
        this.permukaan_bawah_dalam_kanan_belakang = [-xDalam + offsetX, -yLuar + offsetY, -zDalam + offsetZ, this.middleColor]
        this.permukaan_bawah_dalam_kiri_belakang = [xDalam + offsetX, -yLuar + offsetY, -zDalam + offsetZ, this.middleColor]

        //Permukaan Depan Luar
        this.permukaan_depan_luar_kanan_atas = this.permukaan_atas_luar_kanan_depan
        this.permukaan_depan_luar_kiri_atas = this.permukaan_atas_luar_kiri_depan
        this.permukaan_depan_luar_kanan_bawah = this.permukaan_bawah_luar_kanan_depan
        this.permukaan_depan_luar_kiri_bawah = this.permukaan_bawah_luar_kiri_depan

        //Permukaan Depan Dalam
        this.permukaan_depan_dalam_kanan_atas = [-xDalam + offsetX, yDalam + offsetY, zLuar + offsetZ, this.middleColor]
        this.permukaan_depan_dalam_kiri_atas = [xDalam + offsetX, yDalam + offsetY, zLuar + offsetZ, this.middleColor]
        this.permukaan_depan_dalam_kanan_bawah = [-xDalam + offsetX, -yDalam + offsetY, zLuar + offsetZ, this.middleColor]
        this.permukaan_depan_dalam_kiri_bawah = [xDalam + offsetX, -yDalam + offsetY, zLuar + offsetZ, this.middleColor]

        //Permukaan Belakang Luar
        this.permukaan_belakang_luar_kanan_atas = this.permukaan_atas_luar_kanan_belakang
        this.permukaan_belakang_luar_kiri_atas = this.permukaan_atas_luar_kiri_belakang
        this.permukaan_belakang_luar_kanan_bawah = this.permukaan_bawah_luar_kanan_belakang
        this.permukaan_belakang_luar_kiri_bawah = this.permukaan_bawah_luar_kiri_belakang

        //Permukaan Belakang Dalam
        this.permukaan_belakang_dalam_kanan_atas = [-xDalam + offsetX, yDalam + offsetY, -zLuar + offsetZ, this.middleColor]
        this.permukaan_belakang_dalam_kiri_atas = [xDalam + offsetX, yDalam + offsetY, -zLuar + offsetZ, this.middleColor]
        this.permukaan_belakang_dalam_kanan_bawah = [-xDalam + offsetX, -yDalam + offsetY, -zLuar + offsetZ, this.middleColor]
        this.permukaan_belakang_dalam_kiri_bawah = [xDalam + offsetX, -yDalam + offsetY, -zLuar + offsetZ, this.middleColor]

        //Permukaan Kanan Luar
        this.permukaan_kanan_luar_atas_depan = this.permukaan_atas_luar_kanan_depan
        this.permukaan_kanan_luar_atas_belakang = this.permukaan_atas_luar_kanan_belakang
        this.permukaan_kanan_luar_bawah_depan = this.permukaan_bawah_luar_kanan_depan
        this.permukaan_kanan_luar_bawah_belakang = this.permukaan_bawah_luar_kanan_belakang

        //Permukaan Kanan Dalam
        this.permukaan_kanan_dalam_atas_depan = [-xLuar + offsetX, yDalam + offsetY, zDalam + offsetZ, this.middleColor]
        this.permukaan_kanan_dalam_atas_belakang = [-xLuar + offsetX, yDalam + offsetY, -zDalam + offsetZ, this.middleColor]
        this.permukaan_kanan_dalam_bawah_depan = [-xLuar + offsetX, -yDalam + offsetY, zDalam + offsetZ, this.middleColor]
        this.permukaan_kanan_dalam_bawah_belakang = [-xLuar + offsetX, -yDalam + offsetY, -zDalam + offsetZ, this.middleColor]

        //Permukaan Kiri Luar
        this.permukaan_kiri_luar_atas_depan = this.permukaan_atas_luar_kiri_depan
        this.permukaan_kiri_luar_atas_belakang = this.permukaan_atas_luar_kiri_belakang
        this.permukaan_kiri_luar_bawah_depan = this.permukaan_bawah_luar_kiri_depan
        this.permukaan_kiri_luar_bawah_belakang = this.permukaan_bawah_luar_kiri_belakang

        //Permukaan Kiri Dalam
        this.permukaan_kiri_dalam_atas_depan = [xLuar + offsetX, yDalam + offsetY, zDalam + offsetZ, this.middleColor]
        this.permukaan_kiri_dalam_atas_belakang = [xLuar + offsetX, yDalam + offsetY, -zDalam + offsetZ, this.middleColor]
        this.permukaan_kiri_dalam_bawah_depan = [xLuar + offsetX, -yDalam + offsetY, zDalam + offsetZ, this.middleColor]
        this.permukaan_kiri_dalam_bawah_belakang = [xLuar + offsetX, -yDalam + offsetY, -zDalam + offsetZ, this.middleColor]

        //Inner Atas
        this.inner_atas_kanan_depan = [-xDalam + offsetX, yDalam + offsetY, zDalam + offsetZ, this.innerColor]
        this.inner_atas_kiri_depan = [xDalam + offsetX, yDalam + offsetY, zDalam + offsetZ, this.innerColor]
        this.inner_atas_kanan_belakang = [-xDalam + offsetX, yDalam + offsetY, -zDalam + offsetZ, this.innerColor]
        this.inner_atas_kiri_belakang = [xDalam + offsetX, yDalam + offsetY, -zDalam + offsetZ, this.innerColor]

        //Inner Bawah
        this.inner_bawah_kanan_depan = [-xDalam + offsetX, -yDalam + offsetY, zDalam + offsetZ, this.innerColor]
        this.inner_bawah_kiri_depan = [xDalam + offsetX, -yDalam + offsetY, zDalam + offsetZ, this.innerColor]
        this.inner_bawah_kanan_belakang = [-xDalam + offsetX, -yDalam + offsetY, -zDalam + offsetZ, this.innerColor]
        this.inner_bawah_kiri_belakang = [xDalam + offsetX, -yDalam + offsetY, -zDalam + offsetZ, this.innerColor]

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
    
        //Miring Kanan Atas Depan
        this.miring_kanan_atas_depan_bagian_kanan_atas =  [-xLuar + offsetX, yLuar + offsetY, zDalam + offsetZ, this.middleColor]
        this.miring_kanan_atas_depan_bagian_kanan_bawah =  this.permukaan_kanan_dalam_atas_depan
        this.miring_kanan_atas_depan_bagian_kiri_atas =  [-xDalam + offsetX, yLuar + offsetY, zLuar + offsetZ, this.middleColor]
        this.miring_kanan_atas_depan_bagian_kiri_bawah =  this.permukaan_depan_dalam_kanan_atas
    
        //Miring Kiri Atas Depan
        this.miring_kiri_atas_depan_bagian_kanan_atas =  [xDalam + offsetX, yLuar + offsetY, zLuar + offsetZ, this.middleColor]
        this.miring_kiri_atas_depan_bagian_kanan_bawah =  this.permukaan_depan_dalam_kiri_atas
        this.miring_kiri_atas_depan_bagian_kiri_atas =  [xLuar + offsetX, yLuar + offsetY, zDalam + offsetZ, this.middleColor]
        this.miring_kiri_atas_depan_bagian_kiri_bawah =  this.permukaan_kiri_dalam_atas_depan
        
        //Miring Kanan Atas Belakang
        this.miring_kanan_atas_belakang_bagian_kanan_atas =  [-xLuar + offsetX, yLuar + offsetY, -zDalam + offsetZ, this.middleColor]
        this.miring_kanan_atas_belakang_bagian_kanan_bawah =  this.permukaan_kanan_dalam_atas_belakang
        this.miring_kanan_atas_belakang_bagian_kiri_atas =  [-xDalam + offsetX, yLuar + offsetY, -zLuar + offsetZ, this.middleColor]
        this.miring_kanan_atas_belakang_bagian_kiri_bawah =  this.permukaan_belakang_dalam_kanan_atas
        
        //Miring Kiri Atas Belakang
        this.miring_kiri_atas_belakang_bagian_kanan_atas =  [xDalam + offsetX, yLuar + offsetY, -zLuar + offsetZ, this.middleColor]
        this.miring_kiri_atas_belakang_bagian_kanan_bawah =  this.permukaan_belakang_dalam_kiri_atas
        this.miring_kiri_atas_belakang_bagian_kiri_atas =  [xLuar + offsetX, yLuar + offsetY, -zDalam + offsetZ, this.middleColor]
        this.miring_kiri_atas_belakang_bagian_kiri_bawah =  this.permukaan_kiri_dalam_atas_belakang
    
        //Miring Kanan Bawah Depan
        this.miring_kanan_bawah_depan_bagian_kanan_atas =  [-xLuar + offsetX, -yLuar + offsetY, zDalam + offsetZ, this.middleColor]
        this.miring_kanan_bawah_depan_bagian_kanan_bawah =  this.permukaan_kanan_dalam_bawah_depan
        this.miring_kanan_bawah_depan_bagian_kiri_atas =  [-xDalam + offsetX, -yLuar + offsetY, zLuar + offsetZ, this.middleColor]
        this.miring_kanan_bawah_depan_bagian_kiri_bawah =  this.permukaan_depan_dalam_kanan_bawah
    
        //Miring Kiri Bawah Depan
        this.miring_kiri_bawah_depan_bagian_kanan_atas =  [xDalam + offsetX, -yLuar + offsetY, zLuar + offsetZ, this.middleColor]
        this.miring_kiri_bawah_depan_bagian_kanan_bawah =  this.permukaan_depan_dalam_kiri_bawah
        this.miring_kiri_bawah_depan_bagian_kiri_atas =  [xLuar + offsetX, -yLuar + offsetY, zDalam + offsetZ, this.middleColor]
        this.miring_kiri_bawah_depan_bagian_kiri_bawah =  this.permukaan_kiri_dalam_bawah_depan

        //Miring Kanan Bawah Belakang
        this.miring_kanan_bawah_belakang_bagian_kanan_atas =  [-xLuar + offsetX, -yLuar + offsetY, -zDalam + offsetZ, this.middleColor]
        this.miring_kanan_bawah_belakang_bagian_kanan_bawah =  this.permukaan_kanan_dalam_bawah_belakang
        this.miring_kanan_bawah_belakang_bagian_kiri_atas =  [-xDalam + offsetX, -yLuar + offsetY, -zLuar + offsetZ, this.middleColor]
        this.miring_kanan_bawah_belakang_bagian_kiri_bawah =  this.permukaan_belakang_dalam_kanan_bawah

        //Miring Kiri Bawah Belakang
        this.miring_kiri_bawah_belakang_bagian_kanan_atas =  [xDalam + offsetX, -yLuar + offsetY, -zLuar + offsetZ, this.middleColor]
        this.miring_kiri_bawah_belakang_bagian_kanan_bawah =  this.permukaan_belakang_dalam_kiri_bawah
        this.miring_kiri_bawah_belakang_bagian_kiri_atas =  [xLuar + offsetX, -yLuar + offsetY, -zDalam + offsetZ, this.middleColor]
        this.miring_kiri_bawah_belakang_bagian_kiri_bawah =  this.permukaan_kiri_dalam_bawah_belakang
    
        //rekap
        this.middleColoredVertices = [
            this.permukaan_atas_dalam_kanan_depan,
            this.permukaan_atas_dalam_kiri_depan,
            this.permukaan_atas_dalam_kanan_belakang,
            this.permukaan_atas_dalam_kiri_belakang,
            this.permukaan_bawah_dalam_kanan_depan,
            this.permukaan_bawah_dalam_kiri_depan,
            this.permukaan_bawah_dalam_kanan_belakang,
            this.permukaan_bawah_dalam_kiri_belakang,
            this.permukaan_depan_dalam_kanan_atas,
            this.permukaan_depan_dalam_kiri_atas,
            this.permukaan_depan_dalam_kanan_bawah,
            this.permukaan_depan_dalam_kiri_bawah,
            this.permukaan_belakang_dalam_kanan_atas,
            this.permukaan_belakang_dalam_kiri_atas,
            this.permukaan_belakang_dalam_kanan_bawah,
            this.permukaan_belakang_dalam_kiri_bawah,
            this.permukaan_kanan_dalam_atas_depan,
            this.permukaan_kanan_dalam_atas_belakang,
            this.permukaan_kanan_dalam_bawah_depan,
            this.permukaan_kanan_dalam_bawah_belakang,
            this.permukaan_kiri_dalam_atas_depan,
            this.permukaan_kiri_dalam_atas_belakang,
            this.permukaan_kiri_dalam_bawah_depan,
            this.permukaan_kiri_dalam_bawah_belakang,
            this.miring_kanan_atas_depan_bagian_kanan_atas,
            this.miring_kanan_atas_depan_bagian_kiri_atas,
            this.miring_kiri_atas_depan_bagian_kanan_atas,
            this.miring_kiri_atas_depan_bagian_kiri_atas,
            this.miring_kanan_atas_belakang_bagian_kanan_atas,
            this.miring_kanan_atas_belakang_bagian_kiri_atas,
            this.miring_kiri_atas_belakang_bagian_kanan_atas,
            this.miring_kiri_atas_belakang_bagian_kiri_atas,
            this.miring_kanan_bawah_depan_bagian_kanan_atas,
            this.miring_kanan_bawah_depan_bagian_kiri_atas,
            this.miring_kiri_bawah_depan_bagian_kanan_atas,
            this.miring_kiri_bawah_depan_bagian_kiri_atas,
            this.miring_kanan_bawah_belakang_bagian_kanan_atas,
            this.miring_kanan_bawah_belakang_bagian_kiri_atas,
            this.miring_kiri_bawah_belakang_bagian_kanan_atas,
            this.miring_kiri_bawah_belakang_bagian_kiri_atas
        ]

        this.innerColoredVertices = [
            this.inner_atas_kanan_depan,
            this.inner_atas_kiri_depan,
            this.inner_atas_kanan_belakang,
            this.inner_atas_kiri_belakang,
            this.inner_bawah_kanan_depan,
            this.inner_bawah_kiri_depan,
            this.inner_bawah_kanan_belakang,
            this.inner_bawah_kiri_belakang
        ]
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

    createTambalanDepanKananAtas(){
        return[
            this.permukaan_atas_luar_kanan_depan,
            this.permukaan_depan_dalam_kanan_atas,
            this.permukaan_kanan_dalam_atas_depan,
            this.inner_atas_kanan_depan
        ]    
    }

    createFullSquare(){
        this.batang = [
            this.createBatangDepanAtas(),
            this.createBatangKiriatas(),
            this.createBatangKananAtas(),
            this.createBatangBelakangAtas(),
            this.cretaeBatangDepanKiri(),
            this.createBatangDepanKanan(),
            this.createBatangBelakangKiri(),
            this.createBatangBelakangKanan(),
            this.createBatangBawahDepan(),
            this.createBatangBawahBelakang(),
            this.createBatangBawahKiri(),
            this.createBatangBawahKanan(),
        ]
    }

    draw(){
        if(this.batang == null){
            this.createFullSquare();
        }
        for(let batang of this.batang){
            let vertices = [];
            for (let i = 0; i < batang.length; i++) {
                vertices.push(batang[i][0], batang[i][1], batang[i][2], batang[i][3][0], batang[i][3][1], batang[i][3][2], batang[i][3][3]);
            }
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, batang.length);
        }
        
    }

    changeShadder(value){
        console.log(value)
        this.isUsingShadder = value;
        if(this.isUsingShadder){
           for(let i of this.middleColoredVertices){
                i[3] = this.middleColor;
           }
           for(let i of this.innerColoredVertices){
                i[3] = this.innerColor;
           }
        }
        else{
            for(let i of this.middleColoredVertices){
                i[3] = this.outerColor;
            }
            for(let i of this.innerColoredVertices){
                i[3] = this.outerColor;
            }
        }
    }

    toString(){
        if(this.batang == null){
            this.createFullSquare();
        }
        return {type: "Cube", vertices: this.batang}
    }
}