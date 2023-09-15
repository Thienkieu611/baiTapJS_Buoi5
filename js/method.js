/**
 * Hàm này cho phép tính điểm và xét điều kiện xem thi sinh có đậu hay không
 * @param {*} diemChuan Điểm chuẩn
 * @param {*} diemThi1 Điểm môn thi 1
 * @param {*} diemThi2 Điểm môn thi 2
 * @param {*} diemThi3 Điểm môn thi 3
 * @param {*} khuVuc Điểm ưu tiên khu vực
 * @param {*} doiTuong Điểm ưu tiên đối tượng
 * @returns 
 */
function quanLyTuyenSinh(diemChuan, diemThi1, diemThi2, diemThi3, khuVuc, doiTuong){ //input

    //output
    var ketQua = '';

    //process
    var diemUuTien;
    var diemTong;

    diemUuTien = khuVuc + doiTuong;
    diemTong = diemThi1 + diemThi2 + diemThi3 + diemUuTien;

    if(diemThi1 == 0 || diemThi2 == 0 || diemThi3 == 0){
        ketQua = 'Bạn đã rớt vì có điểm thành phần bằng 0'
    }
    else if(diemTong >= diemChuan && diemThi1 !=0 && diemThi2 !=0 && diemThi3 !=0){
        ketQua = 'Tổng điểm: '+ diemTong + ' - Đậu';
    } else{
        ketQua = 'Tổng điểm: '+ diemTong + ' - Rớt';
    }
    return ketQua;
}

/**
 * Hàm này cho phép tính tổng tiền điện tiêu thụ theo các quy tắc từng kw sẽ có sô tiền nhất định
 * @param {*} soKW Tổng số KW
 * @param {*} tienKw1 Tiền của 50 KW đầu
 * @param {*} tienKw50 Tiền của 50 KW kế 
 * @param {*} tienKw100 Tiền của 100 KW kế 
 * @param {*} tienKw150 Tiền của 150 KW kế 
 * @param {*} tienKwS150 Tiền của số KW còn lại
 * @returns 
 */
function tinhDienTieuThu(soKW, tienKw1, tienKw50, tienKw100, tienKw150, tienKwS150){ //input

    //output 
    var tongTien = 0;

    //process
    if(soKW == ''){
        alert('Bạn cần phải nhập vào số KW để có thể tính!')
    } else if(soKW <= 50){
        tongTien = soKW * tienKw1;
    } else if(soKW > 50 && soKW <= 100){
        tongTien = 50 * tienKw1 + (soKW - 50) * tienKw50;
    } else if(soKW > 100 && soKW <= 200){
        tongTien = 50 * tienKw1 + 50 * tienKw50 + (soKW - 100) * tienKw100;
    } else if(soKW > 150 && soKW <= 350){
        tongTien = 50 * tienKw1 + 50 * tienKw50 + 100 * tienKw100 + (soKW - 200) * tienKw150;
    } else{
        tongTien = 50 * tienKw1 + 50 * tienKw50 + 100 * tienKw100 + 150 * tienKw150 + (soKW - 350) * tienKwS150;
    }

    return tongTien;
}

/**
 * Hàm này cho phép tính tổng thuế cá nhân dựa trên mức thuế tương ứng
 * @param {*} tongThuNhapNam Tổng thu nhập 1 năm
 * @param {*} soNguoiPhuThuoc Số người phụ thuộc
 * @param {*} thue1 Phần trăm thuế mức 1
 * @param {*} thue2 Phần trăm thuế mức 2
 * @param {*} thue3 Phần trăm thuế mức 3
 * @param {*} thue4 Phần trăm thuế mức 4
 * @param {*} thue5 Phần trăm thuế mức 5
 * @param {*} thue6 Phần trăm thuế mức 6
 * @param {*} thue7 Phần trăm thuế mức 7
 * @returns 
 */
function tinhTienThue(tongThuNhapNam, soNguoiPhuThuoc, thue1, thue2, thue3, thue4, thue5, thue6, thue7){  //input

    //output
    var ketQuaThue = 0;

    //process
    var thuNhapChiuThue = 0;
    thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;

    if(thuNhapChiuThue <= 60000000){
        ketQuaThue = thuNhapChiuThue * thue1;
    } else if(thuNhapChiuThue > thue1 && thuNhapChiuThue <= 120000000){
        ketQuaThue = thuNhapChiuThue * thue2;
    } else if(thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000){
        ketQuaThue = thuNhapChiuThue * thue3;
    } else if(thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000){
        ketQuaThue = thuNhapChiuThue * thue4;
    } else if(thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000){
        ketQuaThue = thuNhapChiuThue * thue5;
    } else if(thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000){
        ketQuaThue = thuNhapChiuThue * thue6;
    } else{
        ketQuaThue = thuNhapChiuThue * thue7;
    }

    return ketQuaThue;
}

/**
 * Hàm này cho phép tính tiền cap của loại khách hàng mong muốn
 * @param {*} loaiKH Loại khách hàng
 * @param {*} phiXuLy Phí xử lý
 * @param {*} phiDichVu Phí dịch vụ
 * @param {*} phiThueKenh Phí thuê kênh
 * @param {*} soKenhCaoCap Số kênh cao cấp
 * @param {*} soKetNoiDichVu Số kết nối dịch vụ
 * @returns 
 */
function tinhTienCap(loaiKH, phiXuLy, phiDichVu, phiThueKenh, soKenhCaoCap, soKetNoiDichVu){
    var tongTien = 0;
    // tongTien = phiXuLy + phiDichVu + phiThueKenh * soKenhCaoCap;
    switch (loaiKH) {
        case 'Nhà dân':{
            
        }; break;
        case 'Doanh nghiệp':{
            tongTien = phiXuLy + tinhTienDichVu(soKetNoiDichVu) + phiThueKenh * soKenhCaoCap;
        }
    }
    return tongTien;
}

/**
 * Hàm này dùng để tính tiền cap cho kết nối dịch vụ doanh nghiệp
 * @param {} soKetNoiDichVu Số kết nối dịch vụ
 * @returns 
 */
 function tinhTienDichVu(soKetNoiDichVu){
    var phiDichVu = 0;
    if(soKetNoiDichVu <= 10){
        phiDichVu = 75;
    } else{
        phiDichVu = 75 + (soKetNoiDichVu - 10) * 5; 
    }
    return phiDichVu;
 }