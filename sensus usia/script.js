let penduduk = [];
const kategori = [
  { nama: "Anak (0-12)", min: 0, max: 12 },
  { nama: "Remaja (13-17)", min: 13, max: 17 },
  { nama: "Dewasa (18-30)", min: 18, max: 30 },
  { nama: "Paruh Baya (31-45)", min: 31, max: 45 },
  { nama: "Pra-Lansia (46-65)", min: 46, max: 65 },
  { nama: "Lansia (66+)", min: 66, max: 200 }
];
function tambahPenduduk() {
  const nama = document.getElementById('nama').value;
  const usia = parseInt(document.getElementById('usia').value);
  
  if (!nama || isNaN(usia)) return;
  penduduk.push({nama, usia});
  document.getElementById('nama').value = '';
  document.getElementById('usia').value = '';
  updateTampilan();
}
function getKategori(usia) {
  for (const kat of kategori) 
    if (usia >= kat.min && usia <= kat.max) 
      return kat.nama;
    return "Tidak Diketahui";
  }
function  updateTampilan() {
  updateTabel();
  updateStatistik();
  updateDistribusi();
  }
function  updateTabel() {
  const tbody = document.getElementById('dataPenduduk');
  tbody.innerHTML = penduduk.map((p, i) => 
  <tr>
    <td>${i+1}</td>
    <td>${p.nama}</td>
    <td>${p.usia}</td>
    <td>${getKategori(p.usia)}</td>
  </tr>
  ).join('');
}
function  updateStatistik() {
  if (penduduk.length === 0) {
document.getElementById('statistik').innerHTML = '<p>Belum ada data</p>';
return;
  }
  const total = penduduk.length;
  const rata = penduduk.reduce((sum, p) => sum + p.usia, 0) / total;
  const min = Math.min(...penduduk.map(p => p.usia));
  const max = Math.max(...penduduk.map(p => p.usia)); 
  document.getElementById('statistik').innerHTML = `
  <p>Total: <b>${total}</b> penduduk</p>
  <p>Rata-rata: <b>${rata.toFixed(1)}</b> tahun</p>
  <p>Usia tertinggi: <b>${max}</b> tahun</p>
  <p>Usia terendah: <b>${min}</b> tahun</p>`;
}
function  updateDistribusi() {
  const distribusi = {};
  kategori.forEach(k => distribusi[k.nama] = 0);
  
  penduduk.forEach(p => {
    for (const kat of kategori) {
      if (p.usia >= kat.min && p.usia <= kat.max) {
        distribusi[kat.nama]++;
        break;
      }
    }
  });
  let html = '';
  for (const [kat, jumlah] of Object.entries(distribusi)) {
    const persen = penduduk.length ? (jumlah / penduduk.length * 100).toFixed(1) : 0;
    html += `
    <div>
    <span>${kat}: ${jumlah} (${persen}%)</span>
    <div class="chart-bar" style="width: ${persen}%"></div>
    </div>`;
  }
  document.getElementById('distribusi').innerHTML = html;
  }updateTampilan();