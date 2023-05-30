//Hier maak ik de class footer aan

class Footer {
    //Hier maak ik de variabelen aan die ik gebruik in de footer
    htmlElement;
    view;
    buttonHtmlElement;
    app;

    //Bij deze constructor maak ik de html element footer aan die geef ik de class view__footer
    //ik maak ook een button en die geef ik ook een class namelijk view__button
    //ik geef daarbij ook een onclick functie mee en maak een innertext aan
    constructor(view, buttonText) {
        this.htmlElement = document.createElement("footer");
        this.htmlElement.classList.add("view__footer");
        this.buttonHtmlElement = document.createElement("button");
        this.buttonHtmlElement.classList.add("view__button");
        this.buttonHtmlElement.onclick = this.buttonClicked;
        this.buttonHtmlElement.innerText = buttonText;
        this.htmlElement.appendChild(this.buttonHtmlElement);
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);


    }

    // als op de button wordt geklikt dan zie je de data van de getdatafrombody
    buttonClicked = () => {
        this.view.getDataFromBody();
    }
}