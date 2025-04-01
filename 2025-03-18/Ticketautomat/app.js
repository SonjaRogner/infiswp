// State
// 1.APPLICATION STATE;
const state = {
    guthaben: 0,
    fahrpreis: 0,
    ziel: null,
    anzahlPersonen: 1,
    einnahmen: 0,
    textAusgabe: "Bitte wählen Sie Ihr Ziel!",
};

const zieleUndPreise = {
    Bregenz: 90,
    Eisenstadt: 13,
    Graz: 40,
    Innsbruck: 80,
    Klagenfurt: 60,
    Linz: 40,
    Salzburg: 60,
    "St. Pölten": 15,
};

// 2.STATE ACCESSORS / MUTATORS FN'S
function state_fahrgaeste(anzahl) {
    state.anzahlPersonen = anzahl;
    state.fahrpreis = zieleUndPreise[state.ziel] * anzahl;
    state_calculate_textAusgabe();
}

function state_change_ziel(ziel) {
    const einzelpreis = zieleUndPreise[ziel];
    state.ziel = ziel;
    state.fahrpreis = einzelpreis * state.anzahlPersonen;
    state_calculate_textAusgabe();
}

function state_einwerfen(betrag) {
    state.guthaben += betrag;
    state_calculate_textAusgabe();
}

function state_calculate_textAusgabe() {
    if (!state.ziel) {
        state.textAusgabe = "Bitte wählen Sie Ihr Ziel!";
        return;
    }
    const noch_nötig = state.fahrpreis - state.guthaben;
    if (noch_nötig > 0) {
        state.textAusgabe =
            `Ziel: ${state.ziel}\nBitte werfen Sie noch ${noch_nötig}€ ein!`;
    } else {
        state.textAusgabe =
            `Drücken Sie auf "Ticket kaufen"\num Ihr Ticket zu erhalten!`;
    }
}

// 3.DOM Node Refs
const einwerfenInput = document.getElementById("einwerfenBetrag");
const einwerfenButton = document.getElementById("einwerfenButton");
const zielSelect = document.getElementById("ziel");
const anzahlPersonenInput = document.getElementById("anzahlPersonen");
const fahrpreisSpan = document.getElementById("fahrpreis");
const guthabenSpan = document.getElementById("guthaben");
const ticketAusgabeTextarea = document.getElementById("ticketAusgabe");
const einnahmenSpan = document.getElementById("einnahmen");
const ticketKaufen = document.getElementById("ticketKaufen");
const resetBtn = document.getElementById("reset");

// 5.RENDER FN
function render() {
    ticketAusgabeTextarea.textContent = state.textAusgabe;
    guthabenSpan.textContent = state.guthaben;
    fahrpreisSpan.textContent = state.fahrpreis;
    einnahmenSpan.textContent = state.einnahmen;
}

// 6.EVENT HANDLERS
function onEinwurf() {
    const geld = einwerfenInput.valueAsNumber;
    if (isNaN(geld) || geld <= 0) {
        state.textAusgabe = "Bitte geben Sie einen gültigen Betrag ein!";
    } else {
        state_einwerfen(geld);
        einwerfenInput.value = ''; 
    }
    render();
}

function onZielSelect() {
    state_change_ziel(zielSelect.value);
    render();
}

function onTicketKaufen() {
    try {
        if (!state.ziel) {
            state.textAusgabe = "Bitte wählen Sie ein Ziel!";
            return;
        }
       
        const summe = state.fahrpreis;
        const gegeben = state.guthaben;
        const restgeld = gegeben - summe;

        state.textAusgabe = `===============================\n=== Fahrkarte nach ${state.ziel} ===\n===============================\nEinzelpreis: € ${zieleUndPreise[state.ziel]}.-\nAnzahl der Fahrgäste: ${state.anzahlPersonen}\n===============================\nSumme: € ${summe}.-\n===============================\nGegeben: € ${gegeben}.-\nRestgeld: € ${restgeld}.-\n===============================`;
       
        state.einnahmen += summe; 
        state.guthaben = 0; 
        state.anzahlPersonen = 1; 
    } catch (e) {
        console.error(e);
        state.textAusgabe = "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.";
    } finally {
        render();
    }
}

function onAnzahlChange() {
    const fahrgaeste = anzahlPersonenInput.value;
    state_fahrgaeste(fahrgaeste);
    render();
}

function onReset() {
    state.guthaben = 0;
    state.fahrpreis = 0;
    state.ziel = null;
    state.anzahlPersonen = 1;
    state.einnahmen = 0;
    state.textAusgabe = "Bitte wählen Sie Ihr Ziel!";
   
    einwerfenInput.value = '';
    anzahlPersonenInput.value = 1; 
    zielSelect.value = "Zielwahl:"; 

    render();
}

// 7.INIT BINDINGS
einwerfenInput.addEventListener("keyup", (e) => {
    if (e.key != "Enter") {
        return;
    }
    onEinwurf();
});
einwerfenButton.addEventListener("click", () => {
    onEinwurf();
});
zielSelect.addEventListener("change", onZielSelect);
anzahlPersonenInput.addEventListener("change", onAnzahlChange);
ticketKaufen.addEventListener("click", onTicketKaufen);
resetBtn.addEventListener("click", onReset);

// 8.INITIAL RENDER
const options = Object.keys(zieleUndPreise);
options.unshift("Zielwahl:");
zielSelect.innerHTML = options
    .map((e) => `<option value="${e}">${e}</option>`)
    .join("\n");
render();