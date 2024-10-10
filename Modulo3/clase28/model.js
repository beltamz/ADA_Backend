import * as model from './model.js';

const getHistory=()=>{
    return model.getHistory();
};

const eraseHistory= ()=>{
    return model.eraseHistory();
};

const pushMessage= (message, userName)=>{
    return model.pushMessage(message, userName);
}

export {getHistory, eraseHistory, pushMessage};