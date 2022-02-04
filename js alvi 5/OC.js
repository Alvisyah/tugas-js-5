function siswa(nama, ttl, umur, nohp, alamat){
    this.nama = nama;
    this.ttl = ttl;
    this.umur = umur;
    this.nohp = nohp;
    this.alamat = alamat;
}

const siswa1= new siswa("hallo nama saya Alvisyah", "ttl saya 27 Maret 2005", "umur saya 16 tahun",
 "jika kalian ingin menanyakan apapun bisa hubungi saya ke no ini 081574743405 ",
  "saya tinggal di desa bojong kunci");
console.log(siswa1);