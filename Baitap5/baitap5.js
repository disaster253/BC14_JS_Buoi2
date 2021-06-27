function tinhTong() {
	var inpNum = +document.getElementById("num").value;
	var sum = Math.floor((inpNum % 10) + (inpNum / 10));

	ketQuaEL = document.getElementById("ketQua");
	ketQuaEL.innerHTML = "Tổng 2 ký số là: " + sum;
}