const { createApp } = Vue;
const { DateTime } = luxon;

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                }, {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                }, {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                }, {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                }, {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                }, {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                }, {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            current_chat: 0,
            new_message: '',
            contact_search: '',
            filtered_contacts: [],
            emojis_array: [
                "😀","😁","😂","😃","😄",
                "😅","😆","😇","😈","😉",
                "😊","😋","😌","😍","😎",
                "😏","😐","😑","😒","😓",
                "😔","😕","😖","😘","🤡",
                "🤥","🧐","🤮","🤬","🤫",
                "🤠","🤑","🤐","😷","😴"
            ],
            contact_random_messages: [
                "Ciao amico","Sisi tutto apposto, grazie!","Senti ma, ti va una partita a Rocket League?",
                "Oggi andiamo al mare, vieni con noi?","Daje zi","Stasera andiamo al MC, ti passo a prendere per le 8",
                "È il momento di un po' di gambling, solo io e te!","Stasera ci sei per un calcetto? Ci manca il decimo 😆",
                "Ciao Fabrizio/Luigi/Alessio se avrete pazienza di provare tutti questi messaggi randomici arriverete anche a questo.\
                Volevo dirvi che state facendo un ottimo lavoro col corso, daje forte!"
            ]
        };
    },
    created() {
        this.filterContacts();
    },
    methods: {

        getContactId(contact) {
            return this.contacts.indexOf(contact);
        },

        contactClick(contact) {
            this.current_chat = this.getContactId(contact);
            console.log('contact clicked', this.current_chat);
        },

        newMessage() {
            const currentDate = DateTime.now().toFormat('dd/mm/yyyy HH:mm');

            let new_message_added = {
                message: this.new_message,
                status: 'sent',
                date: currentDate
            };

            let contact_answer = {
                message: this.randomContactMessages(),
                status: 'received',
                date: currentDate
            };

            if (this.new_message !== '') {
                this.contacts[this.current_chat].messages.push(new_message_added);

                let last_access = document.getElementById('contact_online');

                setTimeout(() => {
                    last_access.textContent = "Online"
                }, 1000);

                setTimeout(() => {
                    last_access.textContent = "Sta scrivendo..."
                }, 2000);

                setTimeout(() => {
                    this.contacts[this.current_chat].messages.push(contact_answer);
                    last_access.textContent = "Online"
                }, 4000)

                setTimeout(() => {
                    // let current_hour = this.currentHour();
                    let last_access_hour = this.getLastMessage(this.contacts[this.current_chat])
                    last_access.textContent = "Ultimo accesso oggi alle " + last_access_hour.date.split(' ')[1]
                    console.log(last_access_hour)
                }, 5000);

            }

            this.new_message = '';
        },

        filterContacts() {
            this.filtered_contacts = this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(this.contact_search.toLowerCase())
            )
        },

        getLastMessage(contact) {
            if (contact.messages.length > 0) {
                return contact.messages[contact.messages.length - 1];
            }
        },

        deleteAnyMessage(contactIndex, messageIndex) {
            this.contacts[contactIndex].messages.splice(messageIndex, 1);
        },

        addEmoji(emoji, event) {
            event.stopPropagation()

            this.new_message += emoji;

            this.$nextTick(() => {
                this.$refs.messageInput.focus();
            })
        },

        randomContactMessages() {
            const randomIndex = Math.floor(Math.random() * this.contact_random_messages.length);
            return this.contact_random_messages[randomIndex];
        }
    }
}).mount('#app')