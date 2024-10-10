import * as fs from 'fs';

import path from 'path';

const PATH = path.join(__dirname, 'history.json');

const getHistory=()=>{
    const messagesCollectionBuffer= fs.readFileSync(PATH);
    const messagesCollection= JSON.parse(messagesCollectionBuffer);
    return messagesCollection;
};

const eraseHistory=()=>{
    fs.writeFileSync(PATH, '[]');
    return true;
}

const pushMessage= (message, userName)=>{
    const messagesCollection= getHistory();
    const messageObj={
        message: message,
        sentBy:userName,
        date: new Date().toLocaleString('es-ES',{timeZone: 'UTC'})
    };
    messagesCollection.push(messageObj);
    const historyJsonString= JSON.stringify(messagesCollection, null,2);
    fs.writeFileSync(PATH, historyJsonString);
};

export{getHistory, eraseHistory, pushMessage};