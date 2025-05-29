function geometri(n, a, r) {
  const un = a * (Math.pow(r, n - 1));
  
  let sn;
  if (r === 1) {
    sn = n * a;
  }
  else {
    sn = a * (Math.pow(r, n) - 1) / (r - 1);
  }
  
  const hasilDiv = document.getElementById("hasil");
  hasilDiv.innerHTML = `
  <div>Suku Ke-${n} (Un) = ${un}</div>
  <div>Jumlah ${n} Suku Pertama (Sn) = ${sn}</div>`;
}

  function hitungGeometri() {
    const n = parseInt(document.getElementById("n").value);
    const a = parseInt(document.getElementById("a").value);
    const r = parseInt(document.getElementById("r").value);
  
  if (isNaN(n) || isNaN(a) || isNaN(r)) {
    document.getElementById("hasil").innerHTML = "Masukkan semua nilai dengan benar";
    return;
  }
  
  geometri(n, a, r);
}