var config = {}

config.host = process.env.HOST || "https://smartbite.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "UjpHlffsn4w0UBdnlZBCHqmcopvDOaCMyTOfwgwe98vk29NYsgUrHMD0FTRgLS5kIWyorNbYowHk9dnZ3EfFvA==";
config.databaseId = "ToDoList";
config.collectionId = "Smart";

module.exports = config;