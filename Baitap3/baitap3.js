const vnd = 23500
function doiTien() {
	var soUSD = +document.getElementById("soTien").value;

	var quyDoi = soUSD * vnd;

	var ketQuaEL = document.getElementById("ketQua");
	ketQuaEL.innerHTML = "Số tiền sau khi quy đổi: " + quyDoi;
}