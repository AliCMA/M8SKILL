//Hier maak ik de class cleaner
//Dit cleant de whattoclean

class Cleaner{

    //Dit is een functie  clean die wordt gebruikt om de inhoud van een HTML element leeg te maken.
    clean(whatToClean) {
        document.querySelector(whatToClean).innerHTML = "";
    }
}