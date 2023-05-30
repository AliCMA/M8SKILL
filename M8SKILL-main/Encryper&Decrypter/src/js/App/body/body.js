
//Hier maak ik een classes Body
class Body {
    //Hier maak ik de variabeles aan
    htmlElement;
    view;
    inputHtmlElement;
    text;

    //Hier heb ik de constructor functie
    //Ik maak in de constructor html elementen aan en koppel die aan elkaar
    //Een sectie-element wordt gemaakt en toegevoegd aan de 'htmlElement'-eigenschap van het object
    //Deze code is een constructor-functie in JavaScript die een nieuw object maakt. Het object wordt gemaakt met behulp van de gegeven view en object parameters.
    //Op einde maak ik het sectie-element en  voeg die aan de HTML van de 'view' en  in de app door middel van een rende -methode.


    constructor(view, object) {
        this.htmlElement = document.createElement("section");
        this.htmlElement.classList.add("view__body");
        this.inputHtmlElement = document.createElement("textarea");
        this.inputHtmlElement.classList.add("view__input");
        this.htmlElement.appendChild(this.inputHtmlElement);
        this.inputHtmlElement.placeholder = object.placeholder;
        this.inputHtmlElement.value = object.value;
        this.text = object.value;
        this.inputHtmlElement.oninput = this.typed;

        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }

    typed = (event) => {
        this.text = event.target.value;
    }

    changeBody(newText) {
        this.inputHtmlElement.value = newText;
    }
}