const LUONG_CO_BAN = 100000;

function tinhLuong() {
	var soNgayLam = +document.getElementById("soNgayLam").value;
	// Ép kiểu string về number
	// var soLuong = LUONG_CO_BAN * parseFloat(soNgayLam)
	// var soLuong = LUONG_CO_BAN * parseInt(soNgayLam)
	var soLuong = LUONG_CO_BAN * soNgayLam;

	var ketQuaEL = document.getElementById("ketQua");
	ketQuaEL.innerHTML = "Số Lương: " + soLuong;

}
