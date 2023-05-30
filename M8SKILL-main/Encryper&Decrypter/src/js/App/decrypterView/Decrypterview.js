//Eerst maak ik een class aan

class DecrypterView {
    //Hier maak ik de variabeles aan die ik later in de class gebruik
    header;
    body;
    footer;
    htmlElement;
    main;
    type;
//Hier definieer ik de constructor functie
//ik maak niewue html element(en)
//Ik geef de class view aan de html element dat ik heb aangemaakt
//ik stel de variabele main op de waarde van de main.
//Ik maak een nieuwe header object aan
//Ik maak een nieuwe body object aan
//Ik maak een nieuwe footer object aan
    constructor(main, placeholder) {
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");

        this.type = "DECRYPT";
        this.main = main;

        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new Header(this, "Decrypter");
        this.body = new Body(this, placeholder);
        this.footer = new Footer(this, "Decyrpt");
    }

    //getDataFromBody() roept de methode cipher() aan op het main object
    //en geeft de tekst van this.body.text en de waarde van this.type door.

    getDataFromBody() {
        this.main.cipher(this.body.text, this.type);
    }
    //changeBody(decryptedText) roept de methode changeBody() aan op het body object 
    //en geeft decryptedText door.
    changeBody(decryptedText) {
        this.body.changeBody(decryptedText);
    }
}