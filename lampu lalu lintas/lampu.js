function cekLampu() {
      const warna = document.getElementById("inputWarna").value;
      const hasil = statusLampuLaluLintas(warna);
      document.getElementById("hasil").innerText = hasil;
    }

    function statusLampuLaluLintas(warna) {
      warna = warna.toLowerCase();
      if (warna === "merah") return "BERHENTI!";
      else if (warna === "kuning") return "BERSIAP!";
      else if (warna === "hijau") return "MAJU!";
      else return "Warna tidak tersedia, silahkan masukan warna Merah, Kuning, atau Hijau";
    }