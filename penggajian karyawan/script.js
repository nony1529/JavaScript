function coba(){
      var wk=parseInt(document.getElementById('wk').value);
      var lembur=parseInt(document.getElementById('lembur').value);
      var hasil = wk*90000;
      var tambah=lembur*20000;
      var total;
      if(lembur>=3){
        total=hasil+tambah+20000;
        document.getElementById('insentif').innerHTML="20000";
     }
      else{
        if(lembur<3) {
          total=hasil+tambah;
          document.getElementById('insentif').innerHTML='tidak dapat';
       }
     }
     document.getElementById('total').innerHTML=total;
    }