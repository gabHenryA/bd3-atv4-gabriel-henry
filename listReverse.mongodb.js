const database = "bd3-atv4-gabriel-henry"

const collection = "CHAT"

use(database)

db.getCollection(collection).find().sort({dateSent: -1, hourSent: -1})