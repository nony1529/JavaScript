function hitung() {
  const beli = parseFloat(document.getElementById('beli').value);
  const jual = parseFloat(document.getElementById('jual').value);
  if (isNaN(beli) || isNaN(jual)) {
    alert("Masukkan angka yang valid!");
    return;
  }
  let hasilText = "";
  if (jual === beli) {
    hasilText = "Harga Jual Sama Dengan Harga Beli<br>Tidak Ada Kerugian Maupun Keuntungan";
  } 
  else if (jual > beli) {
    const selisih = jual - beli;
    const persen = (selisih / beli) * 100;
    hasilText = `Mendapatkan Keuntungan Sebesar = ${persen.toFixed(2)}%`;
  } 
  else {
    const selisih = beli - jual;
    hasilText = `Mengalami Kerugian Sebesar = ${persen.toFixed(2)}%`;
  }
  document.getElementById('hasil').innerHTML = hasilText;
}