function cek() {
      const angka = parseInt(document.getElementById("inputAngka").value);
      const hasilElement = document.getElementById("hasil");
      
      if (isNaN(angka)) {
        hasilElement.innerText = "input harus berupa angka";
      } else {
        hasilElement.innerText = 
          angka % 2 === 0 ? `${angka} adalah bilangan genap` : 
          `${angka} adalah bilangan ganjil`;
      }
    }
