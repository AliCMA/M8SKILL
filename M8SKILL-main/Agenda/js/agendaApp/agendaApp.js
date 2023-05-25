
//Hier maak ik een class aan
class AgendaApp {
    //Dit zijn de varialen in de class 
    api;
    swticher;
    month = 0;

    //Hier maak ik een nieuw object van het type 'API' en toegewezen aan het attribuut 'api' van het object dat ik creëer.
    //De methode 'getData()' van het 'api'-object roep ik aan.
    constructor() {
        this.api = new API();
        this.switcher = new Switcher(this);
        this.api.getData().then(result => {
            this.switcher.loadAgenda(result[this.month]);
        });
    }

    //Hier is de functie eerst geeft het aan of het naar de volgende of vorige maand moet worden gaan.
    //Met behulp van de switch statment word gechecked welke waarde de sign heeft op dat moment. Als het dus + is gaat het met 1 hoog de this.month daardoor gaat hij volgende maand, en andersom zo voor de -.
    //Ik heb 2 if statements die de this.month checkt, er wordt gecheckt of het gelijk is aan 12 of kleiner dan 0, als een van deze voorwaarden waar is, wordt de waarde van "this.month" verandert.
    //Ten slotte wordt de methode "loadAgenda()" van het object "this.switcher" aangeroepen en wordt de waarde "this.api.dataFromAPI[this.month]" doorgegeven.

    switchMonths = (sign) => {
        switch (sign) {
            case "+":
                this.month = this.month + 1;
                break;
            case "-":
                this.month = this.month - 1;
                break;
        }

        if (this.month === 12) {
            this.month = 0;
        }
        if (this.month < 0) {
            this.month = 11;
        }

        this.switcher.loadAgenda(this.api.dataFromAPI[this.month]);
    }
}

// Hier maak ik een class API
class API {
    dataFromAPI = [];

    //Deze code is niet goed gebruikbaar want je geeft meteen de url van de .json data.
    //Zodra het response beschikbaar is, wordt de eerste "then()" methode gebruikt om het response om te zetten naar JSON-formaat.
    async getData() {
        await fetch("./data/data.json").then(response => {
            return response.json();
        }).then(data => {
            this.dataFromAPI = data.months;
        })
        //Hier return ik de dataFromAPI.
        return this.dataFromAPI;


    }
}


//Hier maak ik de class Agenda
class Agenda {
    //Hier maak ik de variabelen aan
    renderer;
    header;
    month;
    htmlElement;
    agendaApp;

    //Hier maak ik een nieuw agenda-element aan met behulp van de  gegevens en rendert het op de webpagina, en ook de header en maandweergave.
    constructor(data, agendaApp) {
        this.agendaApp = agendaApp;
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("agenda");
        this.data = data;
        console.log(data);
        this.renderer = new Renderer();
        this.renderer.render("body", this.htmlElement);
        this.header = new Header(this, data.name, this.agendaApp);
        this.month = new Month(this, data.days);
    }


    //Hier render ik de placetorender en de whatToRender.
    render(placeToRender, whatToRender) {
        this.renderer.render(placeToRender, whatToRender);


    }
}



//Hier maak ik de class Header
class Header {
    //Hier maak ik de variabelen aan
    nameOfMonth;
    htmlElement;
    agenda;
    leftButton;
    rightButton;

    //Hier maak ik een header-element voor de agenda met de naam van de maand en twee knoppen ("vorige" en "volgende").
    // die voeg ik aan de agenda-HTML-elementen en de agenda-App.
    constructor(agenda, nameOfMonth, agendaApp) {
        this.agenda = agenda;
        this.agendaApp = agendaApp;
        this.nameOfMonth = nameOfMonth;
        this.htmlElement = document.createElement("header");
        this.htmlElement.classList.add("agenda__header");
        this.text = document.createElement("h2")
        this.agenda.render(".agenda", this.htmlElement);
        this.leftButton = new Button("previous", "<", "agenda--left", this, this.agendaApp);
        this.agenda.render(".agenda__header", this.text);
        this.rightButton = new Button("next", ">", "agenda--right", this, this.agendaApp);
        this.text.innerText = this.nameOfMonth;


    }

    //Hier render ik de placetorender en de whatToRender.
    render(placeToRender, whatToRender) {
        this.agenda.render(placeToRender, whatToRender);
    }
}


//Hier maak ik de class Button
class Button {

    //Hier maak ik de variabelen aan.
    htmlElement;
    innerText
    extraClass;
    switcher;
    header;
    type;

    //Hier creeer ik een knop-element met een specifiek type, een innerText en een extra klasse. 
    //Het knop-element wordt toegevoegd aan de agenda-HTML-elementen en de agenda-App. 
    //Wanneer je erop klik dan wordt de functie "buttonClicked" uitgevoerd.
    constructor(type, innerText, extraClass, header, agendaApp) {
        this.type = type;
        this.agendaApp = agendaApp;
        this.htmlElement = document.createElement("button");
        this.htmlElement.classList.add("agenda__button");
        this.extraClass = extraClass;
        this.htmlElement.classList.add(this.extraClass);
        this.innerText = innerText;
        this.htmlElement.innerText = this.innerText;
        // this.switcher = new Switcher(this.extraClass);
        this.header = header;
        this.render();

        this.htmlElement.onclick = this.buttonClicked;
    }

    //hier definieer ik een functie genaamd "buttonClicked" die wordt uitgevoerd wanneer er op een knop wordt geklikt. 
    //Als het type van de knop "previous" is, wordt de functie "switchMonths" van de agendaApp uitgevoerd.
    buttonClicked = () => {
        if (this.type === "previous") {
            this.agendaApp.switchMonths("-");
            return;
        }
        this.agendaApp.switchMonths("+");
    }

    //Hier render ik de header en de this.htmlelement.
    render() {
        this.header.render("header", this.htmlElement);
    }
}


// Hier maak ik de class Switcher
class Switcher {
    //Hier maak ik de variabelen aan
    agendaApp;
    agenda;
    cleaner;

    //Hier creëer ik een constructor-functie met 'agendaApp'. 
    //In de constructor wordt een attribuut 'agendaApp' aangemaakt met de waarde van de meegegeven 'agendaApp'. 
    //En er wordt er een nieuw object van het type 'Cleaner' aangemaakt en gelinkt aan het attribuut 'cleaner'.
    constructor(agendaApp) {
        this.agendaApp = agendaApp;
        this.cleaner = new Cleaner();
    }


    //Hier definieer  ik een functie "loadAgenda" die wordt gebruikt om een agenda te laden met behulp van de verstrekte gegevens.
    loadAgenda = (data) => {
        this.cleaner.clean("body");
        this.agenda = new Agenda(data, this.agendaApp);
    }
}

//Hier maak ik de class Month
class Month {
    //Hier maak ik de variabelen aan
    days = [];
    agenda;
    numberOfDays;
    htmlElement;


    //Hier maak ik een constructor-functie die wordt gebruikt om een maandweergave van een agenda te maken. 
    //Er wordt  een HTML-element <ul> aangemaakt aan en voegt de klasse "agenda__month" toe. 
    constructor(agenda, numberOfDays) {
        this.htmlElement = document.createElement("ul");
        this.htmlElement.classList.add("agenda__month");
        this.numberOfDays = numberOfDays;
        console.log(numberOfDays);
        this.agenda = agenda;
        this.agenda.render(".agenda", this.htmlElement);
        for (let i = 1; i <= numberOfDays; i++) {
            this.days.push(new Day(this, i));
        }
    }

    //Deze code bevat een functie genaamd "renderDays" die wordt gebruikt om inhoud op een specifieke plaats op de pagina weer te geven. 
    //Het maakt gebruik van de "render" methode van het "agenda" object om deinhoud weer te geven op de opgegeven locatie.
    renderDays(placeToRender, whatToRender) {
        this.agenda.render(placeToRender, whatToRender);
    }
}

//Hier maak ik een day class
class Day {

    //Hier maak ik de variabelen
    month;
    htmlElement;
    dayNumber;


    //Hier  is een constructor-functie die ik gebruik om een dag-element in de agenda te maken. 
    //Het dagnummer wordt opgeslagen in het attribuut "dayNumber".
    //Ook maak ik een HTML-element <li>  en de klasse "agenda__day" wordt toegevoegd.
    constructor(month, dayNumber) {
        this.dayNumber = dayNumber;
        this.htmlElement = document.createElement("li");
        this.htmlElement.classList.add("agenda__day");
        this.htmlElement.innerText = this.dayNumber;
        this.month = month;
        this.month.renderDays(".agenda__month", this.htmlElement);
    }
}