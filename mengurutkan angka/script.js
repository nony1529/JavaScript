let bilangan = [];
function buatInputAngka() {
  const jumlah = parseInt(document.getElementById("jumlahAngka").value);
  const inputContainer = document.getElementById("inputContainer");
  const urutkanBtn = document.getElementById("urutkanBtn");

  if (isNaN(jumlah) || jumlah < 1) {
    alert("Masukkan jumlah angka yang sesuai minimal 1!");
    return;
  }

  inputContainer.innerHTML = "";
  bilangan = [];

  for (let i = 0; i < jumlah; i++) {
    const inputDiv = document.createElement("div");
    inputDiv.style.marginBottom = "5px";
    
    const label = document.createElement("label");
    label.textContent = `Masukan Angka ${i + 1} = `;
    
    const input = document.createElement("input");
    input.type = "number";
    input.id = `angka-${i}`;
    input.style.marginLeft = "5px";
    
    inputDiv.appendChild(label);
    inputDiv.appendChild(input);
    inputContainer.appendChild(inputDiv);
  }

  urutkanBtn.style.display = "block";
  }
  
function urutkanAngka() {
  const jumlah = parseInt(document.getElementById("jumlahAngka").value);
  const hasilDiv = document.getElementById("hasil");

  bilangan = [];

  for (let i = 0; i < jumlah; i++) {
    const input = document.getElementById(`angka-${i}`);
    const angka = parseFloat(input.value);
    
    if (isNaN(angka)) {
      hasilDiv.innerHTML = "Semua input harus diisi dengan angka";
      return;
    }
    bilangan.push(angka);
}

hasilDiv.innerHTML = `
<div style="margin-bottom: 10px;">
<strong>Angka Sebelum Di Urutkan</strong> = [${bilangan.join(", ")}]</div>`;
const sorted = [...bilangan].sort((a, b) => a - b);
hasilDiv.innerHTML += `
<div>
<strong>Angka Sesudah Di Urutkan</strong> = [${sorted.join(", ")}]</div>`;
hasilDiv.style.color = "black";
  }