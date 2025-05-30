function cekKonsonan() {
  const input = document.getElementById('inputHuruf').value.toLowerCase();
  const hasilElement = document.getElementById('hasil');
  if(input === '') {
    hasilElement.textContent = "Silakan masukkan sebuah huruf";
    hasilElement.style.color = "red";
    return;
  }
  if(input.length > 1) {
    hasilElement.textContent = "Hanya masukkan satu karakter";
    hasilElement.style.color = "red";
    return;
  }
  
  if(!/[a-z]/.test(input)) {
    hasilElement.textContent = `'${input}' bukan huruf alfabet`;
    hasilElement.style.color = "red";
  return;
}

if('aiueo'.includes(input)) {
  hasilElement.innerHTML = `'<b>${input.toUpperCase()}</b>' adalah <b>huruf vokal</b>`;
  hasilElement.style.color = "green";
} 
else {
  hasilElement.innerHTML = `'<b>${input.toUpperCase()}</b>' adalah <b>huruf konsonan</b>`;
  hasilElement.style.color = "blue";
  }
}