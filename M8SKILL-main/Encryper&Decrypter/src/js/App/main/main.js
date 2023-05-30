
//Eerst maak ik een Main classes aan
class Main {
    //Hier maak ik de varaiabelen die horen bij de main class
    encrypterView;
    decrypterView;
    htmlElement;
    app;

    //Dit is de constructor-functie die een nieuw object aanmaakt met data en app.
    //Ik wijs de waardes toe
    //En ik create elementen toe zoals de main
    constructor(data, app) {
        this.app = app;

        this.htmlElement = document.createElement("main");
        this.htmlElement.classList.add("main");
        this.app.renderer.render(this.htmlElement, document.querySelector("body"));

        this.encrypterView = new EncrypterView(this, data.encrypt);
        this.decrypterView = new DecrypterView(this, data.decrypt);
    }


    //Dit is een methode die twee variabelen verwacht: textToCipher de tekst om te versleutelen of ontsleutelen 
    //en type het type bewerking, "ENCRYPT" of iets anders.
    cipher(textToCipher, type) {
        if (type === "ENCRYPT") {
            this.app.encrypt(textToCipher);
        }
        else {
            this.app.decrypt(textToCipher);
        }
    }

    //Deze methode roept de changeBody() methode aan op het this.encrypterView object. 
    changeEncrypter(encryptedText) {
        this.encrypterView.changeBody(encryptedText);
    }

    //Deze methode roept de changeBody() methode aan op het this.decrypterView object.
    changeDecrypter(decryptedText) {
        this.decrypterView.changeBody(decryptedText);
    }
}