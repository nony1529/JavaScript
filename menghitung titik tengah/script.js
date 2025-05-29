class Titik {
  constructor() {
    this.x = 0.0;
    this.y = 0.0;
  }
}

  function hitungTitikTengah() {
    const titik1 = new Titik();
    const titik2 = new Titik();
    const titik3 = new Titik();
  
    const x1 = document.getElementById("x1").value;
    const y1 = document.getElementById("y1").value;
    const x2 = document.getElementById("x2").value;
    const y2 = document.getElementById("y2").value;
  
  if (!x1 || !y1 || !x2 || !y2) {
    alert("Semua nilai harus diisi");
    return;
  }
  
  titik1.x = parseFloat(x1);
  titik1.y = parseFloat(y1);
  titik2.x = parseFloat(x2);
  titik2.y = parseFloat(y2);
  
  titik3.x = (titik1.x + titik2.x) / 2;
  titik3.y = (titik1.y + titik2.y) / 2;
  
  document.getElementById("hasilX").textContent = titik3.x.toFixed(2);
  document.getElementById("hasilY").textContent = titik3.y.toFixed(2);
  }