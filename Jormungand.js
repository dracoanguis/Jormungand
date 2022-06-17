"use strict";
exports.__esModule = true;
var API_1 = require("./API");
var dragigon_id = '-1001471663702';
var bot = new API_1.Bot('5504051140:AAHjJVj6xmCSuOE_1xNIKJlU__StWkJfdKI');
//bot.sendMessage({chat_id:"967223501",text:"blip",reply_to_message_id:68});
//bot.getMe().then(val => console.log(val));
//bot.sendMessage({chat_id: dragigon_id, text:"My name is Jormungand, bow before me mortals!"});
//bot.sendPhoto({chat_id:dragigon_id, photo:'https://www.shutterstock.com/fr/search/dragon'});
bot.getUpdates({}).then(function (v) {
    for (var _i = 0, v_1 = v; _i < v_1.length; _i++) {
        var u = v_1[_i];
        console.log(u);
    }
});
