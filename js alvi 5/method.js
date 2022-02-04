const person={
    nama:"hai nama saya Alvisyah Hatta",
    sekolah:"saya sekolah di smk yadika soreang kelas",
    kelas:11,
    hobby:"hobbyku futsal",
    perkenalan: function(){
        return this.nama + " " + this.sekolah + " " + this.kelas + " " + this.hobby;
    },
};
console.log(person.perkenalan());