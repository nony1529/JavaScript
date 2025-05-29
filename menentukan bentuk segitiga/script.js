function tentukanSegitiga() {
  const a = parseInt(document.getElementById('sisi1').value);
  const b = parseInt(document.getElementById('sisi2').value);
  const c = parseInt(document.getElementById('sisi3').value);
  
  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    alert('Masukkan bilangan positif untuk semua sisi!');
    return;
  }

  let sisiA = a;
  let sisiB = b;
  let sisiC = c;

  if (sisiA > sisiC) {
    [sisiA, sisiC] = [sisiC, sisiA];
  }
  if (sisiB > sisiC) {
    [sisiB, sisiC] = [sisiC, sisiB];
  }
  
  const hasilElement = document.getElementById('hasil');
  hasilElement.innerHTML = '';

  if (sisiC >= sisiA + sisiB) {
    hasilElement.innerHTML = '<p>Ketiga Nilai Sisi Ini Tidak Membentuk Jenis Segitiga Apapun</p>';
    return;
  }
  
  let jenisSisi = '';
  if (sisiA === sisiB && sisiB === sisiC) {
    jenisSisi = 'Segitiga Sama Sisi';
  } else if (sisiA === sisiB || sisiB === sisiC || sisiA === sisiC) {
    jenisSisi = 'Segitiga Sama Kaki';
  } else {
    jenisSisi = 'Segitiga Sembarang';
  }

  let jenisSudut = '';
  const cKuadrat = sisiC * sisiC;
  const abKuadrat = (sisiA * sisiA) + (sisiB * sisiB);
  
  if (cKuadrat === abKuadrat) {
    hasilElement.innerHTML = `
<p>Ketiga Nilai Sisi Ini Merupakan Triple Pythagoras Dan Membentuk Segitiga Siku-Siku</p>
<p>Berdasarkan Sisinya, Segitiga Ini Merupakan Jenis = ${jenisSisi}</p>
      `;
      return;
  } else if (cKuadrat > abKuadrat) {
    jenisSudut = 'Sudut Tumpul';
  } else {
    jenisSudut = 'Sudut Lancip';
  }

  hasilElement.innerHTML = `
      <p>Berdasarkan Sisinya, Segitiga Ini Merupakan Jenis = ${jenisSisi}</p>
      <p>Berdasarkan Sudutnya, Segitiga Ini Merupakan Segitiga Dengan Jenis = ${jenisSudut}</p>`;
  }