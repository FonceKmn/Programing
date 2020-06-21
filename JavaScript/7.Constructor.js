function ishci (ad,soyad,nomre){
    this.ad = ad;
    this.soyad = soyad;
    this.nomre = nomre;
    //constructor
    this.melumatlarigoster = function(){
        return "\nAd: " + ad + "\nSoyad: " + soyad + "\nNomre " + nomre;
    }
}

var ishci1 = new ishci ("Kamran","Ahmadzade", '0519888884');
var ishci2 = new ishci ("Ehmed","Ahmadzade", '0703286528' );

console.log(ishci1.melumatlarigoster());
console.log(ishci2.melumatlarigoster());


