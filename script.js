console.log('vue',Vue)

const app=Vue.createApp({
    name:'Boolzapp',
    data(){
        return{
            user: {
                name: 'Nome Utente',
                avatar: '_io'
            },
            contacts: [
                {
                  id: 1,
                  name: 'Michele',
                  avatar: '_1',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Hai portato a spasso il cane?',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di stendere i panni',
                      status: 'sent'
                    },
                    {
                      id: 3,
                      date: '10/01/2020 16:15:22',
                      message: 'Tutto fatto!',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 2,
                  name: 'Fabio',
                  avatar: '_2',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '20/03/2020 16:30:00',
                      message: 'Ciao come stai?',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '20/03/2020 16:30:55',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                    },
                    {
                      id: 3,
                      date: '20/03/2020 16:35:00',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'sent'
                    }
                  ],
                },
                {
                  id: 3,
                  name: 'Samuele',
                  avatar: '_3',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '28/03/2020 10:10:40',
                      message: 'La Marianna va in campagna',
                      status: 'received'
                    },
                    {
                      id: 2,
                      date: '28/03/2020 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                    },
                    {
                      id: 3,
                      date: '28/03/2020 16:15:22',
                      message: 'Ah scusa!',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 4,
                  name: 'Alessandro B.',
                  avatar: '_4',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Lo sai che ha aperto una nuova pizzeria?',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 5,
                  name: 'Alessandro L.',
                  avatar: '_5',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Ricordati di chiamare la nonna',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Va bene, stasera la sento',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 6,
                  name: 'Claudia',
                  avatar: '_5',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao Claudia, hai novità?',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Non ancora',
                      status: 'received'
                    },
                    {
                      id: 3,
                      date: '10/01/2020 15:51:00',
                      message: 'Nessuna nuova, buona nuova',
                      status: 'sent'
                    }
                  ],
                },
                {
                  id: 7,
                  name: 'Federico',
                  avatar: '_7',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Fai gli auguri a Martina che è il suo compleanno!',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Grazie per avermelo ricordato, le scrivo subito!',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 8,
                  name: 'Davide',
                  avatar: '_8',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao, andiamo a mangiare la pizza stasera?',
                      status: 'received'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                      status: 'sent'
                    },
                    {
                      id: 3,
                      date: '10/01/2020 15:51:00',
                      message: 'OK!!',
                      status: 'received'
                    }
                  ],
                }
            ],
            currentContact:{
              name: 'Michele',
              avatar: '_1',
              messages: [
                {
                  id: 1,
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent'
                },
                {
                  id: 2,
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent'
                },
                {
                  id: 3,
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received'
                },
              ],
            },
          newMessage:'',
          filter:'',
        }
    },
    computed:{
      filterName(){
        const term=this.filter.toLowerCase();
        return this.contacts.filter((contact)=>{
          return contact.name.toLowerCase().includes(term)
        });
      }
    },
    methods:{
        currentChat(contact){
            this.currentContact.name = contact.name;
            this.currentContact.avatar=contact.avatar;
            this.currentContact.messages=contact.messages
        },
        newMsg(){
          if(!this.newMessage.length)return
          this.currentContact.messages.push({
            id:this.currentContact.messages.length+1,
            date:this.newDate(),
            message: this.newMessage,
            status:'sent',
          })
          this.newMessage='';
          setTimeout(() => {
            const replayMessage={
              id:this.currentContact.messages.length+1,
              date:this.newDate(),
              message:'ok',
              status:'received',
            };
            this.currentContact.messages.push(replayMessage)
          },1000);
        },
        newDate(){
          const now= new Date();
          const year=now.getFullYear();
          const month=(now.getMonth()+1);
          const day=now.getDay();
          const hours=now.getHours();
          const Minutes=now.getMinutes();
          const seconds=now.getSeconds();
          const today=`${day}/${month}/${year}`;
          const time=`${hours}:${Minutes}:${seconds}`; 
          const date=`${today}  ${time}`;
          return date;
        },
    }
});
app.mount('#root');