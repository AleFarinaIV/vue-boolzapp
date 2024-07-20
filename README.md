# Descrizione

Milestone 1
● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto

Milestone 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)

Milestone 5 - opzionale
● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato
● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

# Scomposizione del problema

Milestone 1: 

Setting dell'istanza di applicazione

Setting di un array di oggetti come data

Utilizzo di V-for per inserire img e name dell'utente nellalista contatti

Milestone 2:

current_chat counter as data

Dichiaro una funzione per il click del contatto con apertura diretta della chat

All'apertura della chat visualizzare a schermo i messaggi con il contatto

Milestone 3:

Dichiaro una funzione per la creazione di un nuovo messaggio da parte dell'utente, di una risposta del contatto e il reset del tutto dopo l'invio

Tramite input do la possibilità di scrittura e con pulsante 'Enter' da tastiera dell'invio del messaggio

Milestone 4:

Dichiaro due nuove coppie chiave:valore as data; una stringa vuota per la ricerca del contatto e un array vuoto per i contatti filtrati

Dichiaro una funzione per ottenere l'indice di un contatto

Dichiaro una funzione per il click del contatto

Dichiaro una funzione per filtrare la lista contatti

Passo il tutto nel DOM con l'utilizzo delle corrette direttive Vue