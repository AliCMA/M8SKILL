//Eerst maak ik een class aan

class EncrypterView {
    //Hier maak ik variabelen aan die ik gebruik bij de class
    header;
    body;
    footer;
    htmlElement;
    main;
    type;


    //Ik maak een nieuwe html element namelijk een article aan
    //Ik geef die article de view class
    //Ik wijs de waarde van de main toe aan de eigenschap main van het object.
    //Daarna de waarde van "ENCRYPT" geef ik toe aan de eigenschap type van het object.
    //daarna maak ik header body footer objecten aan
    constructor(main, object) {
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");

        this.main = main;
        this.type = "ENCRYPT";

        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new Header(this, "Encrypter");
        this.body = new Body(this, object);
        this.footer = new Footer(this, "Encrypt");
    }
    //getDataFromBody deze methode roept de methode cipher() aan op het this.main object
    getDataFromBody() {
        this.main.cipher(this.body.text, this.type);
    }

    //Deze methode roept de changeBody() methode aan op het this.body object
    changeBody(encryptedText) {
        this.body.changeBody(encryptedText);
    }
}