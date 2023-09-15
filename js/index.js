// Bài 1: Quản lý tuyển sinh
document.getElementById('btnKetQuaTuyenSinh').onclick = function(){
    document.getElementById('frmQuanLyTuyenSinh').onsubmit = function(e){
        e.preventDefault(); 
    }
    //input
    var diemChuan = +document.getElementById('diemChuan').value;
    var khuVuc = +document.getElementById('khuVuc').value;
    var doiTuong = +document.getElementById('doiTuong').value;

    var diemThi1 = +document.getElementById('diemMonThuNhat').value;
    var diemThi2 = +document.getElementById('diemMonThuHai').value;
    var diemThi3 = +document.getElementById('diemMonThuBa').value;


    //output
    var ketQua = '';
    ketQua = quanLyTuyenSinh(diemChuan, diemThi1, diemThi2, diemThi3, khuVuc, doiTuong);

    document.getElementById('ketQuaTuyenSinh').innerHTML = ketQua;
}


//Bài 2: Tính tiền điện

document.getElementById('btnTinhTienDien').onclick = function(){
    document.getElementById('frmTinhTienDien').onsubmit = function(e){
        e.preventDefault(); 
    }

    //input
    var hoTen = document.getElementById('hoTen').value;
    var soKW = +document.getElementById('soKW').value;

    //output
    var ketQuaDien = '';
    

    //process
    var tongTien = 0;
    tongTien = tinhDienTieuThu(soKW, 500, 650, 850, 1100, 1300);

    ketQuaDien = 'Họ tên: ' + hoTen + ' - Tiền điện: ' + tongTien.toLocaleString() + ' VND';
    document.getElementById('tienDien').innerHTML = ketQuaDien;
    
}

//Bài 3: Tính thuế thu nhập cá nhân
document.getElementById('btnTinhTienThue').onclick = function(){
        document.getElementById('frmTinhThue').onsubmit = function(e){
        e.preventDefault();
    }
        //input
        var hoTen = document.getElementById('hoTenThue').value;
        var tongThuNhap = document.getElementById('tongThuNhap').value;
        var soNguoiPhuThuoc = document.getElementById('nguoiPhuThuoc').value;

        //output
        var ketQuaThue = '';
        
        //process
        var tienThue = 0;
        tienThue = tinhTienThue(tongThuNhap, soNguoiPhuThuoc, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35);

        ketQuaThue = 'Họ tên: ' + hoTen + ' - Tiền Thuế thu nhập cá nhân: ' + tienThue.toLocaleString() + ' VND';
        document.getElementById('tienThue').innerHTML = ketQuaThue;
}

//Bài 4: Tính tiền cáp
function hienThongTinSoKetNoi(){
    var tagCheck = document.getElementById('khachHang').value;

    if(tagCheck == 'Doanh nghiệp'){
        document.getElementById('soKenhKetNoi').style.display = 'block';
    } else{
        document.getElementById('soKenhKetNoi').style.display = 'none';
    }
}

document.getElementById('btnTinhTienCap').onclick = function(){
    document.getElementById('frmTinhTienCap').onsubmit = function(e){
        e.preventDefault();
    }

    var phiDichVu = 0;
    var phiXuLy = 0;
    var phiThueKenh = 0;
    
    //input
    var loaiKH = document.getElementById('khachHang').value;
    var maKH = document.getElementById('maKhachHang').value;
    var soKenhCaoCap = +document.getElementById('soKenhCaoCap').value;
    var soKenhKetNoi = +document.getElementById('soKenhKetNoi').value;


    switch(loaiKH) {
        case 'Nhà dân':{
            phiXuLy = 4.5;
            phiDichVu = 20.5;
            phiThueKenh = 7.5;
        };break;
        case 'Doanh nghiệp':{
            phiXuLy = 15;
            phiThueKenh = 50;
        }; break;
    }
  
    //output
    var ketQuaTienCap = '';

    //process
    var tongTienCap = 0;
    tongTienCap = tinhTienCap(loaiKH, phiXuLy, phiDichVu, phiThueKenh, soKenhCaoCap, soKenhKetNoi);

    ketQuaTienCap = 'Mã khách hàng: ' + maKH + ' - Tiền cap: ' + tongTienCap.toLocaleString() + ' $';
    document.getElementById('tienCap').innerHTML = ketQuaTienCap;
}
