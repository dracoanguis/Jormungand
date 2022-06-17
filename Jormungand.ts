import { Bot } from './API'

const dragigon_id = '-1001471663702'

const bot = new Bot('5504051140:AAHjJVj6xmCSuOE_1xNIKJlU__StWkJfdKI');

//bot.sendMessage({chat_id:"967223501",text:"blip",reply_to_message_id:68});
//bot.getMe().then(val => console.log(val));

//bot.sendMessage({chat_id: dragigon_id, text:"My name is Jormungand, bow before me mortals!"});

//bot.sendPhoto({chat_id:dragigon_id, photo:'https://www.shutterstock.com/fr/search/dragon'});

bot.getUpdates({}).then(v => { for (var u of v) {
    console.log(u);
}});