//Hier maak ik een header class aan
class Header {
    //Hier maak ik de variabelen aan die ik ga gebruiken in de header class
    htmlElement;
    view;
    headingHtmlElement;

    // Bij de constructor load ik de elementen en de waardes
    constructor(view, headingText) {
        this.htmlElement = document.createElement("header");

        this.htmlElement.classList.add("view__header");
        this.headingHtmlElement = document.createElement("h1");
        this.headingHtmlElement.innerText = headingText;
        this.headingHtmlElement.classList.add("view__heading");
        this.htmlElement.appendChild(this.headingHtmlElement);
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }
}