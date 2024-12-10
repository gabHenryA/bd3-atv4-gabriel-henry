const database = "bd3-atv4-gabriel-henry"

const collection = "CHAT"

use(database)

db.getCollection(collection).insertMany(
    [
        {
            "message": "Candy olha essa sujeira que você deixou esse quarto, que por sinal nem é nosso. ",
            "hourSent": "15:51",
            "dateSent": "2023-04-20",
            "sender": "Turimm",
            "senderNumber": "11992750284"
        },
        {
            "message": "Acho que está um pouco sujo mesmo",
            "hourSent": "15:52",
            "dateSent": "2023-04-20",
            "sender": "Meow",
            "senderNumber": "11984378290"
        },
        {
            "message": "Meow, seguinte eu tive uma ideia, vamos nós dois tirar alguma coisa de nossa bolsa mágica. Quem tirar o pior LIMPA TUDO",
            "hourSent": "15:53",
            "dateSent": "2023-04-20",
            "sender": "Turimm",
            "senderNumber": "11992750284"
        },
        {
            "message": "Ah, tabom",
            "hourSent": "15:54",
            "dateSent": "2023-04-20",
            "sender": "Meow",
            "senderNumber": "11984378290"
        },
        {
            "message": "HAHAHA",
            "hourSent": "15:55",
            "dateSent": "2023-04-20",
            "sender": "Meow",
            "senderNumber": "11984378290"
        },
        {
            "message": "Ah não cara",
            "hourSent": "15:56",
            "dateSent": "2023-04-20",
            "sender": "Turimm",
            "senderNumber": "11992750284"
        },
        {
            "message": "!!! Candy vem aqui",
            "hourSent": "15:57",
            "dateSent": "2023-04-20",
            "sender": "Turimm",
            "senderNumber": "11992750284"
        },
        {
            "message": "O qUe FoI tUrIm?",
            "hourSent": "15:58",
            "dateSent": "2023-04-20",
            "sender": "Candy",
            "senderNumber": "11928562058"
        },
        {
            "message": "Faz o seginte, limpa esse quarto!",
            "hourSent": "15:59",
            "dateSent": "2023-04-20",
            "sender": "Turimm",
            "senderNumber": "11992750284"
        },
        {
            "message": "MaS qUe QuArTo? Eu Ja LiMpEi ToDoS.",
            "hourSent": "16:00",
            "dateSent": "2023-04-20",
            "sender": "Candy",
            "senderNumber": "11928562058"
        },
        {
            "message": "CARACA!!!",
            "hourSent": "16:01",
            "dateSent": "2023-04-20",
            "sender": "Turimm",
            "senderNumber": "11992750284"
        },
        {
            "message": "OLOCO!!!",
            "hourSent": "16:02",
            "dateSent": "2023-04-20",
            "sender": "Meow",
            "senderNumber": "11984378290"
        }
    ]    
)