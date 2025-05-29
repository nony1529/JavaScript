function hitungGrade() {

  const nilaiInput = document.getElementById("inputNilai").value;
  const nilai = parseFloat(nilaiInput);
  const hasilElement = document.getElementById("hasil");
      
  if (isNaN(nilai)) {
    hasilElement.innerText = "Masukkan angka yang valid!";
    hasilElement.className = "result invalid";
    return;
    }
    const grade = konversiNilai(nilai);
      
    hasilElement.innerText = `Nilai ${nilai} = Grade ${grade}`;
    hasilElement.className = "result " + grade;
    }

  function konversiNilai(nilai) {
    if (nilai >= 90 && nilai <= 100) return "A";
    else if (nilai >= 70 && nilai < 90) return "B";
    else if (nilai >= 50 && nilai < 70) return "C";
    else if (nilai >= 30 && nilai < 50) return "D";
    else if (nilai >= 10 && nilai < 30) return "E";
    else return "Nilai tidak valid!";
}