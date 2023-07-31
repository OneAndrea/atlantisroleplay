(function () {
  emailjs.init("psPoVBAT2IZq06awb"); // Inizializza l'API di emailjs con la chiave
})();

let emailSent = false; // Variabile di stato per tenere traccia dell'invio dell'email
let previousEmails = []; // Array per memorizzare le email già inviate
let countdownStarted = false; // Flag per indicare se il conto alla rovescia è stato avviato

function sendMail(event) {
  event.preventDefault(); // previene il comportamento predefinito del pulsante di invio

  const emailInput = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailInput.value || !emailRegex.test(emailInput.value)) {
    return; // Termina la funzione se l'input email è vuoto o non corrisponde al formato email
  }

  if (previousEmails.includes(emailInput.value)) {
    alert("Hai già inviato un'email con questo indirizzo."); // Mostra un avviso se l'email è già stata inviata in precedenza
    return; // Termina la funzione se l'email è già stata inviata in precedenza
  }

  const captcha = document.querySelector('.h-captcha');
  const token = captcha.querySelector('textarea').value;

  if (!token) {
    openPopup(); // Apre una popup se il token del captcha non è presente
    return; // Termina la funzione se il token del captcha non è presente
  }


  const params = {
    email: emailInput.value, // Ottiene il valore dell'input email e lo assegna alla chiave "email" nell'oggetto params
    "g-recaptcha-response": token, // Assegna il valore del token del captcha alla chiave "g-recaptcha-response" nell'oggetto params
  };
  
  const serviceID = "kuralgfx"; // Identificatore del servizio di emailjs
  const templateID = "kuralgfxshop"; // Identificatore del template di emailjs
  
  emailjs.send(serviceID, templateID, params) // Invia l'email utilizzando il servizio, il template e i parametri specificati
    .then((res) => {
      emailInput.value = ""; // Cancella il valore dell'input email dopo l'invio
      console.log(res); // Stampa la risposta dell'API di emailjs nella console
      emailSent = true; // Imposta la variabile di stato "emailSent" a true per indicare che l'email è stata inviata
      previousEmails.push(emailInput.value); // Aggiunge l'email appena inviata all'array delle email inviate in precedenza
      openEmailSentPopup(); // Apre una popup per confermare che l'email è stata inviata
      window.scrollTo(0, 0); // Scrolling verso l'inizio della pagina
      startCountdown(); // Avvia il conto alla rovescia quando l'email viene inviata con successo
    })
    .catch((err) => console.log(err)); // Gestisce eventuali errori durante l'invio dell'email
  }

 // Funzione per avviare il conto alla rovescia
function startCountdown() {
  if (!countdownStarted) {
    countdownStarted = true;
    countdown();
  }
}

// Funzione per il conto alla rovescia
function countdown() {
  var timerElement = document.getElementById('timer');
  var seconds = parseInt(timerElement.innerHTML);

  if (seconds > 0) {
    seconds--;
    timerElement.innerHTML = seconds;
    setTimeout(countdown, 1000); // Richiama la funzione dopo 1 secondo
  } else {
    // Azioni da eseguire al termine del conto alla rovescia
    location.reload(); // Ricarica la pagina alla fine del conto alla rovescia
  }
}
  
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    disabledEvent(e); // Chiamata alla funzione disabledEvent() se viene premuto CTRL+SHIFT+I
  }
});

function disabledEvent(e) {
  e.stopPropagation(); // Interrompe la propagazione dell'evento
  e.preventDefault(); // Impedisce il comportamento predefinito dell'evento
  return false; // Restituisce false per indicare che l'evento è stato disabilitato
}
  
  // blocco scorciatoie da tastiera
  document.onkeydown = function (event) {
  if (event.keyCode == 123 || (event.ctrlKey && event.shiftKey && (event.keyCode == 'I'.charCodeAt(0) || event.keyCode == 'C'.charCodeAt(0) || event.keyCode == 'J'.charCodeAt(0))) || (event.ctrlKey && event.keyCode == 'U'.charCodeAt(0))) {
  return false;
  }
  };
  
  // blocco tasto destro del mouse
  document.oncontextmenu = function () {
  return false;
  };
  
  // caricamento asincrono di hCaptcha
  var hcaptchaOnLoad = function () {
  hcaptcha.reset(); // resetta l'hCaptcha per permettere di risolverlo di nuovo
  };
  
  var enableSubmit = function () {
  document.getElementById('submit').disabled = false; // abilita il pulsante di invio
  };

  // Cursore personalizzato
document.addEventListener("DOMContentLoaded", function(event) {
  var cursor = document.createElement("div"); // Crea un elemento di divisione per il cursore personalizzato
  cursor.className = "custom-cursor"; // Assegna la classe "custom-cursor" all'elemento del cursore
  document.body.appendChild(cursor); // Aggiunge l'elemento del cursore al corpo del documento HTML

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); // Verifica se l'utente sta utilizzando un dispositivo mobile

  if (!isMobile) {
    // Se non è un dispositivo mobile
    document.addEventListener("mousemove", function(e) {
      cursor.style.display = "block"; // Mostra il cursore personalizzato quando il mouse è sopra il sito
      var x = e.clientX; // Ottiene la coordinata X del mouse rispetto alla finestra
      var y = e.clientY; // Ottiene la coordinata Y del mouse rispetto alla finestra
      cursor.style.left = x + "px"; // Imposta la posizione orizzontale del cursore personalizzato
      cursor.style.top = y + "px"; // Imposta la posizione verticale del cursore personalizzato
    });

    document.addEventListener("mouseleave", function(e) {
      cursor.style.display = "none"; // Nascondi il cursore personalizzato quando il mouse esce dal sito
    });
  } else {
    cursor.style.display = "none"; // Nascondi il cursore personalizzato sui dispositivi mobili
  }
});

  // Animazione gif del logo
document.addEventListener("DOMContentLoaded", function(event) {
  var gifImage = document.getElementById("gifImage"); // Ottiene l'elemento dell'immagine GIF del logo
  var pngImage = document.getElementById("pngImage"); // Ottiene l'elemento dell'immagine PNG del logo

  gifImage.addEventListener("load", function() {
    gifImage.style.display = "block"; // Mostra l'immagine GIF del logo
    pngImage.style.display = "none"; // Nasconde l'immagine PNG del logo
  });
});

// Disabilita la selezione del testo
document.addEventListener('DOMContentLoaded', function() {
  disableTextSelection();
});

function disableTextSelection() {
  document.addEventListener('selectstart', function(e) {
    if (!e.target.matches('input, textarea')) {
      e.preventDefault(); // Impedisce la selezione del testo se l'elemento selezionato non è un input o textarea
    }
  });

  document.addEventListener('mousedown', function(e) {
    if (!e.target.matches('input, textarea')) {
      e.preventDefault(); // Impedisce la selezione del testo se l'elemento cliccato non è un input o textarea
    }
  });
}
  
// Opzioni per il listener passivo
const options = {
  passive: true
};

// Flag per indicare se lo scorrimento è in corso
let scrolling = false;

// Aggiungi il listener passivo per lo scorrimento
window.addEventListener('scroll', scrollHandler, options);

// Funzione di gestione dello scorrimento
function scrollHandler() {
  if (!scrolling) {
    scrolling = true;
    requestAnimationFrame(scrollCallback);
  }
}

// Funzione di callback per lo scorrimento
function scrollCallback() {
  // Codice per gestire lo scorrimento

  scrolling = false;
}

// Popup personalizzato
function openPopup() {
  document.getElementById("popup").style.display = "block"; // Mostra il popup impostando il display su "block"
}

function closePopup() {
  document.getElementById("popup").style.display = "none"; // Nasconde il popup impostando il display su "none"
}

// Secondo popup: email inviata correttamente
function openEmailSentPopup() {
  document.getElementById("emailSentPopup").style.display = "block"; // Mostra il popup di conferma di email inviata correttamente
}

function closeEmailSentPopup() {
  document.getElementById("emailSentPopup").style.display = "none"; // Nasconde il popup di conferma di email inviata correttamente
}

element.addEventListener('scroll', handleScroll, { passive: true });