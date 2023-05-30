//Hier maak ik een class App
class App {

    //Hier maak ik de variabelen van de class App
    api;
    decrypter;
    encrypter;
    cleaner;
    renderer;
    main;

    //Hier maak ik  een nieuw object namelijk Encrypter en die wijs ik toe  aan de eigenschap encrypter.
    //Hier maak ik  een nieuw object namelijk API  en die wijs ik toe  aan de eigenschap api.
    //Hier maak ik  een nieuw object namelijk Decrypter en die wijs ik toe  aan de eigenschap decrypter.
    //Hier maak ik  een nieuw object namelijk Cleaner  en die wijs ik toe  aan de eigenschap cleaner.
    //Hier maak ik  een nieuw object namelijk Renderer  en die wijs ik toe  aan de eigenschap renderer.
    constructor() {
        this.encrypter = new Encrypter();
        this.decrypter = new Decrypter();
        this.cleaner = new Cleaner();
        this.renderer = new Renderer();
        this.api = new API();
        this.api.getData("/src/data/data.json").then((data) => {
            this.main = new Main(data, this);
        });
    }


    //De encrypt functie neemt een tekst TextToEncrypt  
    //en versleutelt deze met behulp van een encryptie algoritme dat staat bij this.encrypter. 
    //Uitkomst wordt opgeslagen in een variabele genaamd "encrypted".
    encrypt(TextToEncrypt) {
        const encrypted = this.encrypter.encrypt(TextToEncrypt);
        this.main.changeEncrypter(encrypted);

    }

    decrypt(TextToDecrypt) {
        const decrypted = this.decrypter.decrypt(TextToDecrypt);
        this.main.changeDecrypter(decrypted);
    }
}
