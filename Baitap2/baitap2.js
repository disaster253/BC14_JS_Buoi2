function tinhTrungBinh() {
	var inpNum1 = +document.getElementById("num1").value;
	var inpNum2 = +document.getElementById("num2").value;
	var inpNum3 = +document.getElementById("num3").value;
	var inpNum4 = +document.getElementById("num4").value;
	var inpNum5 = +document.getElementById("num5").value;

	var trungBinh = (Math.floor(inpNum1 + inpNum2 + inpNum3 + inpNum4 + inpNum5) / 5);

	var ketQuaEl = document.getElementById("ketQua");
	ketQuaEl.innerHTML = "Kết quả: " + trungBinh;
}
