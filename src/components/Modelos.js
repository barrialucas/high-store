import wayfarerMate from "../img/img-benja/usar/wayfare-negroGris.jpg"
import wayfarerNegro from "../img/img-benja/usar/wayfare-plateado.png"
import roundDorado from "../img/img-benja/usar/roundmetal-doradoRosa.jpg"
import roundNegro from  "../img/img-benja/usar/roundmetal-doradoNegro.jpg"
import ovalNegro from  "../img/img-benja/usar/oval-negroVerde.png"
import ovalDorado from  "../img/img-benja/usar/oval-dorado.png"
import clubmasterNegro from "../img/img-benja/usar/clubmasterClassic1-negroGris.JPG"
import clubmasterNegro2 from "../img/img-benja/usar/clubmasterMetal-doradoVerde.JPG"
import jackie from "../img/img-benja/usar/jackie-ohh-negroGris.JPG"
import clubround from "../img/img-benja/usar/clubround-negro.png"
import blaze1 from "../img/img-benja/usar/blaze-blue.png"
import blaze2 from "../img/img-benja/usar/blaze-plat.png"
import roundClassic from "../img/img-benja/usar/round-negroVerde.png"
import roundBridge from "../img/img-benja/usar/blaze-classic.png"
import hexagonal from "../img/img-benja/usar/hexagonal.png"
import cats from "../img/img-benja/usar/cats.png"
import wood from "../img/img-benja/usar/clubmaster-madera.png"
import aviator from "../img/img-benja/usar/aviator.png"

class Anteojos{
    constructor(id, marca,modelo,precio,color,img,hover){
        this.id=parseInt(id);
        this.marca=marca.toLowerCase();
        this.modelo=modelo
        this.precio=parseInt(precio);
        this.color=color;
        this.img=img;
        this.hover=hover;
    }
}

export const arrAnte=[];

arrAnte.push(new Anteojos("1", "rayban","| Wayfarer", "17900","Mate-Verde|Espejado",wayfarerMate,  "" ));
arrAnte.push(new Anteojos("2", "rayban","| Wayfarer", "17900","Negro-Plateado|Espejado", wayfarerNegro,  "img/img-benja/usar/wayfare-plateado2.png" ));
arrAnte.push(new Anteojos("3", "rayban","| Round", "17900","Dorado-Rosa|Espejado", roundDorado, "img/img-benja/usar/roundmetal-doradoRosa.jpg2" ));
arrAnte.push(new Anteojos("4", "rayban","| Round", "17900","Negro-Gris", roundNegro,  "img/img-benja/usar/roundmetal-doradoNegro2.jpg"));
arrAnte.push(new Anteojos("5", "rayban","| Oval", "17900","Negro|Verde", ovalNegro,  "img/img-benja/usar/oval-negroVerde2.jpg"));
arrAnte.push(new Anteojos("6", "rayban","| Oval", "18200","Dorado-Azul", ovalDorado,  "img/img-benja/usar/oval-dorado2.png"));
arrAnte.push(new Anteojos("7", "rayban","| Clubmaster Classic", "18500", "Negro Polarizado",clubmasterNegro,  "img/img-benja/usar/clubmasterClassic1-negroGris2.jpg" ));
arrAnte.push(new Anteojos("8", "rayban","| Clubmaster Classic", "17900","Negro-Dorado|Verde", clubmasterNegro2,  "img/img-benja/usar/clubmasterMetal-doradoVerde2.jpg" ));
arrAnte.push(new Anteojos("9", "rayban","| Jackie Ohh", "16800","Negro|Gris Degrade", jackie,  "img/img-benja/usar/jackie-ohh-negroGris2.png" ));
arrAnte.push(new Anteojos("10", "rayban","| Clubround", "17900","Negro-Verde",clubround ,  "img/img-benja/usar/clubround-negro2.png" ));
arrAnte.push(new Anteojos("11", "rayban","| Blaze", "17900","Dorado|Azul Degrade", blaze1,  "img/img-benja/usar/blaze-blue2.png" ));
arrAnte.push(new Anteojos("12", "rayban","| Blaze", "17900","Plateado|Espejado", blaze2,  "img/img-benja/usar/blaze-plat2.png" ));
arrAnte.push(new Anteojos("13", "rayban","| Round Classic", "17900","Negro-Verde", roundClassic,  "img/img-benja/usar/negroVerde2.png" ));
arrAnte.push(new Anteojos("14", "rayban","| Round Bridge", "17900","Negro-Gris|Degrade", roundBridge,  "img/img-benja/usar/blaze-classic2.png" ));
arrAnte.push(new Anteojos("15", "rayban","| Hexagonal Flat", "17900","Dorado Espejado", hexagonal,  "img/img-benja/usar/hexagonal2.png" ));
arrAnte.push(new Anteojos("16", "rayban","| Cats", "16800","Negro|Verde", cats,  "img/img-benja/usar/cats22.png" ));
arrAnte.push(new Anteojos("17", "rayban","| Clubmaster Wood", "17900","Marrón Claro Liso", wood,  "img/img-benja/usar/blaze-classic2.png" ));
arrAnte.push(new Anteojos("18", "rayban","| Aviator Folding", "18500","Negro-Dorado|Polarizado", aviator,  "img/img-benja/usar/aviator2.png" ));

//agregar wayfare optica 16500 sacar foto
//agregar Round azul-plateado|Espejado  sacar foto 
//wayfare id 2 sacar nueva foto

